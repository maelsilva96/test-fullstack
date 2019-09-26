'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.addColumn(
                'log_user',
                'updated_at',
                {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                {transaction}
            );
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    down: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.remove(
                'log_user',
                'updated_at',
                {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                {transaction}
            );
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
