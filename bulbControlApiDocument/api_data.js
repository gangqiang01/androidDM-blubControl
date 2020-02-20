define({ "api": [
  {
    "type": "get",
    "url": "/api/groupmgr/all",
    "title": "Get device group",
    "version": "0.1.0",
    "name": "getDeviceGroup",
    "group": "deviceGroup",
    "description": "<p>Get device group</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>list of device group.</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/deviceGroupApi.js",
    "groupTitle": "deviceGroup"
  },
  {
    "type": "get",
    "url": "/api/devicemgr",
    "title": "Get all device",
    "version": "0.1.0",
    "name": "getDevices",
    "group": "device",
    "description": "<p>Get all devices</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>list of device.</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/deviceApi.js",
    "groupTitle": "device"
  },
  {
    "type": "get",
    "url": "/api/devicemgr/getonlinedevicebygroup",
    "title": "Get online devices in group",
    "version": "0.1.0",
    "name": "getOnlineDevicesByGroupname",
    "group": "device",
    "description": "<p>Get online devices by group name</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gname",
            "description": "<p>group name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>list of device.</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/deviceApi.js",
    "groupTitle": "device"
  },
  {
    "type": "post",
    "url": "/api/solutionAppStatus/batchdDelete",
    "title": "batch delete solution app status by ids",
    "version": "0.1.0",
    "name": "batchDeleteSolutionAppStatusHistoryApi",
    "group": "solutionAppStatus",
    "description": "<p>batch delete solution app status by ids</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sasids",
            "description": "<p>JSON type: sasids</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "delete",
    "url": "/api/solutionAppStatus",
    "title": "delete all solution app status",
    "version": "0.1.0",
    "name": "deleteSolutionAppStatusHistoryAllApi",
    "group": "solutionAppStatus",
    "description": "<p>delete all solution app status</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "post",
    "url": "/api/solutionAppStatus/deleteByDevId",
    "title": "delete solution app status by device id",
    "version": "0.1.0",
    "name": "deleteSolutionAppStatusHistoryAllByDevIDAndTypeApi",
    "group": "solutionAppStatus",
    "description": "<p>delete solution app status by device id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpoint",
            "description": "<p>endpoint id of device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "post",
    "url": "/api/solutionAppStatus/deleteByGroup",
    "title": "delete solution app status by device group",
    "version": "0.1.0",
    "name": "deleteSolutionAppStatusHistoryAllByGroupAndTypeApi",
    "group": "solutionAppStatus",
    "description": "<p>delete solution app status by device group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupname",
            "description": "<p>device group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "delete",
    "url": "/api/solutionAppStatus/byType/:type",
    "title": "delete solution app status by type",
    "version": "0.1.0",
    "name": "deleteSolutionAppStatusHistoryAllByTypeApi",
    "group": "solutionAppStatus",
    "description": "<p>delete solution app status by type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "delete",
    "url": "/api/solutionAppStatus/:sasid",
    "title": "delete solution app status by sasid",
    "version": "0.1.0",
    "name": "deleteSolutionAppStatusHistoryApi",
    "group": "solutionAppStatus",
    "description": "<p>delete solution app status by sasid</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sasid",
            "description": "<p>sasid of solution app status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/status",
    "title": "get solution app status",
    "version": "0.1.0",
    "name": "getSolutionAppStatusApi",
    "group": "solutionAppStatus",
    "description": "<p>get value of solution app status</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of solution app status .</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/byPageAndStatusIngroup",
    "title": "get solution app by page and status in a device group",
    "version": "0.1.0",
    "name": "getSolutionAppStatusByPageAndStatusInGroupApi",
    "group": "solutionAppStatus",
    "description": "<p>get your solution app status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupname",
            "description": "<p>device group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currentpage",
            "description": "<p>current page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum number of bars displayed on one page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>type: solution app status result, running:0, fail:1 success:2,example:[0,1]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of solution app status</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/byPageInGroup",
    "title": "get solution app by page in a device group",
    "version": "0.1.0",
    "name": "getSolutionAppStatusByPageInGroupApi",
    "group": "solutionAppStatus",
    "description": "<p>get your solution app status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupname",
            "description": "<p>device group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "currentpage",
            "description": "<p>current page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum number of bars displayed on one page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of solution app status</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/byAgentId",
    "title": "get solution app status of a device",
    "version": "0.1.0",
    "name": "getSolutionAppStatusByTypeAndDevIdApi",
    "group": "solutionAppStatus",
    "description": "<p>get value of solution app status of a device</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpoint",
            "description": "<p>endpoint id of device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of solution app status .</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/byGroupname",
    "title": "get solution app status in a device group",
    "version": "0.1.0",
    "name": "getSolutionAppStatusByTypeAndGroupApi",
    "group": "solutionAppStatus",
    "description": "<p>get your solution app status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupname",
            "description": "<p>device group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of solution app status</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/byType",
    "title": "get solution app status by type",
    "version": "0.1.0",
    "name": "getSolutionAppStatusByTypeApi",
    "group": "solutionAppStatus",
    "description": "<p>get your solution app status by type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of solution app status .</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "get",
    "url": "/api/solutionAppStatus/overview",
    "title": "get solution app status overview",
    "version": "0.1.0",
    "name": "getSolutionAppStatusOverviewApi",
    "group": "solutionAppStatus",
    "description": "<p>get your solution app status overview</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskname",
            "description": "<p>solution app package name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>solution app package name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "running",
            "description": "<p>running count of solution app status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fail",
            "description": "<p>fail count of solution app status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>success count of solution app status.</p>"
          }
        ]
      }
    },
    "filename": "src/components/restfulapi/solutionAppStatusApi.js",
    "groupTitle": "solutionAppStatus"
  },
  {
    "type": "post",
    "url": "/api/solutionApp/batchdeploy/40007/0/27601",
    "title": "Read batch set solution app value",
    "version": "0.1.0",
    "name": "batchSetSolutionAppValue",
    "group": "solutionApp",
    "description": "<p>get value of solution app</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskname",
            "description": "<p>the name of batch set solution app value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpoint",
            "description": "<p>endpoint id of device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "funcid",
            "description": "<p>defined by solution app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appname",
            "description": "<p>solution app package name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>data to send to solution app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppApi.js",
    "groupTitle": "solutionApp"
  },
  {
    "type": "get",
    "url": "/api/solutionApp/${endpoint}/40007/0/27600",
    "title": "get solution app value",
    "version": "0.1.0",
    "name": "getSolutionAppValue",
    "group": "solutionApp",
    "description": "<p>get value of solution app</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpoint",
            "description": "<p>endpoint id of device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "funcid",
            "description": "<p>defined by solution app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appname",
            "description": "<p>solution app package name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>data to send to solution app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CONTENT.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CONTENT\",content: \"\" }",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppApi.js",
    "groupTitle": "solutionApp"
  },
  {
    "type": "post",
    "url": "/api/solutionApp/redeploy/40007/0/27601",
    "title": "reset solution app value",
    "version": "0.1.0",
    "name": "reSetSolutionAppValue",
    "group": "solutionApp",
    "description": "<p>get value of solution app</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "funcid",
            "description": "<p>defined by solution app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskname",
            "description": "<p>the name of reset</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpoint",
            "description": "<p>endpoint id of device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appname",
            "description": "<p>solution app package name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>data to send to solution app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppApi.js",
    "groupTitle": "solutionApp"
  },
  {
    "type": "put",
    "url": "/api/solutionApp/${endpoint}/40007/0/27601",
    "title": "set solution app value",
    "version": "0.1.0",
    "name": "setSolutionAppValue",
    "group": "solutionApp",
    "description": "<p>set value of solution app</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endpoint",
            "description": "<p>endpoint id of device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>resource id of lwm2m value example 5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>data to send to solution app,format:{ appname: this.pkgname, funcid: this.funcIds.setLedColor, param: this.bulbColor }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>return CHANGED.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ status: \"CHANGED\"}",
          "type": "json"
        }
      ]
    },
    "filename": "src/components/restfulapi/solutionAppApi.js",
    "groupTitle": "solutionApp"
  }
] });
