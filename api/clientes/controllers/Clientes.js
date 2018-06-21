'use strict';

/**
 * Clientes.js controller
 *
 * @description: A set of functions called "actions" for managing `Clientes`.
 */

module.exports = {

  /**
   * Retrieve clientes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.clientes.fetchAll(ctx.query);
  },

  /**
   * Retrieve a clientes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.clientes.fetch(ctx.params);
  },

  /**
   * Create a/an clientes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.clientes.add(ctx.request.body);
  },

  /**
   * Update a/an clientes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.clientes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an clientes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.clientes.remove(ctx.params);
  },

  /**
   * Add relation to a/an clientes record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.clientes.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an clientes record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.clientes.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an clientes record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.clientes.removeRelation(ctx.params, ctx.request.body);
  }
};
