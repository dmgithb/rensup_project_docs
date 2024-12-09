/**
    @api {GET} /activities Get Activities
    @apiDescription Returns the activities assigned to them
    @apiName get-activities
    @apiGroup User

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {Boolean} orderProcessing           Whether the user have order processing activities assigned.
    @apiSuccess {Boolean} pickShipFbaItems          Whether the user have pick ans ship FBA item activities assigned.
    @apiSuccess {Boolean} moveInventory             Whether the user have move inventory activities assigned.
    @apiSuccess {Boolean} processReturnOrders       Whether the user have process return orders activities assigned.
    @apiSuccess {Boolean} cycleCount                Whether the user have cycle count activities assigned.
    @apiSuccess {Boolean} assembleToiletSeats       Whether the user have assemble toilet seats activities assigned.

   
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "orderProcessing": true,
        "pickShipFbaItems": false,
        "moveInventory": false,
        "processReturnOrders": false,
        "cycleCount": false,
        "assembleToiletSeats": false
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/

/**
    @api {POST} /user/reset-password Reset Password
    @apiDescription Reset the user's password
    @apiName reset-password
    @apiGroup User

    @apiUse CommonHeader

    @apiBody {String}   email   Email of the user.   

    @apiSuccess {String} message    User message

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "A mail with instruction has sent to your email."
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
*/