'use strict'

const { Model } = require('objection')

class Currency extends Model {
    static get tableName() {
        return 'currency'
    }

    static get relationMappings() {
        const Users = require('./users')

        return {
            users: {
                relation: Model.HasManyRelation,
                modelClass: Users,
                join: {
                    from: 'currency.id',
                    to: 'users.currency',
                },
            },
        }
    }
}

module.exports = Currency