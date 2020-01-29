'use strict'

const { Model } = require('objection')

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        const inMoney = require('./inMoney')
        const Debts = require('./debts')
        const Goals = require('./goals')
        const Costs = require('./costs')
        const Currency = require('./currency')

        return {
            inMoney: {
                relation: Model.HasManyRelation,
                modelClass: inMoney,
                join: {
                    from: 'users.id',
                    to: 'inMoney.userId',
                },
            },
            debts: {
                relation: Model.HasManyRelation,
                modelClass: Debts,
                join: {
                    from: 'users.id',
                    to: 'debts.userId',
                },
            },
            goals: {
                relation: Model.HasManyRelation,
                modelClass: Goals,
                join: {
                    from: 'users.id',
                    to: 'goals.userId',
                },
            },
            costs: {
                relation: Model.HasManyRelation,
                modelClass: Costs,
                join: {
                    from: 'users.id',
                    to: 'costs.userId',
                },
            },
            currency: {
                relation: Model.BelongsToOneRelation,
                modelClass: Currency,
                join: {
                  from: 'users.currency',
                  to: 'cuurency.id',
                },
            },
        }
    }
}
