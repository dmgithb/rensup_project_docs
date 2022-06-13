define({ "api": [
  {
    "type": "GET",
    "url": "/app/get-locations",
    "title": "Get Locations",
    "description": "<p>Returns the locations of office / godown etc</p>",
    "name": "get-locations",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locations",
            "description": "<p>Array of locations where the office or godown located.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locations.name",
            "description": "<p>Name of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "locations.latitude",
            "description": "<p>The latitude of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "locations.longitude",
            "description": "<p>The longitude of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "locations.radius",
            "description": "<p>The proximity radius.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    locations: [{\n        name: \"Kochi\",\n        latitude: 10.4387595797,\n        longitude: 77.4387595797,\n        radius: 25\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/app.js",
    "groupTitle": "App",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/attendance/confirm",
    "title": "Confirm Attendance",
    "description": "<p>User can approve the attendence</p>",
    "name": "confirm",
    "group": "Attendance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"id\": \"35434\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message to user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    message: \"Thanks for confirming your attendance.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/attendence.js",
    "groupTitle": "Attendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/attendance/",
    "title": "Get Attendence History",
    "description": "<p>Returns the details of user</p>",
    "name": "get-attendance-history",
    "group": "Attendance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n   \"id\": \"35434\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "history",
            "description": "<p>The attendence history details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.date",
            "description": "<p>Date the data belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.punchIn",
            "description": "<p>Punch-in time of the employee for the day.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.punchOut",
            "description": "<p>Punch-out time of the employee for the day.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "history.workingTime",
            "description": "<p>The actual time time the user worked for the day. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "history.grossTime",
            "description": "<p>Total time between the inital punch in and last punch out. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.location",
            "description": "<p>The work location user worked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     history: [{\n         date: \"2022-03-11\", \n         punchIn: \"7:03 AM\",\n         punchOut: \"10:03 AM\" \n         workingTime: 564646,\n         grossTime: 3458775,\n         location: \"Rensup Supply Office\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/attendence.js",
    "groupTitle": "Attendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/attendance/punch-in",
    "title": "Punch In",
    "description": "<p>Allow the user to punch-in to the system for marking the daily attendence.</p>",
    "name": "punch-in",
    "group": "Attendance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"id\": \"35434\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Session token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The full name of the user, concatinate if user's name stored as different components.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roleId",
            "description": "<p>The unique ID of the role assigned for user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Title of the role assigned for user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PUNCHEDIN\"",
              "\"PUNCHEDOUT\""
            ],
            "optional": false,
            "field": "attendencStatus",
            "description": "<p>Whether the user is punched in or punched out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workingTime",
            "description": "<p>Total time the user worked. <code>Note: This should be in seconds.</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: \"wr73shagas793w7983hasgcs63w74798478\"\n    id: \"1998\",\n    name: \"Robert William\"\n    roleId: 10,\n    role: \"Store Keeper\",\n    attendencStatus: \"PUNCHEDIN\",\n    workingTime: 73264827\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/attendence.js",
    "groupTitle": "Attendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/attendance/punch-out",
    "title": "Punch Out",
    "description": "<p>Allow the user to punch-out from the system for marking the daily attendence.</p>",
    "name": "punch-out",
    "group": "Attendance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"id\": \"35434\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workingTime",
            "description": "<p>Total time the user worked. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "grossTime",
            "description": "<p>Total time between the first punch-in and last punch-out. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchIn",
            "description": "<p>Punch-in time of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchOut",
            "description": "<p>Punch-out time of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    workingTime: 324243,\n    grossTime: 347988,\n    punchIn: \"9:31 AM\",\n    punchOut: \"5:31 PM\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/attendence.js",
    "groupTitle": "Attendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/auth/authenticate",
    "title": "Authenticate",
    "description": "<p>Authenticate the user and return the necessary information about user.</p>",
    "name": "authenticate",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data reterived from QR code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"data\": \"sah74385wnc3wyr8c7w3r873279\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Session token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The full name of the user, concatinate if user's name stored as different components.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>The name of the department the employee belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PUNCHEDIN\"",
              "\"PUNCHEDOUT\""
            ],
            "optional": false,
            "field": "attendencStatus",
            "description": "<p>Whether the user is punched in or punched out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workingTime",
            "description": "<p>Total time the user worked. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchIn",
            "description": "<p>Punch-in time of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchOut",
            "description": "<p>Punch-out time of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     token:\"jasghu643hfksjhkscrh4789873897958-\"\n     id: \"1998\",\n     name: \"Robert William\"\n     department: \"Store Keeper\",\n     attendencStatus: \"PUNCHEDIN\",\n     workingTime: 564646,\n     punchIn: \"7:03 AM\",\n     punchOut: \"9:03 PM\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/auth.js",
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/auth/unauthenticate",
    "title": "Unauthenticate",
    "description": "<p>Unauthenticate the user by clearing the session information.</p>",
    "name": "unauthenticate",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Session token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The full name of the user, concatinate if user's name stored as different components.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "department",
            "description": "<p>The name of the department the employee belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PUNCHEDIN\"",
              "\"PUNCHEDOUT\""
            ],
            "optional": false,
            "field": "attendencStatus",
            "description": "<p>Whether the user is punched in or punched out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workingTime",
            "description": "<p>Total time the user worked. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchIn",
            "description": "<p>Punch-in time of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchOut",
            "description": "<p>Punch-out time of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     token:\"jasghu643hfksjhkscrh4789873897958-\"\n     id: \"1998\",\n     name: \"Robert William\"\n     department: \"Store Keeper\",\n     attendencStatus: \"PUNCHEDIN\",\n     workingTime: 564646,\n     punchIn: \"7:03 AM\",\n     punchOut: \"9:03 PM\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/auth.js",
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/user/",
    "title": "Get User",
    "description": "<p>Returns the details of user</p>",
    "name": "get-user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n   \"id\": \"35434\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The full name of the user, concatinate if user's name stored as different components.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roleId",
            "description": "<p>The unique ID of the role assigned for user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Title of the role assigned for user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PUNCHEDIN\"",
              "\"PUNCHEDOUT\""
            ],
            "optional": false,
            "field": "attendencStatus",
            "description": "<p>Whether the user is punched in or punched out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workingTime",
            "description": "<p>Total time the user worked. <code>Note: This should be in seconds.</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchIn",
            "description": "<p>Punch-in time of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "punchOut",
            "description": "<p>Punch-out time of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   id: \"1998\",\n   name: \"Robert William\"\n   roleId: 10,\n   role: \"Store Keeper\",\n   attendencStatus: \"PUNCHEDIN\",\n   workingTime: 564646,\n   punchIn: \"7:03 AM\",\n   punchOut: \"10:03 AM\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Api-Key",
            "description": "<p>The API key to identify the  client.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\",\n    \"Api-Key\": \"AHuy1od49clkvj8ruv3pvp4m1lcg7lq6cmht\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired.\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
