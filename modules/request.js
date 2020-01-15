const unirest = require('unirest');
const logger = require('nangning-logger-js');
require('dotenv').config()
const urlApi = process.env.URL_API

// Request Method POST Unirest
exports.post = (url, res, req) => {
    unirest.post(urlApi + url)
        .headers({
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        })
        .send({})
        .end(function (response) {
            res.send(response.body)

            // Logger Request
            logger.loggerRequest.info({ 
                method: req.method,
                endpoint: req.originalUrl,
                label: 'Unirest Method',
                message: req.body
            })
            
            console.log('\n')
            
            // Logger Response
            logger.loggerResponse.info({ 
                method: req.method,
                endpoint: req.originalUrl,
                label: 'Unirest Method',
                message: response.body
            })
        })
}

// Request Method GET Unirest
exports.get = (url, res, req) => {
    unirest.get(urlApi + url)
        .headers({
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        })
        .send({})
        .end(function (response) {
            res.send(response.body)

             // Logger Request
             logger.loggerRequest.info({ 
                method: req.method,
                endpoint: req.originalUrl,
                label: 'Unirest Method',
                message: req.body
            })
            
            console.log('\n')
            
            // Logger Response
            logger.loggerResponse.info({ 
                method: req.method,
                endpoint: req.originalUrl,
                label: 'Unirest Method',
                message: response.body
            })
        })
}