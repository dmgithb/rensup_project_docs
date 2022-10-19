/**
    @api {GET} /activity/get-activities Get Activities
    @apiVersion 2.0.0
    @apiDescription Returns the list of activities available for the user.
    @apiName get-activities
    @apiGroup Activity

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {String} message  Informative message to user, if no activities are assigned. <code>NOTE: The message content changes based on the role of the user.</code>
    @apiSuccess {Object[]}  activities An array which contains the list of activities
    @apiSuccess {Integer} activities.id The unique ID of the activity
    @apiSuccess {String} activities.name  The title of the activity
    @apiSuccess {String="maintenance","receive"} activities.identifier The identifier used by the front-end. 
    @apiSuccess {String} activities.code  A code which represents the type of the activity.
   
   
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
            activities: [{
                id: 25, 
                name: "Maintenance Tasks",
                identifier: "maintenance"
                code: "Tasks"
            }],
            message: "You have no activities assigned. Please contact the admin."
    }

    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/




/**
    @api {GET} /activity/get-tasks-of-activity Get Tasks Of Activity
    @apiVersion 2.0.0
    @apiDescription Returns the list of tasks comes under the requested activity
    @apiName get-tasks-of-activity
    @apiGroup Activity

    @apiUse CommonHeader
    @apiUse AuthHeader
        
    @apiParam {Integer} activityId The unique ID of the activity

    @apiParamExample {json} Params:
    {
        activityId: 25
    }

    @apiSuccess {Object[]}  tasks An array which contains the list of tasks
    @apiSuccess {Integer} tasks.id The unique ID of the task
    @apiSuccess {String} tasks.name  The name of the task
    @apiSuccess {String} tasks.description  The description of the task
    @apiSuccess {String} tasks.eta  The ETA of the task <code>Format: MM dd YYYY, hh:mm a. Eg: Sept 29 2022, 12:00 PM</code>
    @apiSuccess {String="NOTSTARTED", "INPROGRESS", "PAUSED", "COMPLETED", "HOLD"} tasks.status  The current status of the task. 
    @apiSuccess {String} tasks.totalHours  The expected hours to complete the task.  <code>Format: hh:mm Hrs</code>
    
    
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
            tasks: 
            [
                {
                    id: 58,
                    name: "test task 1",
                    description: "test task 1",
                    eta: "Sep 29 2022, 12:00AM",
                    status: "INPROGRESS",
                    totalHours: "00:30 Hrs"
                },
                {
                    id: 59,
                    taskName: "test task 2",
                    taskDesc: "test task 2",
                    eta: "Sep 27 2022, 12:00 AM",
                    status: "PAUSED",
                    totalHours: "03:00 Hrs"
                }
            ]
    }


    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/





/**
   @api {GET} /activity/get-task Get Task    
   @apiVersion 2.0.0
   @apiDescription Returns the details of the requested task
   @apiName get-task
   @apiGroup Activity

   @apiUse CommonHeader
   @apiUse AuthHeader
    
   @apiParam {Integer} taskId The unique ID of the task

   @apiParamExample {json} Params:
   {
        taskId: 58
   }

    @apiSuccess {Integer} id  The unique ID of the task
    @apiSuccess {String} name  The name of the task
    @apiSuccess {String} description  The description of the task
    @apiSuccess {String} eta  The ETA of the task <code>Format: MM dd YYYY, hh:mm a. Eg: Sept 29 2022, 12:00 PM</code>
    @apiSuccess {String="NOTSTARTED", "INPROGRESS", "PAUSED", "COMPLETED", "HOLD"} status  The current status of the task. 
    @apiSuccess {String} tasks.totalHours  The expected hours to complete the task.  <code>Format: hh:mm Hrs</code>
    @apiSuccess {Object[]}  supplies An array which contains the list of supply items and its current status
    @apiSuccess {Integer} supplies.name  The name of the supply item
    @apiSuccess {String="ONHAND", "ORDERED"} supplies.status  The current status of the supply item
    @apiSuccess {String} supplies.type   The type of the supply item
   
   
   @apiSuccessExample {json} Success-Response:
   HTTP/1.1 200 OK
   {
        id: 58,
        name: "Fix internet connection",
        description: "",
        eta: "Oct 2 2022 12:00:00:AM",
        status: "Inactive",
        totalHours: "03:00 Hrs"
        status: "Start",
        supplies: [
            {
                name: "Hammer & Screw driver",
                status: "ONHAND",
                type: "Tools"
            }
        ]
    }



   @apiUse InactiveAccount
   @apiUse GeneralError
   @apiUse SessionExpired
*/




/**
    @api {POST} /activity/update-task-status Update Task Status
    @apiVersion 2.0.0
    @apiDescription To update the status of the task
    @apiName update-task-status
    @apiGroup Activity

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Integer} activityId The unique ID of the activity
    @apiParam {Integer} taskId The unique ID of the task
    @apiParam {String="STARTED", "PAUSED", "RESUMED", "COMPLETED"} status The status to be updated.

    @apiParamExample {json} Params:
    {
        activityId: 25,
        taskId: 58,
        status: "COMPLETED"
    }

    @apiSuccess {String} message  Success message from the server


    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        message: "Task status updated successfully"
    }



    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/