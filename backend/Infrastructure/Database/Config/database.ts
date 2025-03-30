import {Sequelize} from 'sequelize';

export const DbContext = new Sequelize({
  dialect: 'mssql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME || 'systemkiosk',
  username: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '<PASSWORD>',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  logging: true
})