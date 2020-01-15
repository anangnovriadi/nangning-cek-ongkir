'use strict';

const wilayah = require('../controllers/wilayahController');
const ongkir = require('../controllers/ongkirController');

module.exports = (app) => {
    app.route('/wilayah/provinsi').get(wilayah.province);
    app.route('/wilayah/kota').post(wilayah.city);
    app.route('/wilayah/kelurahan').post(wilayah.subdistrict);
    app.route('/ongkir/cek-ongkir').post(ongkir.ongkir);
    app.route('/ongkir/cek-resi').post(ongkir.resi);
}
