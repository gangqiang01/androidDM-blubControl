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

let deleteSolutionAppStatusHistoryApi = function(sasid){
    return new Promise((resolve, reject) => {
        apiDelete("/api/solutionAppStatus/"+sasid).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

let deleteSolutionAppStatusHistoryAllApi = function(){
    return new Promise((resolve, reject) => {
        apiDelete("/api/solutionAppStatus").then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

let deleteSolutionAppStatusHistoryAllByTypeApi = function(type){
    return new Promise((resolve, reject) => {
        apiDelete("/api/solutionAppStatus/byType/"+type).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

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


let batchDeleteSolutionAppStatusHistoryApi = function(sasids){
    let sasidsJson = JSON.stringify(sasids);
    let data = {
        sasids: sasidsJson
    }

    return new Promise((resolve, reject) => {
        apiPost("/api/solutionAppStatus/batchdDelete", data, config).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

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