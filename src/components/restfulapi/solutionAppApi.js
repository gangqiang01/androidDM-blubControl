import {apiGet, apiPut, apiDelete, apiPost} from '../../assets/js/baseApi'

let getSolutionAppValueApi = function(agentId, sensorId, param){
    return new Promise((resolve, reject) => {
        let url = "/api/solutionApp/"+ agentId+ sensorId
        apiGet(url, param).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

let setSolutionAppValueApi = function(agentId, sensorId, val=""){
    return new Promise((resolve, reject) => {
        let url = "/api/solutionApp/"+ agentId+ sensorId; 
        let resourceId = parseInt(sensorId.substring(sensorId.lastIndexOf("\/")+1, sensorId.length));
        
        var obj = {
            id: resourceId,
            value: JSON.stringify(val)
        }
        apiPut(url, obj).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

let reSetSolutionAppValue = function(sensorId, dpData){
    return new Promise((resolve, reject) => {
        let url = "/api/solutionApp/redeploy"+ sensorId;
        
        apiPost(url, dpData).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

let batchSetSolutionAppValue = function(sensorId, dpData){
    return new Promise((resolve, reject) => {
        let url = "/api/solutionApp/batchdeploy"+sensorId;
        
        apiPost(url, dpData).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}


export {
    getSolutionAppValueApi,
    setSolutionAppValueApi,
    reSetSolutionAppValue,
    batchSetSolutionAppValue
}