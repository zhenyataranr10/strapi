'use strict';

/**
 * users-fsm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-fsm.users-fsm');
