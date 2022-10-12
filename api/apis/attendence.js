
/**
    @api {POST} /attendance/punch-in Punch In
    @apiDescription Allow the user to punch-in to the system for marking the daily attendence.
    @apiName punch-in
    @apiGroup Attendance

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} userId Unique ID of the user

    @apiParamExample {json} Params:
    {
        "id": "35434",
    } 

    @apiSuccess {String="PUNCHEDIN", "PUNCHEDOUT"} attendencStatus  Whether the user is punched in or punched out.
    @apiSuccess {Number} workingTime  Total time the user worked. <code>Note: This should be in seconds.</code>.
    @apiSuccess {String} punchIn  Punch-in time of the employee.
    @apiSuccess {String} punchOut  Punch-out time of the employee.
    
    
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        token: "wr73shagas793w7983hasgcs63w74798478"
        id: "1998",
        name: "Robert William"
        department: "Store Keeper",
        attendencStatus: "PUNCHEDIN",
        workingTime: 564646,
        punchIn: "7:03 AM",
    }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/




/**
    @api {POST} /attendance/punch-out Punch Out
    @apiDescription Allow the user to punch-out from the system for marking the daily attendence.
    @apiName punch-out
    @apiGroup Attendance

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} userId Unique ID of the user

    @apiParamExample {json} Params:
    {
        "id": "35434",
    } 

    @apiSuccess {Number} workingTime  Total time the user worked. <code>Note: This should be in seconds.</code>.
    @apiSuccess {Number} grossTime  Total time between the first punch-in and last punch-out. <code>Note: This should be in seconds.</code>.
    @apiSuccess {String} punchIn  Punch-in time of the employee.
    @apiSuccess {String} punchOut  Punch-out time of the employee.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        workingTime: 324243,
        grossTime: 347988,
        punchIn: "9:31 AM",
        punchOut: "5:31 PM"
    }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/




/**
    @api {POST} /attendance/confirm Confirm Attendance
    @apiDescription User can approve the attendence
    @apiName confirm
    @apiGroup Attendance

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} userId Unique ID of the user

    @apiParamExample {json} Params:
    {
        "id": "35434",
    } 

    @apiSuccess {String} message  Message to user

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        message: "Thanks for confirming your attendance."
    }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/






/**
   @api {GET} /attendance/ Get Attendence History
   @apiDescription Returns the details of user
   @apiName get-attendance-history
   @apiGroup Attendance

   @apiUse CommonHeader
   @apiUse AuthHeader

   @apiParam {String} userId Unique ID of the user

   @apiParamExample {json} Params:
   {
      "id": "35434",
   }  

    @apiSuccess {Object[]} history The attendence history details.
    @apiSuccess {String} history.date Date the data belongs to.
    @apiSuccess {String} history.punchIn  Punch-in time of the employee for the day.
    @apiSuccess {String} history.punchOut  Punch-out time of the employee for the day.
    @apiSuccess {Number} history.workingTime  The actual time time the user worked for the day. <code>Note: This should be in seconds.</code>.
    @apiSuccess {Number} history.grossTime  Total time between the inital punch in and last punch out. <code>Note: This should be in seconds.</code>.
    @apiSuccess {String} history.location  The work location user worked.
   
   
   @apiSuccessExample {json} Success-Response:
   HTTP/1.1 200 OK
   {
        history: [{
            date: "2022-03-11", 
            punchIn: "7:03 AM",
            punchOut: "10:03 AM" 
            workingTime: 564646,
            grossTime: 3458775,
            location: "Rensup Supply Office"
        }]
   }

   @apiUse InactiveAccount
   @apiUse GeneralError
   @apiUse SessionExpired
*/




/**
    @api {POST} /attendance/mark-break Mark Break
    @apiDescription User can mark their breaks
    @apiName mark-break
    @apiGroup Attendance

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} userId Unique ID of the user
    @apiParam {String="ON","OFF"} status Status of the break

    @apiParamExample {json} Params:
    {
        "userId": "35434",
        "status": "ON"
    } 

    @apiSuccess {String} message  Message to user

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        message: "success"
    }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired

    @apiError (5xx) {String} InvalidBreakStatus The break status is invalid.
    @apiErrorExample InvalidBreakStatus
    HTTP/1.1 590 InvalidBreakStatus
    {
        error: "The break status is invalid"
    }
*/



/**
    @api {POST} /attendance/apply-leave Apply Leave 
    @apiDescription User can apply for leaves
    @apiName apply-leave
    @apiGroup Attendance

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} userId Unique ID of the user
    @apiParam {String} fromDate Date the leave starts.
    @apiParam {String} toDate Date the leave ends.
    @apiParam {String} startTime Time from the leave starts. The time should be in 24 hours.
    @apiParam {String} endTime Time from the leave ends. The time should be in 24 hours.
    @apiParam {Integer} reasonId ID of the reason for the leave.

    @apiParamExample {json} Params:
    {
        "userId": "35434",
        "fromDate": "YYYY/MM/DD",
        "toDate": "YYYY/MM/DD",
        "startTime": "18:30"
        "endTime": "22:30",
        "reasonId": 1
    } 

    @apiSuccess {String} message  Message to user

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        message: "Your leave request for date ${fromDate, startTime}-${toDate, endTime} has been submitted for approval."
    }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/
