import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  }
);

export default sequelize;
