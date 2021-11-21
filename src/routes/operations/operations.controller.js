class OperationsController {
    static list(req, res, next) {
        res.send({ status: 'Operando...' });
    }

}
module.exports = OperationsController;