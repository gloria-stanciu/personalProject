'use strict'

const { Model } = require('objection')

class inMoney extends Model {
    static get tableName() {
        return 'inMoney'
    }

    static get relationMappings() {
        const Users = require('./users')

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'inMoney.userId',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = inMoney