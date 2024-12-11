
/**
    @api {GET} /orders Get Orders
    @apiDescription Returns the orders based on the role of the user using the filters provided.
    @apiName get-orders
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiQuery {Number} [batch]          Orders are filtered for this particular batch.
    @apiQuery {Number} [status]         Orders are filtered for this particular status.
    @apiQuery {Number} [search]         Order Id to search.
    @apiQuery {Number} offset           Pagination offset.

    @apiSuccess {Object[]}          orders                          List of orders in the batch.
    @apiSuccess {Number}            orders.id                       Id of the order.
    @apiSuccess {String}            orders.marketplaceOrderNumber   Marketplace order number.
    @apiSuccess {Number}            orders.orderNumber              Rensup's order number.
    @apiSuccess {Object}            orders.adSource                  Information about the adSource.
    @apiSuccess {Number}            orders.adSource.id               ID of the adSource.
    @apiSuccess {String}            orders.adSource.name             Name of the adSource.   
    @apiSuccess {String}            orders.date                     Date of the order. YYYY-MM-DD format.
    @apiSuccess {Number}            orders.itemCount                Number of items in the order.
    @apiSuccess {Number=0,1,2,3,4,5}  orders.status               Status of the order. <code>0 - Awaiting Picking, 1 - Picked, 2 - Shipment Created, 3 - Label Printed, 4 - On Hold, 5 - Shipped</code>
    @apiSuccess {Number}            orders.batch                    ID of the batch. Have a valid ID if the order is Awaiting Picking, otherwise 0.
    @apiSuccess {String}            orders.shippingType                    Type of shipping like "2 day shipping"

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "orders": [{
            "id": "234",
            "marketplaceOrderNumber": "34543534-3453535"
            "orderNumber": 34324242,
            "adSource": {
                "id": 234,
                "name": "adSource"
            },
            "date": "2014-11-11",
            "itemCount": 10,
            "status": 0,
            "batch": 2222,
            "shippingType": "2 Day Shipping"
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/


/**
    @api {GET} /orders/:order Get Order
    @apiDescription Returns the order based on the id given.
    @apiName get-order
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order           ID of the order.

    @apiParam {Number} batch           ID of the batch. batch 0 means no product filtering required.

    @apiSuccess {Number}            id                       Id of the order.
    @apiSuccess {String}            date                     Date of the order, YYYY-MM-DD format
    @apiSuccess {String}            marketplaceOrderNumber   Marketplace order number.
    @apiSuccess {Number}            orderNumber              Rensup's order number.
    @apiSuccess {String}            shipmentLocation         Shipment location, where the shipment creating.
    @apiSuccess {String}            shipmentInstruction      Instruction to be followed for the order.
    @apiSuccess {String}            shipper                  Name of shipper.
    @apiSuccess {Object}            adSource                  Information about the adSource.
    @apiSuccess {Number}            adSource.id               ID of the adSource.
    @apiSuccess {String}            adSource.name             Name of the adSource.
    @apiSuccess {Number=0,1,2,3,4,5}  status               Status of the order. <code>0 - Awaiting Picking, 1 - Picked, 2 - Shipment Created, 3 - Label Printed, 4 - On Hold, 5 - Shipped</code>
    @apiSuccess {String}            shippingAddress          Address to which the order has to be send.
    @apiSuccess {String}            shippingType            Type of shipping like "2 day shipping"
    @apiSuccess {Object[]}          [packages]               List of packages.
    @apiSuccess {Number}            packages.id              Id of the package.
    @apiSuccess {Number}            packages.width             Width of the package.
    @apiSuccess {Number}            packages.length            Length of the package.
    @apiSuccess {Number}            packages.height            Height of the package.
    @apiSuccess {Number}            packages.weight            Weight of the package.
    @apiSuccess {String}            packages.price             Price quoted by the carrier for the package.
    @apiSuccess {String}            packages.trackingNumber    Tracking number by the carrier for the package.
    @apiSuccess {Object}            [carrier]                  Deatils of carrier.
    @apiSuccess {Number}            carrier.id               ID of the carrier.
    @apiSuccess {Number}            carrier.name             Name of the carrier.
    @apiSuccess {Object}            carrier.serviceType      Service type selected.
    @apiSuccess {Number}            carrier.serviceType.id   ID of the Service type selected
    @apiSuccess {String}            carrier.serviceType.name Name of the Service type selected.
    @apiSuccess {Object}            [issue]                  Details of the issue reported for the order, if any.         
    @apiSuccess {Number}            issue.id                Id of the predefined reason.       
    @apiSuccess {String}            issue.name               Textual representation of the predefined reason.        
    @apiSuccess {String}            issue.comment           Comment, if the reason other than the predefined reason.
    @apiSuccess {Object[]}          items                    List of items in the order.
    @apiSuccess {Number}            items.id                 ID of the item in the order.
    @apiSuccess {Object[]}          items.name               Name of the item in the order.
    @apiSuccess {String}            items.image              Image of item in the order.
    @apiSuccess {String}            items.instruction       Instruction to be followed for the item.
    @apiSuccess {String}            [items.location]           Location of the item in the order. Only available is the item is not a combo item.
    @apiSuccess {Number}            [items.code]               Code of the item, i.e. barcode number. Only available is the item is not a combo item.
    @apiSuccess {Number}            items.ordered            Number of items ordered.
    @apiSuccess {Number}            items.picked             Number of items picked.
    @apiSuccess {Object[]}          [items.parts]                  List of parts in the item. Only available is the item is a combo item.
    @apiSuccess {Number}            items.parts.id                 ID of the part.
    @apiSuccess {Object[]}          items.parts.name               Name of the part.
    @apiSuccess {String}            items.parts.image              Image of part.
    @apiSuccess {String}            items.parts.location           Location of the item.
    @apiSuccess {Number}            items.parts.code               Code of the parts, i.e. barcode number.
    @apiSuccess {Number}            items.parts.ordered            Number of parts required.
    @apiSuccess {Number}            items.parts.picked             Number of parts picked.
    @apiSuccess {String}            items.parts.instruction        Instruction to be followed for the item part.


    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 234,
        "date": "2014-10-02",
        "marketplaceOrderNumber": "34543534-3453535"
        "orderNumber": 34324242,
        "shipmentLocation": "090",
        "shippingType": "2 day shipping",
        "shippingAddress": "",
        "shipmentInstruction": "Please hand over the items location 090 once picked."
        "adSource": "Amazon",
        "status": 5,
        "issue": {
            "id": 10,
            "name": "Item not Found at location",
            "comment": ""
        },
        "shipper": {
            "id": 34355,
            "name": "Rensup"
        },
        "packages": [{
            "id": 32424,
            "weight": 324.6
            "height": 333,
            "length": 99,
            "width": 33,
            "price": 23432.4,
            "trackingNumber": "234234f4444"
        }],
        "carrier": {
            "id": 324332,
            "name": "UPS",
            "serviceType": {
                "id": 3333,
                "name": "UPS - Service 1",
            }
        },
        "items": [{
            "id": 10,
            "name": "Item One",
            "image": "http://resource.rensup.com/product/image.png",
            "ordered": 10,
            "picked": 0,
            "instructions": "Must collect screws.",
            "parts": [{
                "id": 10,
                "name": "Sub Item One",
                "image": "http://resource.rensup.com/product/image.png",
                "location": "12A 93",
                "code": 65327,
                "ordered": 10,
                "picked": 0,
                "instructions": "Must collect screws."
            }]
        }]
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {POST} /orders/:order/report-issue Report an Issue
    @apiDescription Report an issue of a particular order with a reason
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order        ID of the order.

    @apiBody {Number} reason        ID of the reason.
    @apiBody {String} comment       Comment by user, if the reason is not a predefined one.

    @apiSuccess {String}    message     Message to the user.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {POST} /orders/:order/add-carrier Add Order Carrier
    @apiDescription Add a carrier infomration to the order.
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order        ID of the order.

    @apiBody {Number}      carrier           ID of the carrier.
    @apiBody {Number}      serviceType       Type of service.

    @apiSuccess {String}    message     Message to the user.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/



/**
    @api {GET} /orders/:order/shipment-label Get Shipment Label
    @apiDescription Return the shipment label for print.
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order        ID of the order.

    @apiSuccess {Array}    shipment_labels            Image url  to preview the shipping label.   
    @apiSuccess {String}    shipment_labels_raw_file   Shipping label content in ZPL format , to be printed in thermal printer.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "shipment_labels": [
            "http://mobileapi24.rensup.com/storage/shipping_labels/16118936_0.jpg?1733894212"
        ],
        "shipment_labels_raw_file": "http://mobileapi24.rensup.com/storage/shipping_labels/16118936.ZPL"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/



/**
    @api {POST} /orders/:order/update-status Update Order Status
    @apiDescription Update the status of the order
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order        ID of the order.

    @apiBody {Number}   status      New status of the order.
    @apiBody {Number}   batch       ID of the batch. batch 0 means the status can be directly updated to order, otherwise product wise  status updation is required before updating the order status.

    @apiSuccess {String}    message   Message to user.   

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {POST} /orders/:order/item-status Update Item Status
    @apiDescription Update the status of an item in the order
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order        ID of the order.

    @apiBody {Number}   status      New status of the order.
    @apiBody {Number}   item        ID of the item in the order.

    @apiSuccess {String}    message   Message to user.   

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {POST} /packages/add Add Package
    @apiDescription Add a package for shipment
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiBody {Number}      order             ID of the order.
    @apiBody {Number}      width             Width of the package.
    @apiBody {Number}      length            Length of the package.
    @apiBody {Number}      height            Height of the package.
    @apiBody {Number}      weight            Weight of the package.

    @apiSuccess {String}    message     Message to the user.
    @apiSuccess {String}    id          Id to the package.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 3453453,
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {DELETE} /packages/:package/remove Remove Package
    @apiDescription Remove a package for the order
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} package        ID of the package.

    @apiSuccess {String}    message     Message to the user.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {POST} /packages/:package/edit Edit Package
    @apiDescription Edit a package for shipment
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} package        ID of the package.

    @apiBody {Number}      width             Width of the package.
    @apiBody {Number}      length            Length of the package.
    @apiBody {Number}      height            Height of the package.
    @apiBody {Number}      weight            Weight of the package.

    @apiSuccess {String}    message     Message to the user.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/


/**
    @api {POST} /orders/:order/carrier-charge Get Carrier charge
    @apiDescription Return carrier charge based on the information provided.
    @apiName get-carrier-charges
    @apiGroup Orders

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order   ID of the order.

    @apiBody {Object}      carrier                  List of carriers.
    @apiBody {Number}      carrier.id                ID of the carrier.
    @apiBody {Number}      carrier.serviceType       ID of service type
    @apiBody {Object[]}    packages                   List of packages.
    @apiBody {Number}      packages.width             Width of the package.
    @apiBody {Number}      packages.length            Length of the package.
    @apiBody {Number}      packages.height            Height of the package.
    @apiBody {Number}      packages.weight            Weight of the package.

    @apiSuccess {Number}      carrier           ID of the carrier.
    @apiSuccess {String}      amount            Amount.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        carrier: 10,
        amount: "8348.99"
    }
    
    @apiUse GeneralError
    @apiUse SessionExpired
    @apiUse InactiveAccount
*/
/**
    @api {GET} /orders/:order/mark-red-bar-print  Order Print
    @apiDescription To print the order.
    @apiGroup Order

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiParam {Number} order        ID of the order.

    @apiBody {Number}   batch       ID of the batch.

    @apiSuccess {String}    message     Message to the user.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "message": "success"
    }
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse NotFound
    @apiUse SessionExpired
*/