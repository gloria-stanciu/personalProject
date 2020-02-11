exports.up = function(knex) {
  return knex.schema
    .createTable('currency', column => {
      column
        .increments('id')
        .unsigned()
        .primary()
      column.string('name').notNullable()
    })
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
        .integer('currency')
        .unsigned()
        .references('id')
        .inTable('currency')
        .onDelete('CASCADE')
        .index()
      column
        .decimal('inMoney', 8, 2)
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
      column.boolean('verified').defaultTo(false)
    })
    .createTable('inMoney', column => {
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
        .decimal('amount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.date('startDate').notNullable()
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
        .decimal('amount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.date('startDate').notNullable()
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
      column.string('name').notNullable()
      column
        .enum('type', [
          'Grocery',
          'Clothes',
          'Bills',
          'Health',
          'Travel',
          'Gifts',
          'Emergencies',
          'Toys',
          'Car',
          'Home',
        ])
        .notNullable()
      column
        .decimal('amount', 8, 2)
        .notNullable()
        .defaultTo(0)
      column.date('date')
      column.string('location').notNullable()
    })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
