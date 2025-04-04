/**
    @api {GET} /reports/eod-ups-shipments  End Of The Day report of UPS 
    @apiDescription Returns the end of the day report of UPS
    @apiName get-reports-eod-ups
    @apiGroup Reports

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {string}    previewUrl            Image url  to preview the EOD Report.   
    @apiSuccess {String}    printUrl              EOD report content in ZPL format , to be printed in thermal printer.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "previewUrl": "http://mobileapi24.rensup.com/storage/EODLabels/2025-04-03/EodReportUPS2025-04-03.png",
        "printUrl": "http://mobileapi24.rensup.com/storage/EODLabels/2025-04-03/EodReportUPS2025-04-03.zpl"
    }
 
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/

/**
    @api {GET} /reports/eod-usps-shipments  End Of The Day report of USPS 
    @apiDescription Returns the end of the day report of USPS
    @apiName get-reports-eod-usps
    @apiGroup Reports

    @apiUse CommonHeader
    @apiUse AuthHeader

    @apiSuccess {string}    previewUrl            Image url  to preview the EOD Report.   
    @apiSuccess {String}    printUrl              EOD report content in ZPL format , to be printed in thermal printer.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "previewUrl": "http://mobileapi24.rensup.com/storage/EODLabels/2025-04-03/EodReportUSPS2025-04-03.png",
        "printUrl": "http://mobileapi24.rensup.com/storage/EODLabels/2025-04-03/EodReportUSPS2025-04-03.zpl"
    }
 
    
    @apiUse GeneralError
    @apiUse InactiveAccount
    @apiUse SessionExpired
*/
