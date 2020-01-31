'use strict'

const { Model } = require('objection')

class Costs extends Model {
    static get tableName() {
        return 'costs'
    }

    static get relationMappings() {
        const Users = require('./users')

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'costs.userId',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = Costs