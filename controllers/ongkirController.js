"use strict";

const request = require('../modules/request');

exports.ongkir = (req, res) => {
    let reqJson = {
        endpoint: '/cost',
        body: {
            subdistrictIdOrigin: req.body.subdistrict_id_origin,
            subdistrictIdDestination: req.body.subdistrict_id_destination,
            weightGram: req.body.weight_gram,
            courierCode: req.body.courier_code
        }
    }

    return request.post(`/cost`, res, reqJson)
}

exports.resi = (req, res) => {
    let reqJson = {
        endpoint: '/waybill',
        body: {
            waybill: req.body.waybill,
            courierCode: req.body.courier_code
        }
    }

    return request.post(`/waybill`, res, reqJson)
}