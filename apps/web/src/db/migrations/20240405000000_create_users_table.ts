import { Knex } from "knex";

export async function up(knex: Knex) {
    await knex.schema.createTable('organizations', (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.timestamps(true, true);
    });
  
    await knex.schema.createTable('users', (table) => {
      table.uuid('id').primary();
      table.string('email').notNullable().unique();
      table.string('password_hash').notNullable();
      table.uuid('organization_id').references('id').inTable('organizations').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  
    await knex.schema.createTable('projects', (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.uuid('organization_id').references('id').inTable('organizations').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  
    await knex.schema.createTable('views', (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.uuid('project_id').references('id').inTable('projects').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex: Knex) {
    await knex.schema.dropTableIfExists('views');
    await knex.schema.dropTableIfExists('projects');
    await knex.schema.dropTableIfExists('users');
    await knex.schema.dropTableIfExists('organizations');
  }
  