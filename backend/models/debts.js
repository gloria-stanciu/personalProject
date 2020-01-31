'use strict'

const { Model } = require('objection')

class Debts extends Model {
    static get tableName() {
        return 'debts'
    }

    static get relationMappings() {
        const Users = require('./users')

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'debts.userId',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = Debts