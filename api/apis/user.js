
/**
   @api {GET} /user/ Get User
   @apiVersion 2.0.0
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
   @apiSuccess {String="break","work"} workStatus  Contains the work status of the employee. Whether in break or at work.
   @apiSuccess {Object} task  Contains the details of the active task of the user.
   @apiSuccess {Integer} task.id The unique ID of the task
   @apiSuccess {String} task.name  The name of the task
   @apiSuccess {String} task.description  The description of the task
   @apiSuccess {String} task.eta  The ETA of the task <code>Format: MM dd YYYY, hh:mm a. Eg: Sept 29 2022, 12:00 PM</code>
   @apiSuccess {String="NOTSTARTED", "INPROGRESS", "PAUSED", "COMPLETED", "HOLD"} task.status  The current status of the task. 
   @apiSuccess {String} task.totalHours  The expected hours to complete the task.  <code>Format: hh:mm Hrs</code>
    
   
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
      punchOut: "10:03 AM",
      workStatus: "work",
      task: {
         id: 58,
         name: "test task 1",
         description: "test task 1",
         eta: "Sep 29 2022, 12:00AM",
         status: "INPROGRESS",
         totalHours: "00:30 Hrs"
      }
   }

   @apiUse InactiveAccount
   @apiUse GeneralError
   @apiUse SessionExpired
*/