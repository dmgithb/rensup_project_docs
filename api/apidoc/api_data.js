define({ "api": [
  {
    "type": "GET",
    "url": "/activity/get-activities",
    "title": "Get Activities",
    "version": "2.0.0",
    "description": "<p>Returns the list of activities available for the user.</p>",
    "name": "get-activities",
    "group": "Activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Informative message to user, if no activities are assigned. <code>NOTE: The message content changes based on the role of the user.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activities",
            "description": "<p>An array which contains the list of activities</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activities.id",
            "description": "<p>The unique ID of the activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.name",
            "description": "<p>The title of the activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"maintenance\"",
              "\"receive\""
            ],
            "optional": false,
            "field": "activities.identifier",
            "description": "<p>The identifier used by the front-end.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.code",
            "description": "<p>A code which represents the type of the activity.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        activities: [{\n            id: 25, \n            name: \"Maintenance Tasks\",\n            identifier: \"maintenance\"\n            code: \"Tasks\"\n        }],\n        message: \"You have no activities assigned. Please contact the admin.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apis/activity.js",
    "groupTitle": "Activity",
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
    "url": "/app/get-leave-reasons",
    "title": "Get Leave Reasons",
    "description": "<p>Returns the reasons for leave</p>",
    "name": "get-leave-reasons",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reasons",
            "description": "<p>Array of leave reasons.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reasons.reason",
            "description": "<p>Tile of the reason.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reasons.id",
            "description": "<p>Unique id of the reason.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    reasons: [{\n        reason: \"Sick/Personal\",\n        id: 1\n    }]\n}",
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
    "url": "/attendance/apply-leave",
    "title": "Apply Leave",
    "description": "<p>User can apply for leaves</p>",
    "name": "apply-leave",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Date the leave starts.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toDate",
            "description": "<p>Date the leave ends.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>Time from the leave starts. The time should be in 24 hours.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>Time from the leave ends. The time should be in 24 hours.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reasonId",
            "description": "<p>ID of the reason for the leave.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"userId\": \"35434\",\n    \"fromDate\": \"YYYY/MM/DD\",\n    \"toDate\": \"YYYY/MM/DD\",\n    \"startTime\": \"18:30\"\n    \"endTime\": \"22:30\",\n    \"reasonId\": 1\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n    message: \"Your leave request for date ${fromDate, startTime}-${toDate, endTime} has been submitted for approval.\"\n}",
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
    "url": "/attendance/mark-break",
    "title": "Mark Break",
    "description": "<p>User can mark their breaks</p>",
    "name": "mark-break",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ON\"",
              "\"OFF\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Status of the break</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"userId\": \"35434\",\n    \"status\": \"ON\"\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n    message: \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "String",
            "optional": false,
            "field": "InvalidBreakStatus",
            "description": "<p>The break status is invalid.</p>"
          }
        ],
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
          "title": "InvalidBreakStatus",
          "content": "HTTP/1.1 590 InvalidBreakStatus\n{\n    error: \"The break status is invalid\"\n}",
          "type": "json"
        },
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
          "content": "HTTP/1.1 200 OK\n{\n    token: \"wr73shagas793w7983hasgcs63w74798478\"\n    id: \"1998\",\n    name: \"Robert William\"\n    department: \"Store Keeper\",\n    attendencStatus: \"PUNCHEDIN\",\n    workingTime: 564646,\n    punchIn: \"7:03 AM\",\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n     token:\"jasghu643hfksjhkscrh4789873897958-\"\n     id: \"1998\",\n     name: \"Robert William\"\n     department: \"Store Keeper\",\n     attendencStatus: \"PUNCHEDIN\",\n     workingTime: 564646,\n}",
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
    "url": "/maintenance/get-task/{taskId}",
    "title": "Get Task",
    "version": "2.0.0",
    "description": "<p>Returns the details of the requested task</p>",
    "name": "get-task",
    "group": "Maintenance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "taskId",
            "description": "<p>The unique ID of the task</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n     taskId: 58\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eta",
            "description": "<p>The ETA of the task <code>format: YYYY-MM-DD.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"NOTSTARTED\"",
              "\"INPROGRESS\"",
              "\"PAUSED\"",
              "\"COMPLETED\"",
              "\"HOLD\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The current status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.totalHours",
            "description": "<p>The expected hours to complete the task.  <code>Format: hh:mm Hrs</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "supplies",
            "description": "<p>An array which contains the list of supply items and its current status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "supplies.name",
            "description": "<p>The name of the supply item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"ONHAND\"",
              "\"ORDERED\""
            ],
            "optional": false,
            "field": "supplies.status",
            "description": "<p>The current status of the supply item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "supplies.type",
            "description": "<p>The type of the supply item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     id: 58,\n     name: \"Fix internet connection\",\n     description: \"\",\n     eta: \"Oct 2 2022 12:00:00:AM\",\n     status: \"Inactive\",\n     totalHours: \"03:00 Hrs\"\n     status: \"Start\",\n     supplies: [\n         {\n             name: \"Hammer & Screw driver\",\n             status: \"ONHAND\",\n             type: \"Tools\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "apis/maintenance.js",
    "groupTitle": "Maintenance",
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
    "url": "/maintenance/{activityId}/get-tasks",
    "title": "Get Tasks",
    "version": "2.0.0",
    "description": "<p>Returns the list of tasks comes under the maintenance activity</p>",
    "name": "get-tasks",
    "group": "Maintenance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "activityId",
            "description": "<p>The unique ID of the activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    activityId: 25\n}",
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
            "field": "tasks",
            "description": "<p>An array which contains the list of tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>The unique ID of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.name",
            "description": "<p>The name of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.description",
            "description": "<p>The description of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.eta",
            "description": "<p>The ETA of the task <code>format: YYYY-MM-DD.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"NOTSTARTED\"",
              "\"INPROGRESS\"",
              "\"PAUSED\"",
              "\"COMPLETED\"",
              "\"HOLD\""
            ],
            "optional": false,
            "field": "tasks.status",
            "description": "<p>The current status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.totalHours",
            "description": "<p>The expected hours to complete the task.  <code>Format: hh:mm Hrs</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        tasks: \n        [\n            {\n                id: 58,\n                name: \"test task 1\",\n                description: \"test task 1\",\n                eta: \"Sep 29 2022, 12:00AM\",\n                status: \"INPROGRESS\",\n                totalHours: \"00:30 Hrs\"\n            },\n            {\n                id: 59,\n                taskName: \"test task 2\",\n                taskDesc: \"test task 2\",\n                eta: \"Sep 27 2022, 12:00 AM\",\n                status: \"PAUSED\",\n                totalHours: \"03:00 Hrs\"\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apis/maintenance.js",
    "groupTitle": "Maintenance",
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
    "url": "/maintenance/update-task-status",
    "title": "Update Task Status",
    "version": "2.0.0",
    "description": "<p>To update the status of the task</p>",
    "name": "update-task-status",
    "group": "Maintenance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "activityId",
            "description": "<p>The unique ID of the activity</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "taskId",
            "description": "<p>The unique ID of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"STARTED\"",
              "\"PAUSED\"",
              "\"RESUMED\"",
              "\"COMPLETED\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The status to be updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    activityId: 25,\n    taskId: 58,\n    status: \"COMPLETED\"\n}",
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
            "description": "<p>Success message from the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    message: \"Task status updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apis/maintenance.js",
    "groupTitle": "Maintenance",
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
    "url": "/receiving/{activityId}/get-tasks",
    "title": "Get Tasks",
    "version": "2.0.0",
    "description": "<p>Returns the list of tasks comes under the maintenance activity</p>",
    "name": "get-tasks",
    "group": "Receiving",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "activityId",
            "description": "<p>The unique ID of the activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    activityId: 25\n}",
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
            "field": "tasks",
            "description": "<p>An array which contains the list of tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>The unique ID of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.name",
            "description": "<p>The name of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"NOTSTARTED\"",
              "\"INPROGRESS\"",
              "\"PAUSED\"",
              "\"COMPLETED\"",
              "\"HOLD\""
            ],
            "optional": false,
            "field": "tasks.status",
            "description": "<p>The current status of the task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        tasks: \n        [\n            {\n                id: 58,\n                name: \"test task 1\",\n                status: \"INPROGRESS\",\n            },\n            {\n                id: 59,\n                name: \"test task 1\",\n                status: \"INPROGRESS\",\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apis/receiving.js",
    "groupTitle": "Receiving",
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
    "url": "/receiving/update-task-status",
    "title": "Update Task Status",
    "version": "2.0.0",
    "description": "<p>To update the status of the task</p>",
    "name": "update-task-status",
    "group": "Receiving",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "activityId",
            "description": "<p>The unique ID of the activity</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "taskId",
            "description": "<p>The unique ID of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"STARTED\"",
              "\"PAUSED\"",
              "\"RESUMED\"",
              "\"COMPLETED\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The status to be updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    activityId: 25,\n    taskId: 58,\n    status: \"COMPLETED\"\n}",
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
            "description": "<p>Success message from the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    message: \"Task status updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apis/receiving.js",
    "groupTitle": "Receiving",
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
    "version": "2.0.0",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"break\"",
              "\"work\""
            ],
            "optional": false,
            "field": "workStatus",
            "description": "<p>Contains the work status of the employee. Whether in break or at work.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "task",
            "description": "<p>Contains the details of the active task of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task.id",
            "description": "<p>The unique ID of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.name",
            "description": "<p>The name of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.description",
            "description": "<p>The description of the task. <code>For receiving tasks, this node will be null</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.eta",
            "description": "<p>The ETA of the task <code>format: YYYY-MM-DD. For receiving tasks, this node will be null</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"NOTSTARTED\"",
              "\"INPROGRESS\"",
              "\"PAUSED\"",
              "\"COMPLETED\"",
              "\"HOLD\""
            ],
            "optional": false,
            "field": "task.status",
            "description": "<p>The current status of the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.totalHours",
            "description": "<p>The expected hours to complete the task.  <code>Format: hh:mm Hrs. For receiving tasks, this node will be null</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.identifier",
            "description": "<p>The identifier of the activity on with the task belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.activityId",
            "description": "<p>The unique if of the activity on which the task belongs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   id: \"1998\",\n   name: \"Robert William\"\n   roleId: 10,\n   role: \"Store Keeper\",\n   attendencStatus: \"PUNCHEDIN\",\n   workingTime: 564646,\n   punchIn: \"7:03 AM\",\n   punchOut: \"10:03 AM\",\n   workStatus: \"work\",\n   task: {\n      id: 58,\n      name: \"test task 1\",\n      description: \"test task 1\",\n      eta: \"Sep 29 2022, 12:00AM\",\n      status: \"INPROGRESS\",\n      totalHours: \"00:30 Hrs\",\n      identifier: \"maintenance\",\n      activityId: \"237\"\n   }\n}",
          "type": "json"
        }
      ]
    },
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
  },
  {
    "type": "GET",
    "url": "/user/",
    "title": "Get User",
    "version": "1.0.0",
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
          "content": "HTTP/1.1 200 OK\n{\n   id: \"1998\",\n   name: \"Robert William\"\n   roleId: 10,\n   role: \"Store Keeper\",\n   attendencStatus: \"PUNCHEDIN\",\n   workingTime: 564646,\n   punchIn: \"7:03 AM\",\n   punchOut: \"10:03 AM\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apis/Previous Version/Previous Version APIs.js",
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
