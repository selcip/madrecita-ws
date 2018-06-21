'use strict';

/**
 * Usuarios.js controller
 *
 * @description: A set of functions called "actions" for managing `Usuarios`.
 */

module.exports = {

  /**
   * Retrieve usuarios records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.usuarios.fetchAll(ctx.query);
  },

  /**
   * Retrieve a usuarios record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.usuarios.fetch(ctx.params);
  },

  /**
   * Create a/an usuarios record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.usuarios.add(ctx.request.body);
  },

  /**
   * Update a/an usuarios record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.usuarios.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an usuarios record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.usuarios.remove(ctx.params);
  },

  /**
   * Add relation to a/an usuarios record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.usuarios.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an usuarios record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.usuarios.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an usuarios record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.usuarios.removeRelation(ctx.params, ctx.request.body);
  }
};
