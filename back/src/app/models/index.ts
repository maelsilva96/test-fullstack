import {Sequelize} from 'sequelize';
const config = require('./../../config/database.js');

let sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;
