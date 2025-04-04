/**
    @api {GET} /batchtypes Get Batch Types in Activity
    @apiDescription Returns the batch types in the activity
    @apiName get-batch-types
    @apiGroup User

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiQuery {Number} activity         Batch types are filtered for this particular activity.
    @apiQuery {Number} offset           Pagination offset.

    @apiSuccess {Object[]}  batchTypes                      List of batch types in the task.
    @apiSuccess {Number}    batchTypes.id                   Id of the batch type.
    @apiSuccess {String}    batchTypes.name                 Name of the batch type.
    @apiSuccess {Number}    batchTypes.totalBatches         Number of batches in the batch type.
    @apiSuccess {Number}    batchTypes.completedBatches     Number of batches completed in the batch type.
   
    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "batchTypes": [{
            "id": 3453,
            "name": "Rush Batches"
            "totalBatches": 30,
            "completedBatches": 10
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/

/**
    @api {GET} /batches  Get Batches in Batch Type
    @apiDescription Returns the batches in the batch type
    @apiName get-batches
    @apiGroup User

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiQuery {Number} type                 Batches are filterd for this particular batch type.
    @apiQuery {Number} offset               Pagination offset
    @apiQuery {Number} search               ID of the batch to search

    @apiSuccess {Object[]}      batches                 List of batches in the batch type.
    @apiSuccess {Number}        batches.id              Id of the batch.
    @apiSuccess {String}        batches.date            Date of the batch. FORMAT => YYYY-MM-DD
    @apiSuccess {Number}        batches.orders          Number of orders in the batch.
    @apiSuccess {Number}        batches.pickedOrders    Number of orders picked in the batch.
    @apiSuccess {Number=0,1,2}  batches.status          Status of the batch <code>0 - None, 1 - Processing, 2 - Completed</code>
    @apiSuccess {Number}        batches.shipments       Number of orders shipped in the batch.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "batches": [{
            "id": "234",
            "date": "2024-03-21",
            "orders": 30,
            "pickedOrders": 10,
            "status": 1,
            "shipments":"8"
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/
