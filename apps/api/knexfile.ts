import type { Knex } from "knex";
import * as dotenv from "dotenv";
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations",
    },
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 10000,
    },
  },
};

console.log("Connecting to: ", process.env.DATABASE_URL);

export default config;
