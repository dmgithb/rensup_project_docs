/**
  @apiDefine GeneralError
  @apiError (6xx) {String} GeneralError Any general / undefined error types will come under this category.

  @apiErrorExample  GeneralError
    HTTP/1.1 600 GeneralError
    {
        error: "An error occured. Please try again."
    }
 */


/**
 @apiDefine SessionExpired
 @apiError (4xx) {String} SessionExpired User session has expired.

 @apiErrorExample SessionExpired
   HTTP/1.1 401 SessionExpired
   {
       error: "Your session has expired."
   }
*/

/**
  @apiDefine InactiveAccount
  @apiError (4xx) {String} InactiveAccount The account is inactive. Please contact admin.

  @apiErrorExample {json} InactiveAccount
  HTTP/1.1 403 InactiveAccount
  {
     "error": "The account is inactive. Please contact admin."
  }
*/


/**
 @apiDefine AuthHeader

 @apiHeader {String} Authorization AuthToken received during login.

 @apiHeaderExample AuthHeader
   {
       "Authorization": "Bearer YWxhZGRpbjpvcGVuc2VzYW1l"
   }
*/


/**
 @apiDefine CommonHeader

 @apiHeader {String} App-Version Version of the application.
 @apiHeader {String} Build-Number The Build number of the application.
 @apiHeader {String} Device-Type Type of the device. iOS/Android.
 @apiHeader {String} Device-OS-Version Device OS version. Used during the time of removing app support for an OS Version.
 @apiHeader {String} Device-Identifier Device token to send push notifictions.
 @apiHeader {String} Api-Key The API key to identify the  client.


 @apiHeaderExample CommonHeader
   {
       "App-Version": "0.0.1",
       "Build-Number": "0.0.1",
       "Device-Type": "Android",
       "Device-OS-Version": "10.0.3",
       "Device-Identifier": "34889-3248687-324876-324987-324876",
       "Api-Key": "AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht"
   }
*/
