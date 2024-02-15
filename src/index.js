// ./src/index.js
    'use strict';
    var admin = require("firebase-admin");
    var serviceAccount = require("/Users/r10/Desktop/strapiTest/strapiEndTest/src/strapi-test11-firebase-adminsdk-990ux-f8ff60990b.json");
    module.exports = {
      /**
       * An asynchronous register function that runs before
       * your application is initialized.
       */
       register({ strapi }) {},
      /**
       * An asynchronous bootstrap function that runs before
       * your application gets started.
       *
       */
      bootstrap({ strapi }) {
        let firebase = admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        //Make Firebase available everywhere
        strapi.firebase = firebase;
        let messaging = firebase.messaging();
    
        let sendNotification = (fcm, data, info) => {
          let message = {
            ...data,
            token: fcm,
            data: info
          }

          console.log(message)

          messaging.send(message).then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log(error);
          });
        }
        let sendNotificationToTopic = (topic_name, data) => {
          let message = {
            ...data,
            topic: topic_name
          }
          messaging.send(message).then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log(error);
          });
        }
        let subscribeTopic = (fcm, topic_name) => {
          messaging.subscribeToTopic(fcm, topic_name).then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log(error);
          });
        }
        //Make the notification functions available everywhere
        strapi.notification = {
          subscribeTopic,
          sendNotificationToTopic,
          sendNotification
        }
      },
    };
    
