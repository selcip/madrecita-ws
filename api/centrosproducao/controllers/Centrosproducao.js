'use strict';

/**
 * Centrosproducao.js controller
 *
 * @description: A set of functions called "actions" for managing `Centrosproducao`.
 */

module.exports = {

  /**
   * Retrieve centrosproducao records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.centrosproducao.fetchAll(ctx.query);
  },

  /**
   * Retrieve a centrosproducao record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.centrosproducao.fetch(ctx.params);
  },

  /**
   * Create a/an centrosproducao record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.centrosproducao.add(ctx.request.body);
  },

  /**
   * Update a/an centrosproducao record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.centrosproducao.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an centrosproducao record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.centrosproducao.remove(ctx.params);
  },

  /**
   * Add relation to a/an centrosproducao record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.centrosproducao.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an centrosproducao record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.centrosproducao.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an centrosproducao record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.centrosproducao.removeRelation(ctx.params, ctx.request.body);
  }
};
