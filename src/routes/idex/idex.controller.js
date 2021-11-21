const axios = require("axios");
const crypto = require('crypto');
const uuid = require('uuid');

let params = {
    nonce: uuid.v1(),
    wallet: '0xA71C4aeeAabBBB8D2910F41C2ca3964b81F7310d',
};

let signature = crypto.createHmac('sha256', process.env.API_SECRET).update(JSON.stringify(params)).digest('hex');

class IdexController {

    static list(req, res, next) {

        axios.get(process.env.API_IDEX + '/v1/fills', {
            params: params,
            headers: {
                'IDEX-API-KEY': process.env.API_KEY,
                'IDEX-HMAC-SIGNATURE': signature
            }
        })
            .then((response) => res.json(response.data))
            .catch((error) => res.json(error));
    }

    static read(req, res, next) {
        res.send({ data: 'read' });
    }



}
module.exports = IdexController;