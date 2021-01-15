import Knex from 'knex';

export async function up (knex: Knex){
  return await knex.schema.createTable('tools', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('link').notNullable()
    table.text('description').notNullable()
    table.specificType('tags', 'text ARRAY')
  })
}

export async function down (knex: Knex){ 
  return await knex.schema.dropTable('tools')
}