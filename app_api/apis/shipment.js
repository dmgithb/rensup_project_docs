/**
    @api {GET} /shipments/container/pending-receive Get Containers Pending Receive
    @apiDescription Returns the all the containers that are expecting or pending to receive.
    @apiName get-containers-pending-receiving
    @apiGroup Shipments

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {Object[]}          containers                              List of containers.
    @apiSuccess {Number}            containers.id                           Id of the container.
    @apiSuccess {String}            containers.containerNumber              Container number.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "containers": [{
            "id": 234,
            "containerNumber": "34543534-3453535"
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/


/**
    @api {GET} /shipments/container/:id/items Get Items in Container
    @apiDescription Returns the all the items in the container.
    @apiName get-items-in-containers
    @apiGroup Shipments

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} id           ID of the container.

    @apiSuccess {Object[]}          items                               List of items.
    @apiSuccess {Number}            items.id                            Id of the item in container.
    @apiSuccess {String}            items.name                          Item name.
    @apiSuccess {String}            items.poNumber                      PO number of the item.
    @apiSuccess {String}            items.invoiceNumber                 Invoice number of the item.
    @apiSuccess {Number}            items.quantity                      Quantity of the item.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "items": [{
            "id": 234,
            "name": "India Reserve Bathroom Sink Green and Gold Pedestal Only",
            "poNumber": "113132",
            "invoiceNumber": "133132",
            "quantity": 5
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/


/**
    @api {POST} /shipments/container/:id/received Mark Container Received
    @apiDescription Mark the container as received
    @apiName mark-as-received
    @apiGroup Shipments

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {String} id           ID of the container.

    @apiSuccess {Object[]}          items                               List of items.
    @apiSuccess {Number}            items.id                            Id of the item in container.
    @apiSuccess {Number=1, 2, 3}    items.status                        Item name. <code>1 = Received, 2 = Received with issues, 3 = Not found</code>

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "items": [{
            "id": 234,
            "status": 1
        },{
            "id": 2344,
            "status": 2
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/