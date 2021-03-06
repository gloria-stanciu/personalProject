exports.up = function (knex) {
  return knex.schema
    .createTable('users', column => {
      column
        .increments('id')
        .unsigned()
        .primary()
      column.string('fullName').notNullable()
      column.string('username').notNullable()
      column.string('email').notNullable()
      column.string('password').notNullable()
      column.enum('role', ['admin', 'user']).notNullable()
      column
        .decimal('totalMoney', 8, 2)
        .notNullable()
        .defaultTo(0)
      column
        .decimal('totalDebts', 8, 2)
        .notNullable()
        .defaultTo(0)
      column
        .decimal('totalCosts', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.integer('goalsNumber').defaultTo(0)
      column.boolean('verified').defaultTo(false)
    })
    .createTable('totalMoney', column => {
      column
        .increments('id')
        .unsigned()
        .primary()
      column
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
      column.string('type').notNullable()
      column
        .decimal('amount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.text('details')
    })
    .createTable('debts', column => {
      column
        .increments('id')
        .unsigned()
        .primary()
      column
        .integer('userId')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
      column
        .string('type').notNullable()
      column
        .decimal('amount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.string('toWhom').notNullable()
      column.date('endDate').notNullable()
      column.boolean('notification').defaultTo(false)
      column.boolean('returned').defaultTo(false)
    })
    .createTable('goals', column => {
      column
        .increments('id')
        .unsigned()
        .primary()
      column
        .integer('userId')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
      column.string('title').notNullable()
      column.text('description').notNullable()
      column
        .decimal('targetedAmount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.decimal('amount', 8, 2).notNullable().defaultTo(0)
      column.date('endDate').notNullable()
      column.boolean('reached').defaultTo(false)
    })
    .createTable('costs', column => {
      column
        .increments('id')
        .unsigned()
        .primary()
      column
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
      column
        .string('type').notNullable()
      column
        .decimal('amount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.date('date').notNullable()
      column.string('location').notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
