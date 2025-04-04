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
    @apiSuccess {Number}        carriers.defaultServiceType ID of  default service type of the carrier.
    @apiSuccess {Object[]}      carriers.serviceTypes       List of service types available for the carrier.
    @apiSuccess {Number}        carriers.serviceTypes.id    ID of service type.
    @apiSuccess {String}        carriers.serviceTypes.name  Name of the service type.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        carriers: [{
            id: 38
            name: "UPS",
            defaultServiceType:1
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
    @apiSuccess {String}        issues.name               Name of the carrier
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

/**
    @api {GET} /app/printers Get Printers
    @apiDescription Return thermal printers that are configured to the application to print the shipping label.
    @apiName get-printers
    @apiGroup App

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {Object[]}      printers                  List of printers.
    @apiSuccess {Number}        printers.id                 ID of the printer.
    @apiSuccess {String}        printers.name               Name of the printer.
    @apiSuccess {String}        printers.ip                 IP Address of the printer.
    @apiSuccess {String}        printers.port               Port Number of the printer.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "printers": [
            {
                "id": 1,
                "name": "Warehouse thermal printer",
                "ip": "192.168.20.216",
                "port": "9100"
            }
        ]
    }
    
    @apiUse GeneralError
    @apiUse SessionExpired
    @apiUse InactiveAccount
*/

/**
    @api {GET} /app/boxes Get Boxes
    @apiDescription Return the box dimensions available.
    @apiName get-boxes
    @apiGroup App

    @apiUse CommonHeader
    @apiUse AuthHeader

    
    @apiSuccess {Object[]}      PackageTypes              List of package types.
    @apiSuccess {Number}        PackageTypes.id           ID of the package type.
    @apiSuccess {String}        PackageTypes.name         Name of the package type.
    @apiSuccess {Number}        PackageTypes.length       Length of the package type.
    @apiSuccess {Number}        PackageTypes.width        Width of the package type.
    @apiSuccess {Number}        PackageTypes.height       Height of the package type.
    @apiSuccess {Number}        PackageTypes.weight       Weight of the package type.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "packageTypes": [
            {
            "id": 1,
            "name": "Envelop - 0.4x0.2x0.3",
            "length": 0.4,
            "width": 0.2,
            "height": 0.3,
            "weight": 0.05
            },
            {
                "id": 2,
                "name": "Box - 25x19x6",
                "length": 25,
                "width": 19,
                "height": 6,
                "weight": 0
            }
        ]
    }
    
    @apiUse GeneralError
    @apiUse SessionExpired
    @apiUse InactiveAccount
*/
