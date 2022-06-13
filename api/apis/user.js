
/**
   @api {GET} /user/ Get User
   @apiDescription Returns the details of user
   @apiName get-user
   @apiGroup User

   @apiUse CommonHeader
   @apiUse AuthHeader

   @apiParam {String} userId Unique ID of the user

   @apiParamExample {json} Params:
   {
      "id": "35434",
   }  

   @apiSuccess {String} id Unique ID of the user.
   @apiSuccess {String} name The full name of the user, concatinate if user's name stored as different components.
   @apiSuccess {Number} roleId  The unique ID of the role assigned for user. 
   @apiSuccess {String} role  Title of the role assigned for user. 
   @apiSuccess {String="PUNCHEDIN", "PUNCHEDOUT"} attendencStatus  Whether the user is punched in or punched out.
   @apiSuccess {Number} workingTime  Total time the user worked. <code>Note: This should be in seconds.</code>.
   @apiSuccess {String} punchIn  Punch-in time of the employee.
   @apiSuccess {String} punchOut  Punch-out time of the employee.
   
   @apiSuccessExample {json} Success-Response:
   HTTP/1.1 200 OK
   {
      id: "1998",
      name: "Robert William"
      roleId: 10,
      role: "Store Keeper",
      attendencStatus: "PUNCHEDIN",
      workingTime: 564646,
      punchIn: "7:03 AM",
      punchOut: "10:03 AM" 
   }

   @apiUse InactiveAccount
   @apiUse GeneralError
   @apiUse SessionExpired
*/

