'use strict'

const { Model } = require('objection')

class totalMoney extends Model {
    static get tableName() {
        return 'totalMoney'
    }

    static get relationMappings() {
        const Users = require('./users')

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'totalMoney.userId',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = totalMoney