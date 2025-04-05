import { Knex } from 'knex';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DEV_DB_HOST || 'localhost',
      port: parseInt(process.env.DEV_DB_PORT || '5432'),
      user: process.env.DEV_DB_USER || 'postgres',
      password: process.env.DEV_DB_PASSWORD || 'postgres',
      database: process.env.DEV_DB_NAME || 'gamevista',
    },
    migrations: {
      directory: join(__dirname, 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: join(__dirname, 'seeds'),
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.PROD_DB_HOST,
      port: parseInt(process.env.PROD_DB_PORT || '5432'),
      user: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: join(__dirname, 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: join(__dirname, 'seeds'),
    },
  },
};

export default config; 