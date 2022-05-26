const carsService = require("../../../services/carsService");

module.exports = {
    list(req, res) {
        const {date, time, passenger} = req.params;
        carsService
            .filter(date, time, passenger)
            .then(({data}) => {
                res.status(200).json({
                    status: "OK",
                    data: data,
                    meta: {
                        count: data.length,
                    },
                });
            })
            .catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },
};
