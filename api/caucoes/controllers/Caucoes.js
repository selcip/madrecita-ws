'use strict';

/**
 * Caucoes.js controller
 *
 * @description: A set of functions called "actions" for managing `Caucoes`.
 */

module.exports = {

  /**
   * Retrieve caucoes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.caucoes.fetchAll(ctx.query);
  },

  /**
   * Retrieve a caucoes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.caucoes.fetch(ctx.params);
  },

  /**
   * Create a/an caucoes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.caucoes.add(ctx.request.body);
  },

  /**
   * Update a/an caucoes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.caucoes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an caucoes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.caucoes.remove(ctx.params);
  },

  /**
   * Add relation to a/an caucoes record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.caucoes.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an caucoes record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.caucoes.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an caucoes record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.caucoes.removeRelation(ctx.params, ctx.request.body);
  }
};
