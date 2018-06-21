'use strict';

/**
 * Produtos.js controller
 *
 * @description: A set of functions called "actions" for managing `Produtos`.
 */

module.exports = {

  /**
   * Retrieve produtos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.produtos.fetchAll(ctx.query);
  },

  /**
   * Retrieve a produtos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.produtos.fetch(ctx.params);
  },

  /**
   * Create a/an produtos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.produtos.add(ctx.request.body);
  },

  /**
   * Update a/an produtos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.produtos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an produtos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.produtos.remove(ctx.params);
  },

  /**
   * Add relation to a/an produtos record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.produtos.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an produtos record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.produtos.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an produtos record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.produtos.removeRelation(ctx.params, ctx.request.body);
  }
};
