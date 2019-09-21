import {Sequelize} from "sequelize-typescript";


const sequelize = new Sequelize();

let models = {
  user: sequelize.import('./user.ts'),
  product: sequelize.import('./product.ts'),
  log_user: sequelize.import('./logUser.ts')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models['sequelize'] = sequelize;
models['Sequelize'] = Sequelize;

export default models;
