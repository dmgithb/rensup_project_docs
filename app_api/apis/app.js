
/**
    @api {GET} /app/carriers Get Carriers
    @apiDescription Return all the carriers based on the shipper.
    @apiName get-carriers
    @apiGroup App

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiQuery {Number}  adSource     ID of adsource.

    @apiSuccess {Object[]}      carriers                    List of carriers.
    @apiSuccess {Number}        carriers.id                 ID of the carrier.
    @apiSuccess {String}        carriers.name               Name of the carrier.
    @apiSuccess {Object[]}      carriers.serviceTypes       List of service types available for the carrier.
    @apiSuccess {Number}        carriers.serviceTypes.id    ID of service type.
    @apiSuccess {String}        carriers.serviceTypes.name  Name of the service type.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        carriers: [{
            id: 38
            name: "UPS",
            serviceTypes: [{
                id: 388
                name: "UPS - Service1"
            }]
        }]
    }
    
    @apiUse GeneralError
    @apiUse SessionExpired
    @apiUse InactiveAccount
*/

/**
    @api {GET} /app/data Get App Data
    @apiDescription Return all the master data relevant for the app.
    @apiName get-app-data
    @apiGroup App

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {Object[]}      issues                    List of issues.
    @apiSuccess {Number}        issues.id                 ID of the carrier.
    @apiSuccess {String}        issues.name               Name of the carrier.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        issues: [{
            id: 38
            name: "Item not found on location."
        }]
    }
    
    @apiUse GeneralError
    @apiUse SessionExpired
    @apiUse InactiveAccount
*/
