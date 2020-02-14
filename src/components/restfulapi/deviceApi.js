import {apiGet, apiPut, apiDelete, apiPost} from "../../assets/js/baseApi";
import {deviceInfo} from "../../assets/js/lwm2mMap"

    let getDeviceApi = function(gname) {
        let url, obj = undefined;
        if(gname && gname != "All"){
            url = "/api/devicemgr/bygroupname"
            obj = {
                name: gname
            }
        }else{
            url = "/api/devicemgr";
        }
        return new Promise((resolve, reject) => {
            apiGet(url, obj).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }
    let getDeviceLikeNameApi = function(devname){
        let data = {
            name: devname
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/likename", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getOnlineDeviceCountApi = function(){

        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/getonlinedevicecount").then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getOnlineDeviceByGroupApi = function(gname){
        let data = {
           gname
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/getonlinedevicebygroup", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceLikeNameByGroupApi = function(gname, devname=""){

        let data = {
            name: devname,
            gname,
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/likenamebygname", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceDetailApi = function(agentId, sensorId){
        return new Promise((resolve, reject) => {
            let url = "/api/devicemgr/"+ agentId+ sensorId
            apiGet(url).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let editDeviceNameApi = function(agentId, deviceName){
        return new Promise((resolve, reject) => {
            let data = {
                devname: deviceName,
                target: deviceInfo.deviceName
            }
            
            apiPut("/api/devicemgr/"+agentId+"/devname", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let deleteDeviceApi = function(agentId){
        return new Promise((resolve, reject) => {
            apiDelete("/api/devicemgr/"+agentId).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let batchDeleteDeviceApi = function(agentIds){
        let agentIdJson = JSON.stringify(agentIds);
        let data = {
            endpoints: agentIdJson
        }
        
        return new Promise((resolve, reject) => {
            apiPost("/api/devicemgr/batchdelete", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let moveGroupApi = function(agentId,groupName){
        return new Promise((resolve, reject) => {
            let data = {
                endpoint: agentId,
                groupname: groupName
            }
            
            apiPut("/api/devicemgr/bygroupname", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let batchMoveGroupApi =  function(agentIds,groupName){
        let agentIdJson = JSON.stringify(agentIds);
        return new Promise((resolve, reject) => {
            let data = {
                endpoints: agentIdJson,
                groupname: groupName
            }
            
            apiPut("/api/devicemgr/batchbygroupname", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceByPageInGroupApi = function(groupname, currentpage, limit, status){

        let data = {
            groupname,
            currentpage,
            limit,
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/bypageingroup", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceByPageAndStatusInGroupApi = function(groupname, currentpage, limit, status){

        let data = {
            groupname,
            currentpage,
            limit,
            status: JSON.stringify(status)
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/bypageandstatusingroup", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceByPageAndKeywordsInGroupApi = function(groupname, keywords="", currentpage, limit){

        let data = {
            groupname,
            keywords,
            currentpage,
            limit,
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/bypageandkeywordsingroup", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceByPageApi = function(currentpage, limit){

        let data = {
            currentpage,
            limit,
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/bypage", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceByPageAndStatusApi = function(currentpage, limit, status){

        let data = {
            currentpage,
            limit,
            status: JSON.stringify(status)
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/bypageandstatus", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceByPageAndKeywordsApi = function(keywords="", currentpage, limit){

        let data = {
            keywords,
            currentpage,
            limit,
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/devicemgr/bypageandkeywords", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }




export {
    getDeviceApi,
    getDeviceDetailApi,
    editDeviceNameApi,
    deleteDeviceApi,
    moveGroupApi,
    batchDeleteDeviceApi,
    batchMoveGroupApi,
    getDeviceLikeNameApi,
    getDeviceLikeNameByGroupApi,
    getOnlineDeviceCountApi,
    getOnlineDeviceByGroupApi,
    getDeviceByPageInGroupApi,
    getDeviceByPageAndStatusInGroupApi,
    getDeviceByPageAndKeywordsInGroupApi,
    getDeviceByPageApi,
    getDeviceByPageAndStatusApi,
    getDeviceByPageAndKeywordsApi
}
