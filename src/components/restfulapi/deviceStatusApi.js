import {apiGet, apiPut, apiPost} from "../../assets/js/baseApi";


let getDeviceStatus = function(agentId, sensorId, param){
    return new Promise((resolve, reject) => {
        let url = "/api/devicemgr/"+ agentId+ sensorId
        apiGet(url, param).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

let setDeviceStatus = function(agentId, sensorId, val=""){
    return new Promise((resolve, reject) => {
        let url = "/api/devicemgr/"+ agentId+ sensorId; 
        let resourceId = parseInt(sensorId.substring(sensorId.lastIndexOf("\/")+1, sensorId.length));
        if(_g.isObject(val)){
            val= JSON.stringify(val)
        }
        var obj = {
            id: resourceId,
            value: val
        }
        apiPut(url, obj).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

let execDeviceStatus = function(agentId, sensorId, dpData){
    return new Promise((resolve, reject) => {
        let url = "/api/devicemgr/"+ agentId+ sensorId;
        let config = {};
        if(dpData){
            config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            };
        }else{
            dpData = {};
        }
        
        apiPost(url, dpData, config).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}
let reExecDeviceStatus = function(agentId, sensorId, dpData){
    return new Promise((resolve, reject) => {
        let url = "/api/devicemgr/redeploy"+ sensorId;
        let config = {};
        if(dpData){
            dpData.endpoint = agentId;
            config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            };
        }else{
            dpData = {};
        }
        
        apiPost(url, dpData, config).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

let batchExecDeviceStatus = function(sensorId, dpData){
    return new Promise((resolve, reject) => {
        let url = "/api/devicemgr/batchdeploy"+sensorId;
        let config = {};
        if(dpData){
            config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            };
        }else{
            dpData = {};
        }
        
        apiPost(url, dpData, config).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}

export{
    getDeviceStatus,
    setDeviceStatus,
    execDeviceStatus,
    batchExecDeviceStatus,
    reExecDeviceStatus
}