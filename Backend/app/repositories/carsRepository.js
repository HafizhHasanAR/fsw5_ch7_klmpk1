const {Cars} = require("../models");
const {Op, Sequelize} = require("sequelize");

module.exports = {
    findAll() {
        return Cars.findAll();
    },

    getTotalCars() {
        return Cars.count();
    },

    filter(date, time, passengers) {
        return Cars.findAll({
            where: {
                [Op.and]: {
                    available: true,
                    availableAt: {
                        [Op.lte]: date + " " + time,
                    },
                    capacity: {
                        [Op.gt]: passengers,
                    },
                },
            },
        });
    },
};
