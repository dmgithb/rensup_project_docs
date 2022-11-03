/**
    @api {GET} /receiving/{activityId}/get-tasks Get Tasks
    @apiVersion 2.0.0
    @apiDescription Returns the list of tasks comes under the maintenance activity
    @apiName get-tasks
    @apiGroup Receiving

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
    @apiSuccess {String="NOTSTARTED", "INPROGRESS", "PAUSED", "COMPLETED", "HOLD"} tasks.status  The current status of the task. 
    
    
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
            tasks: 
            [
                {
                    id: 58,
                    name: "test task 1",
                    status: "INPROGRESS",
                },
                {
                    id: 59,
                    name: "test task 1",
                    status: "INPROGRESS",
                }
            ]
    }


    @apiUse InactiveAccount
    @apiUse GeneralError
    @apiUse SessionExpired
*/


/**
    @api {POST} /receiving/update-task-status Update Task Status
    @apiVersion 2.0.0
    @apiDescription To update the status of the task
    @apiName update-task-status
    @apiGroup Receiving

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