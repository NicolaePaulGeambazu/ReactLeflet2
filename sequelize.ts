import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'peanut.db.elephantsql.com',
  port: 5432,
  username: 'mditngtn',
    password: 'DNeewVszLNLMHQ1A87wvDf2pVh2PwVNb',

  database: 'mditngtn',
});

export default sequelize;
module.exports = sequelize;
