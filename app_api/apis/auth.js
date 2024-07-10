
/**
    @apiIgnore
    @api {POST} /auth/authenticate Authenticate
    @apiDescription Authenticate the user and return the necessary information about user.
    @apiName authenticate
    @apiGroup Auth

    @apiUse CommonHeader

    @apiParam {String} data Data reterived from QR code

    @apiParamExample {json} Params:
    {
        "data": "sah74385wnc3wyr8c7w3r873279",
    }  

    @apiSuccess {String} token Session token.
    @apiSuccess {String} id Unique ID of the user.
    @apiSuccess {String} name The full name of the user, concatinate if user's name stored as different components.
    @apiSuccess {String} department  The name of the department the employee belongs to. 
    @apiSuccess {String="PUNCHEDIN", "PUNCHEDOUT"} attendencStatus  Whether the user is punched in or punched out.
    @apiSuccess {Number} workingTime  Total time the user worked. <code>Note: This should be in seconds.</code>.
    @apiSuccess {String} punchIn  Punch-in time of the employee.
    @apiSuccess {String} punchOut  Punch-out time of the employee.
   
   @apiSuccessExample {json} Success-Response:
   HTTP/1.1 200 OK
   {
        token:"jasghu643hfksjhkscrh4789873897958-"
        id: "1998",
        name: "Robert William"
        department: "Store Keeper",
        attendencStatus: "PUNCHEDIN",
        workingTime: 564646,
   }

   @apiUse InactiveAccount
   @apiUse GeneralError
*/




/**
    @apiIgnore
    @api {POST} /auth/unauthenticate Unauthenticate
    @apiDescription Unauthenticate the user by clearing the session information.
    @apiName unauthenticate
    @apiGroup Auth

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {String} token Session token.
    @apiSuccess {String} id Unique ID of the user.
    @apiSuccess {String} name The full name of the user, concatinate if user's name stored as different components.
    @apiSuccess {String} department  The name of the department the employee belongs to. 
    @apiSuccess {String="PUNCHEDIN", "PUNCHEDOUT"} attendencStatus  Whether the user is punched in or punched out.
    @apiSuccess {Number} workingTime  Total time the user worked. <code>Note: This should be in seconds.</code>.
    @apiSuccess {String} punchIn  Punch-in time of the employee.
    @apiSuccess {String} punchOut  Punch-out time of the employee.
   
   @apiSuccessExample {json} Success-Response:
   HTTP/1.1 200 OK
   {
        token:"jasghu643hfksjhkscrh4789873897958-"
        id: "1998",
        name: "Robert William"
        department: "Store Keeper",
        attendencStatus: "PUNCHEDIN",
        workingTime: 564646,
        punchIn: "7:03 AM",
        punchOut: "9:03 PM" 
   }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/