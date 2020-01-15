"use strict";

const request = require('../modules/request');

exports.province = (req, res) => {
    return request.get(`/province`, res, req)
}

exports.city = (req, res) => {
    let provinceId = req.body.province_id;
    return request.get(`/city?province_id=${provinceId}`, res, req)
}

exports.subdistrict = (req, res) => {
    let cityId = req.body.city_id;
    return request.get(`/subdistrict?city_id=${cityId}`, res, req)
}