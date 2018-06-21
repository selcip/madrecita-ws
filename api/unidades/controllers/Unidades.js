'use strict';

/**
 * Unidades.js controller
 *
 * @description: A set of functions called "actions" for managing `Unidades`.
 */

module.exports = {

  /**
   * Retrieve unidades records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.unidades.fetchAll(ctx.query);
  },

  /**
   * Retrieve a unidades record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.unidades.fetch(ctx.params);
  },

  /**
   * Create a/an unidades record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.unidades.add(ctx.request.body);
  },

  /**
   * Update a/an unidades record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.unidades.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an unidades record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.unidades.remove(ctx.params);
  },

  /**
   * Add relation to a/an unidades record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.unidades.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an unidades record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.unidades.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an unidades record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.unidades.removeRelation(ctx.params, ctx.request.body);
  }
};
