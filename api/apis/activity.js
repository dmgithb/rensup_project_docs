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