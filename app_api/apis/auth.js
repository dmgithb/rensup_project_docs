
/**
    @api {POST} /auth/sign-in Sign In
    @apiDescription Authenticate the user and return the necessary information about user.
    @apiName sign-in
    @apiGroup Auth

    @apiUse CommonHeader

    @apiBody {String} [username]    Username of the employee. The node 'data' is unavailable if this is available.
    @apiBody {String} [password]    Password of the employee. This information is mandatory if the node 'username' is available. The node 'data' is unavailable if this is available.
    @apiBody {String} [data]        Data of the QR CODE. This will be available only if the user scan the QR code. username and password will be unavailable on this scenario.

    @apiSuccess {String} token      Session token.
    @apiSuccess {String} id         Unique ID of the user.
    @apiSuccess {String} name       The full name of the user, concatinate if user's name stored as different components.
    @apiSuccess {Number} role       Role of the user. 
    @apiSuccess {String} location   Location of the user. 
   
   @apiSuccessExample {json} Success-Response:
   HTTP/1.1 200 OK
   {
        "token":"jasghu643hfksjhkscrh4789873897958-"
        "id": "1998",
        "name": "Robert William"
        "role": 1,
        "location": "090"
   }

   @apiUse UserNotPunchedIn
   @apiUse InactiveAccount
   @apiUse GeneralError
*/




/**
    @api {POST} /auth/sign-out Sign Out
    @apiDescription Unauthenticate the user by clearing the session information.
    @apiName Sign Out
    @apiGroup Auth

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {String} message Message to user.
  
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
*/

