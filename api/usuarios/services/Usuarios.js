'use strict';

/**
 * Usuarios.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all usuarios.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    const convertedParams = strapi.utils.models.convertParams('usuarios', params);

    return Usuarios.query(function(qb) {
      _.forEach(convertedParams.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (convertedParams.sort) {
        qb.orderBy(convertedParams.sort.key, convertedParams.sort.order);
      }

      qb.offset(convertedParams.start);

      qb.limit(convertedParams.limit);
    }).fetchAll({
      withRelated: _.keys(_.groupBy(_.reject(strapi.models.usuarios.associations, {autoPopulate: false}), 'alias'))
    });
  },

  /**
   * Promise to fetch a/an usuarios.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    return Usuarios.forge(_.pick(params, 'id')).fetch({
      withRelated: _.keys(_.groupBy(_.reject(strapi.models.usuarios.associations, {autoPopulate: false}), 'alias'))
    });
  },

  /**
   * Promise to add a/an usuarios.
   *
   * @return {Promise}
   */

  add: async (values) => {
    const data = await Usuarios.forge(_.omit(values, _.keys(_.groupBy(strapi.models.usuarios.associations, 'alias')))).save();
    await strapi.hook.bookshelf.manageRelations('usuarios', _.merge(_.clone(data.toJSON()), { values }));
    return data;
  },

  /**
   * Promise to edit a/an usuarios.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    await strapi.hook.bookshelf.manageRelations('usuarios', _.merge(_.clone(params), { values }));
    return Usuarios.forge(params).save(_.omit(values, _.keys(_.groupBy(strapi.models.usuarios.associations, 'alias'))), {path: true});
  },

  /**
   * Promise to remove a/an usuarios.
   *
   * @return {Promise}
   */

  remove: (params) => {
    _.forEach(Usuarios.associations, async association => {
      await Usuarios.forge(params)[association.alias]().detach();
    });
    return Usuarios.forge(params).destroy();
  }
};
