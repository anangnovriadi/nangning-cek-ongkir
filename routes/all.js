'use strict';

const wilayah = require('../controllers/wilayahController');

module.exports = (app) => {
    app.route('/wilayah/provinsi').get(wilayah.province);
    app.route('/wilayah/kota').post(wilayah.city);
    app.route('/wilayah/kelurahan').post(wilayah.subdistrict);
}
