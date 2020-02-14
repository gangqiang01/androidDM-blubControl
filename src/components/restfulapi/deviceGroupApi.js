import {apiGet, apiPut, apiDelete, apiPost} from "../../assets/js/baseApi";

    let getDeviceGroupApi = function() {
        return new Promise((resolve, reject) => {
            apiGet("/api/groupmgr/all").then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let getDeviceGroupByGnameApi = function(gname) {
        let data = {
            groupname: gname
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/groupmgr/byname", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }
    let getGroupByDevidApi = function(endpoint){
        let data = {
            endpoint 
        }
        return new Promise((resolve, reject) => {
            apiGet("/api/groupmgr/getGroupByDevId", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let editDeviceGroupNameApi = function(oldGroupName, newGroupName, description){
        return new Promise((resolve, reject) => {
            let data = {
                oldname: oldGroupName,
                name: newGroupName,
                desc: description
            }
            
            apiPut("/api/groupmgr/byname", data).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let deleteDeviceGroupApi = function(groupName){
        return new Promise((resolve, reject) => {
            apiDelete("/api/groupmgr/"+groupName).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }

    let addDeviceGroupApi = function(groupName, description, userName){
        return new Promise((resolve, reject) => {
            let obj = {
                groupname: groupName,
                username: userName,
                desc: description
            }
            
            apiPost("/api/groupmgr", obj).then((data) => {
                resolve(data);
            }).catch((err) => {
                resolve(err.response);
            })
        })
    }


export {
    getDeviceGroupApi,
    editDeviceGroupNameApi,
    addDeviceGroupApi,
    deleteDeviceGroupApi,
    getDeviceGroupByGnameApi,
    getGroupByDevidApi
}


