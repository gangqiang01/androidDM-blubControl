
// import {repoServerIp, repoServerPort,  downloadServerPort, vncServerIp, vncServerPort, backendServerUrl, bspServerUrl} from '../../assets/js/config'
import {getLocalConfigJSonApi} from "../restfulapi/getLocalConfigJson"
import {apiGet, apiPut} from '../../assets/js/baseApi'
import {getSession, checkSession, setSession } from '../../assets/js/storage';

let getRepoServerApi = function(){
    return new Promise((resolve, reject) => {
        let repoServerUrl="";
        getLocalConfigJSonApi().then((res) => {
            let repoServerIp = res.data.repoServerIp;
            let repoServerPort = res.data.repoServerPort;
            if(checkSession("repoServerIp")){
                repoServerUrl = "http://"+getSession("repoServerIp")+":"+repoServerPort;
            }else{
                repoServerUrl = "http://"+repoServerIp+":"+repoServerPort;
            }
            resolve(repoServerUrl);
        }).catch((error) => {
            console.error("getRepoServerApi: "+ error);
        })
    })   
}
//get serverip:serverport/repoRootpath
let getDownloadServerUrlApi = function(){
    return new Promise((resolve, reject) => {
        let dowmloadServerUrl="";
        getLocalConfigJSonApi().then((res) => {
            let repoServerIp = res.data.repoServerIp;
            let downloadServerPort = res.data.downloadServerPort;
            if(checkSession("repoServerIp")){
                dowmloadServerUrl = "http://"+getSession("repoServerIp")+":"+downloadServerPort;
            }else{
                dowmloadServerUrl = "http://"+repoServerIp+":"+downloadServerPort;
            }
            resolve(dowmloadServerUrl);
        }).catch((error) => {
            console.error("getRepoServerApi: "+ error);
        })
    })   
}

let returnDownloadServerUrlApi = function(){
    return "http://"+getSession("repoServerIp")+":"+getSession("downloadServerPort");
}

        
let getBackendServerUrlApi = function(){
    return new Promise((resolve, reject) => {
        let backendServerUrl="";
        getLocalConfigJSonApi().then((res) => {
            if(checkSession("backendServerUrl")){
                backendServerUrl = getSession("backendServerUrl");
            }else{
                backendServerUrl = res.data.backendServerUrl;
            }
            resolve(backendServerUrl);
        }).catch((error) => {
            console.error("getBackendServerUrlApi: "+ error);
        })
    })   
}

let getVncServerIpApi = function(){
    return new Promise((resolve, reject) => {
        let vncServerIp="";
        getLocalConfigJSonApi().then((res) => {
            if(checkSession("vncServerIp")){
                vncServerIp = getSession("vncServerIp");
            }else{
                vncServerIp = res.data.vncServerIp;
            }
            resolve(vncServerIp);
        }).catch((error) => {
            console.error("getvncServerIpApi: "+ error);
        })
    })   
}

let getVncServerPortApi = function(){
    return new Promise((resolve, reject) => {
        let vncServerPort="";
        getLocalConfigJSonApi().then((res) => {
            if(checkSession("vncServerPort")){
                vncServerPort =  getSession("vncServerPort");;
            }else{
                vncServerPort = res.data.vncServerPort;
            }
            resolve(vncServerPort);
        }).catch((error) => {
            console.error("getVncServerPortApi: "+ error);
        })
    })   
}  

let getRepoRootPathApi = function(){
    return new Promise((resolve, reject) => {
        let repoRootPath="";
        getLocalConfigJSonApi().then((res) => {
            if(checkSession("vncServerPort")){
                repoRootPath =  getSession("repoRootPath");
            }else{
                repoRootPath = res.data.repoRootPath;
            }
            resolve(repoRootPath);
        }).catch((error) => {
            console.error("getRepoRootPathApi: "+ error);
        })
    })   
}

let getServerConfigApi = function(username){
    let data = {username};
    return new Promise((resolve, reject) => {
        apiGet("/api/configmgr/byusername", data).then((data) =>{
            let repoServerIp, vncServerIp, vncServerPort
            getLocalConfigJSonApi().then((res) => {
                repoServerIp = res.data.repoServerIp;
                vncServerIp = res.data.vncServerIp;
                vncServerPort = res.data.vncServerPort;
                data.data.repoip = data.data.repoip? data.data.repoip: repoServerIp;
                data.data.vncip = data.data.vncip? data.data.vncip: vncServerIp;
                data.data.vncport = data.data.vncport? data.data.vncport: vncServerPort;
                setSession("downloadServerPort", res.data.downloadServerPort)
                setSession("repoRootPath", res.data.repoRootPath)
                resolve(data);
            })
            
        }).catch((error) => {
            resolve(err.response)
        })
    })
}

let setServerConfigApi = function(username, data){
    //data={name,apprepoip,vncip,vncport,bsprepoaddress}
    data.username = username;
    
    return new Promise((resolve, reject) => {
        apiPut("/api/configmgr/byusername", data).then((data) =>{
            resolve(data);
        }).catch((error) => {
            resolve(err.response)
        })
    })
}

let getQRcodeDataApi = function(){
    return new Promise((resolve, reject) => {
        apiGet("/api/configmgr/getqrcodedata").then((data) =>{
            resolve(data);
        }).catch((error) => {
            resolve(err.response)
        })
    })
}

export {
    getRepoServerApi,
    getDownloadServerUrlApi,
    getBackendServerUrlApi,
    getVncServerIpApi,
    getVncServerPortApi,
    getServerConfigApi,
    setServerConfigApi,
    getRepoRootPathApi,
    getQRcodeDataApi,
    returnDownloadServerUrlApi
}