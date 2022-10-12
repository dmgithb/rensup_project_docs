
/**
    @api {GET} /app/get-locations Get Locations
    @apiDescription Returns the locations of office / godown etc
    @apiName get-locations
    @apiGroup App

    @apiUse CommonHeader

    @apiSuccess {Object[]} locations Array of locations where the office or godown located.
    @apiSuccess {String} locations.name Name of the location.
    @apiSuccess {Number} locations.latitude  The latitude of the location.
    @apiSuccess {Number} locations.longitude The longitude of the location.
    @apiSuccess {Number} locations.longitude The longitude of the location.
    @apiSuccess {Number} locations.radius The proximity radius.

   
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        locations: [{
            name: "Kochi",
            latitude: 10.4387595797,
            longitude: 77.4387595797,
            radius: 25
        }]
    }
    
    @apiUse GeneralError
*/



/**
    @api {GET} /app/get-leave-reasons Get Leave Reasons
    @apiDescription Returns the reasons for leave
    @apiName get-leave-reasons
    @apiGroup App

    @apiUse CommonHeader

    @apiSuccess {Object[]} reasons Array of leave reasons.
    @apiSuccess {String} reasons.reason Tile of the reason.
    @apiSuccess {Number} reasons.id  Unique id of the reason.
   
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        reasons: [{
            reason: "Sick/Personal",
            id: 1
        }]
    }
    
    @apiUse GeneralError
*/