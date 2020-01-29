'use strict'

const { Model } = require('objection')

class Goals extends Model {
    static get tableName() {
        return 'goals'
    }

    static get relationMappings() {
        const Users = require('./users')

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: 'goals.userId',
                    to: 'users.id',
                },
            },
        }
    }
}
