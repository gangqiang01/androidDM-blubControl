import {apiGet, apiPut, apiDelete, apiPost} from '../../assets/js/baseApi'

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
 * @api {get} /api/solutionAppStatus/byType 获得设备的操作历史
 * @apiVersion 0.1.0
 * @apiName 获得设备的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 获得设备的操作历史
 * @apiParam {String} type 设备中解决方案APP的包名
 * @apiSuccess {Object[]} data 操作历史的列表.
 *  @apiSuccessExample {json} Success-Response:
 *          HTTP/1.1 200 OK 
 *          {Object[]} 
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
 * @api {get} /api/solutionAppStatus/byAgentId 获得指定设备的操作历史
 * @apiVersion 0.1.0
 * @apiName 获得指定设备的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription get 获得指定设备的操作历史
 * @apiParam {String} endpoint 设备的ID
 * @apiParam {String} type 设备中解决方案APP的包名
 * @apiSuccess {Object[]} data 操作历史的列表.
 *  @apiSuccessExample {json} Success-Response:
 *          HTTP/1.1 200 OK 
 *          {Object[]} 
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
 * @api {get} /api/solutionAppStatus/byGroupname 获得设备组中所有设备的操作历史
 * @apiVersion 0.1.0
 * @apiName 获得设备组中所有设备的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 获得设备组中所有设备的操作历史
 * @apiParam {String} groupname 设备组名称
 * @apiParam {String} type 设备中解决方案APP的包名
 * @apiSuccess {Object[]} data 操作历史的列表 
 * @apiSuccessExample {json} Success-Response:
 *          HTTP/1.1 200 OK 
 *          {Object[]} 
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
 * @api {get} /api/solutionAppStatus/byPageAndStatusIngroup 获得设备组中所有设备指定状态的操作历史
 * @apiVersion 0.1.0
 * @apiName 获得设备组中所有设备指定状态的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 获得设备组中所有设备指定状态的操作历史
 * @apiParam {String} type 设备中解决方案APP的包名
 * @apiParam {String} groupname 设备组名称
 * @apiParam {Number} currentpage 当前页
 * @apiParam {Number} limit 一页显示的最大条数
 * @apiParam {String} status type: 操作历史的状态（running:0, fail:1 success:2）,example:[0,1]
 * @apiSuccess {Object[]} data 操作历史的列表 
 * @apiSuccessExample {json} Success-Response: 
 *          HTTP/1.1 200 OK
 *          {count: 总条数，data: Object[]} 
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
 * @api {get} /api/solutionAppStatus/byPageInGroup 获得设备组中所有设备的操作历史
 * @apiVersion 0.1.0
 * @apiName 获得设备组中所有设备的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 获得设备组中所有设备的操作历史
 * @apiParam {String} type 设备中解决方案APP的包名
 * @apiParam {String} groupname 设备组名称
 * @apiParam {Number} currentpage 当前页
 * @apiParam {Number} limit 一页显示的最大条数
 * @apiSuccess {Object} data 操作历史的列表
 * @apiSuccessExample {json} Success-Response: 
 *           HTTP/1.1 200 OK
 *           {count: 总条数，data: Object[]} 
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
 * @api {delete} /api/solutionAppStatus/:sasid 删除指定的操作历史
 * @apiVersion 0.1.0
 * @apiName 删除指定的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 删除指定的操作历史
 * @apiParam {Number} sasid 操作历史的ID
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
 * @api {delete} /api/solutionAppStatus 删除所有操作历史
 * @apiVersion 0.1.0
 * @apiName 删除所有操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 删除所有操作历史
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
 * @api {delete} /api/solutionAppStatus/byType/:type 删除所有操作历史
 * @apiVersion 0.1.0
 * @apiName 删除所有操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 删除所有操作历史
 * @apiParam {String} type 设备中解决方案APP的包名
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
 * @api {post} /api/solutionAppStatus/deleteByDevId 删除指定设备的操作历史
 * @apiVersion 0.1.0
 * @apiName 删除指定设备的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 删除指定设备的操作历史
 * @apiParam {String} endpoint 设备的ID
 * @apiParam {String} type 设备中解决方案APP的包名
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
 * @api {post} /api/solutionAppStatus/deleteByGroup 删除设备组中所有设备的操作历史
 * @apiVersion 0.1.0
 * @apiName 删除设备组中所有设备的操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 删除设备组中所有设备的操作历史
 * @apiParam {String} groupname 设备组名称
 * @apiParam {String} type 设备中解决方案APP的包名
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
 * @api {post} /api/solutionAppStatus/batchdDelete 批量删除操作历史
 * @apiVersion 0.1.0
 * @apiName 批量删除操作历史
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription  批量删除操作历史
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
 * @api {get} /api/solutionAppStatus/overview 获得指定任务的操作历史的结果
 * @apiVersion 0.1.0
 * @apiName 获得指定任务的操作历史的结果
 * @apiGroup 操作历史
 * @apiHeader {String} accesstoken 用户授权token
 * @apiDescription 获得指定任务的操作历史的结果
 * @apiParam {String} taskname 设备中解决方案APP的包名
 * @apiParam {String} type 设备中解决方案APP的包名
 * @apiSuccess {Number}   running  指定任务中正在执行的操作的个数.
 * @apiSuccess {Number}   fail  指定任务中失败的操作的个数.
 * @apiSuccess {Number}   success  指定任务中成功的操作的个数.
 * @apiSuccessExample {json} Success-Response:
                { running: "",fail: "", success: ""}
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