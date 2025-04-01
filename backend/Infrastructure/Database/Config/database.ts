import { Sequelize } from 'sequelize';

export const DbContext = new Sequelize({
  dialect: 'mssql',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'systemkiosk',
  username: process.env.DB_USER || 'kiosk_user',
  password: process.env.DB_PASSWORD || 'KioskPass123!',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  logging: console.log
});
