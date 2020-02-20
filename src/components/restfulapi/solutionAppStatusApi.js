import {apiGet, apiPut, apiDelete, apiPost} from '../../assets/js/baseApi'

/**
 * @api {get} /api/solutionAppStatus/status get solution app status
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusApi
 * @apiGroup solutionAppStatus
 * @apiDescription get value of solution app status 
 * @apiSuccess {Object[]}  list of solution app status .
 */
let getSolutionAppStatusApi = function(){
    return new Promise((resolve, reject) => {
        apiGet("/api/solutionAppStatus/status").then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {get} /api/solutionAppStatus/byType get solution app status by type
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusByTypeApi
 * @apiGroup solutionAppStatus
 * @apiDescription get your solution app status by type
 * @apiParam {String} type solution app package name
 * @apiSuccess {Object[]} list of solution app status .
 */
let getSolutionAppStatusByTypeApi = function(type){
    return new Promise((resolve, reject) => {
        let data = {
            type
        }
        apiGet("/api/solutionAppStatus/byType", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {get} /api/solutionAppStatus/byAgentId get solution app status of a device
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusByTypeAndDevIdApi
 * @apiGroup solutionAppStatus
 * @apiDescription get value of solution app status of a device
 * @apiParam {String} endpoint endpoint id of device
 * @apiParam {String} type solution app package name
 * @apiSuccess {Object[]}  list of solution app status .
 */
let getSolutionAppStatusByTypeAndDevIdApi = function(endpoint, type){
    return new Promise((resolve, reject) => {
        let data = {
            endpoint,
            type
        }
        apiGet("/api/solutionAppStatus/byAgentId", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {get} /api/solutionAppStatus/byGroupname get solution app status in a device group
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusByTypeAndGroupApi
 * @apiGroup solutionAppStatus
 * @apiDescription get your solution app status 
 * @apiParam {String} groupname device group name
 * @apiParam {String} type solution app package name
 * @apiSuccess {Object[]} list of solution app status 
 */
let getSolutionAppStatusByTypeAndGroupApi = function(groupname, type){
    return new Promise((resolve, reject) => {
        let data = {
            groupname,
            type
        }
        apiGet("/api/solutionAppStatus/byGroupname", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {get} /api/solutionAppStatus/byPageAndStatusIngroup get solution app by page and status in a device group
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusByPageAndStatusInGroupApi
 * @apiGroup solutionAppStatus
 * @apiDescription get your solution app status 
 * @apiParam {String} type solution app package name
 * @apiParam {String} groupname device group name
 * @apiParam {Number} currentpage current page
 * @apiParam {Number} limit Maximum number of bars displayed on one page 
 * @apiParam {String} status type: solution app status result, running:0, fail:1 success:2,example:[0,1]
 * @apiSuccess {Object[]}  list of solution app status 
 */
let getSolutionAppStatusByPageAndStatusInGroupApi = function(groupname, type, currentpage, limit, status){
    return new Promise((resolve, reject) => {
        let data = {
            groupname,
            type,
            currentpage,
            limit,
            status: JSON.stringify(status)
        }
        apiGet("/api/solutionAppStatus/byPageAndStatusIngroup", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {get} /api/solutionAppStatus/byPageInGroup get solution app by page in a device group
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusByPageInGroupApi
 * @apiGroup solutionAppStatus
 * @apiDescription get your solution app status 
 * @apiParam {String} type solution app package name
 * @apiParam {String} groupname device group name
 * @apiParam {Number} currentpage current page
 * @apiParam {Number} limit Maximum number of bars displayed on one page 
 * @apiSuccess {Object[]}  list of solution app status 
 */
let getSolutionAppStatusByPageInGroupApi = function(groupname, type, currentpage, limit){
    return new Promise((resolve, reject) => {
        let data = {
            groupname,
            type,
            currentpage,
            limit,
        }
        apiGet("/api/solutionAppStatus/byPageInGroup", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {delete} /api/solutionAppStatus/:sasid delete solution app status by sasid
 * @apiVersion 0.1.0
 * @apiName deleteSolutionAppStatusHistoryApi
 * @apiGroup solutionAppStatus
 * @apiDescription delete solution app status by sasid
 * @apiParam {Number} sasid sasid of solution app status
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
let deleteSolutionAppStatusHistoryApi = function(sasid){
    return new Promise((resolve, reject) => {
        apiDelete("/api/solutionAppStatus/"+sasid).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {delete} /api/solutionAppStatus delete all solution app status
 * @apiVersion 0.1.0
 * @apiName deleteSolutionAppStatusHistoryAllApi
 * @apiGroup solutionAppStatus
 * @apiDescription delete all solution app status
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
let deleteSolutionAppStatusHistoryAllApi = function(){
    return new Promise((resolve, reject) => {
        apiDelete("/api/solutionAppStatus").then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {delete} /api/solutionAppStatus/byType/:type delete solution app status by type
 * @apiVersion 0.1.0
 * @apiName deleteSolutionAppStatusHistoryAllByTypeApi
 * @apiGroup solutionAppStatus
 * @apiDescription delete solution app status by type
 * @apiParam {String} type solution app package name
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
let deleteSolutionAppStatusHistoryAllByTypeApi = function(type){
    return new Promise((resolve, reject) => {
        apiDelete("/api/solutionAppStatus/byType/"+type).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {post} /api/solutionAppStatus/deleteByDevId delete solution app status by device id
 * @apiVersion 0.1.0
 * @apiName deleteSolutionAppStatusHistoryAllByDevIDAndTypeApi
 * @apiGroup solutionAppStatus
 * @apiDescription delete solution app status by device id
 * @apiParam {String} endpoint endpoint id of device
 * @apiParam {String} type solution app package name
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
let deleteSolutionAppStatusHistoryAllByDevIDAndTypeApi = function(endpoint, type){
    return new Promise((resolve, reject) => {
        let data = {
            endpoint,
            type
        }
        apiPost("/api/solutionAppStatus/deleteByDevId", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {post} /api/solutionAppStatus/deleteByGroup delete solution app status by device group
 * @apiVersion 0.1.0
 * @apiName deleteSolutionAppStatusHistoryAllByGroupAndTypeApi
 * @apiGroup solutionAppStatus
 * @apiDescription delete solution app status by device group
 * @apiParam {String} groupname device group name
 * @apiParam {String} type solution app package name
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
let deleteSolutionAppStatusHistoryAllByGroupAndTypeApi = function(groupname, type){
    return new Promise((resolve, reject) => {
        let data = {
            groupname,
            type
        }
        apiPost("/api/solutionAppStatus/deleteByGroup", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {post} /api/solutionAppStatus/batchdDelete batch delete solution app status by sasids
 * @apiVersion 0.1.0
 * @apiName batchDeleteSolutionAppStatusHistoryApi
 * @apiGroup solutionAppStatus
 * @apiDescription  batch delete solution app status by sasids
 * @apiParam {String} sasids  JSON type: sasids 
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
let batchDeleteSolutionAppStatusHistoryApi = function(sasids){
    let sasidsJson = JSON.stringify(sasids);
    let data = {
        sasids: sasidsJson
    }

    return new Promise((resolve, reject) => {
        apiPost("/api/solutionAppStatus/batchdDelete", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

/**
 * @api {get} /api/solutionAppStatus/overview get solution app status overview
 * @apiVersion 0.1.0
 * @apiName getSolutionAppStatusOverviewApi
 * @apiGroup solutionAppStatus
 * @apiDescription get your solution app status overview 
 * @apiParam {String} taskname solution app package name
 * @apiParam {String} type solution app package name
 * @apiSuccess {Number}   running  running count of solution app status.
 * @apiSuccess {Number}   fail  fail count of solution app status.
 * @apiSuccess {Number}   success  success count of solution app status.
 */
let getSolutionAppStatusOverviewApi = function(taskname, type){
    let data={
        taskname,
        type
    }

    return new Promise((resolve, reject) => {
        apiGet("/api/solutionAppStatus/overview", data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

export {
    getSolutionAppStatusApi,
    deleteSolutionAppStatusHistoryApi,
    batchDeleteSolutionAppStatusHistoryApi,
    getSolutionAppStatusOverviewApi,
    deleteSolutionAppStatusHistoryAllApi,
    getSolutionAppStatusByTypeApi,
    getSolutionAppStatusByTypeAndDevIdApi, 
    getSolutionAppStatusByTypeAndGroupApi,
    deleteSolutionAppStatusHistoryAllByTypeApi,
    getSolutionAppStatusByPageAndStatusInGroupApi,
    getSolutionAppStatusByPageInGroupApi,
    deleteSolutionAppStatusHistoryAllByDevIDAndTypeApi,
    deleteSolutionAppStatusHistoryAllByGroupAndTypeApi,
}