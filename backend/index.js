require('dotenv').config()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet') //helps you secure your Express apps
const logger = require('koa-logger') //enables logging in koa

const Knex = require('knex')
const knexConfig = require('./knexfile')
const { Model } = require('objection')

const app = new Koa()
const knex = Knex(knexConfig)
//Give knex instance to objection
Model.knex(knex)  

app.use(logger())
app.use(helmet())
app.use(bodyParser())

require('./api')(app)

async function main(){
  console.info('Loading...')
  console.info('Checking database connection!\n')
  
  await knex.raw('SELECT 1+1 AS RESULT')
  
  const server = app.listen(process.env.PORT)
  console.log(`Server started: http://localhost:${server.address().port}/api`)
}

try{
  main()
}catch(err){
  console.error('Could not connect to database: ', err)
  process.exit(1)
}