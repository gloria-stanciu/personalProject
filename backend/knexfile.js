// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'MoneyTracking',
    user: 'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tablename: 'knex_migrations',
  }
};
