"use strict";
const { Expo } = require("expo-server-sdk");
const getExpoSender = require("./expoSender");
const getManageReceipts = require("./manageReceipts");

const getStartFromQuery = (query) => {
  const { page, pageSize } = query;
  if (Number(page) <= 1) {
    return 0;
  }
  return (Number(page) - 1) * pageSize;
};

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany(
      "plugin::expo-notifications.exponotification",
      query
    );
  },
  async findFrom(query = { page: "1", pageSize: "10" }) {
    const start = getStartFromQuery(query);
    const count = await strapi.entityService.count(
      "plugin::expo-notifications.exponotification"
    );
    const notifications = await strapi.entityService.findMany(
      "plugin::expo-notifications.exponotification",
      {
        start: start,
        limit: query.pageSize,
        sort: "createdAt:desc",
      }
    );
    return { notifications, count };
  },
  async recipientsFrom(start) {
    const count = await strapi.entityService.count(
      "plugin::users-permissions.user"
    );
    const customFieldName = await strapi
      .plugin("expo-notifications")
      .config("customFieldName");
    let recipients = [];
    if (customFieldName) {
      const rawRecipients = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          start: start,
          filters: {
            [customFieldName]: {
              $notNull: true,
            },
          },
        }
      );
      rawRecipients.forEach((item) => {
        item.expoPushToken = item[customFieldName];
        recipients.push(item);
      });
    } else {
      recipients = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          start: start,
          filters: {
            expoPushToken: {
              $notNull: true,
            },
          },
        }
      );
    }
    return { recipients, count };
  },
  async processNotification(body) {
    const { data, tokens } = body;
    
    const strapiNotificationResult = await strapi.entityService.create(
      "plugin::expo-notifications.exponotification",
      {
        data: {
          title: data.title,
          subtitle: data.subtitle,
          data: { contentType: data.contentType, entryId: data.entryId },
        },
      }
    );

    let users = await strapi.entityService.findMany('api::users-fsm.users-fsm');

    users.forEach(user => {
        strapi.notification.sendNotification(user.fcm, {
            notification: {
                title: data.title,
                body: data.subtitle
            }
        },
        {
            id: "" + data.entryId
        });
    });
    
    return { strapiNotificationResult };
  },
  async update(id, data) {
    return await strapi.entityService.update(
      "plugin::expo-notifications.exponotification",
      id,
      data
    );
  },
  
  async delete(id) {
    return await strapi.entityService.delete(
      "plugin::expo-notifications.exponotification",
      id
    );
  },
});
