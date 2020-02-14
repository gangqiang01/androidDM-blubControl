import axios from 'axios'
import Qs from "qs"
import {
    getSession,
    checkSession,
} from "./storage";

import {ip, port, protocol} from "./constant"

let cancelArr = [];
//intercept axios api 
axios.interceptors.request.use((config) => {
     // before send request
    if(config.url.indexOf("/repoapps")<0 && config.url.indexOf("/repo/")<0){
        if(config.method === "put"){
            // send msg to exec device
            config.timeout = 1000*15;
        }else if(config.method === "post"){
            config.timeout = 1000*15;
        }else{
            config.timeout = 1000*10;
        }
        config.headers.accesstoken = cookie.getCookie("androidLinkToken");
        config.cancelToken = new axios.CancelToken((cancel) => {
            cancelArr.push({cancel});
        })
    }
    return config;
 }, function (err){
    return Promise.reject(err);
 });
let url = protocol+ ip+":"+ port;

let baseURL =process.env.NODE_ENV =="development"? "": url;
axios.defaults.baseURL = baseURL;

let apiGet = function(url, object, config) {
    let geturl, fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        };
        
    }else{
        fconfig = config;
    }
    if(object){
        fconfig.params = object;
    }
    geturl = encodeURI(url);
    return new Promise((resolve, reject) => {
        axios.get(geturl, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiGet]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiGet]"+err);
                resolve(err);
            }
            
        })
    })
}

let apiPost = function(url, data, config) {
    let fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        };
        
    }else{
        fconfig = config;
        data = Qs.stringify(data)
    }
    return new Promise((resolve, reject) => {
        axios.post(url, data, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiPost]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiPost]"+err);
                resolve(err);
            }
        })
    })
}

let apiPostfile = function(url, data, config) {
    let fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    }else{
        fconfig = config;
    }
    return new Promise((resolve, reject) => {
        axios.post(url, data, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiPostfile]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiPostfile]"+err);
                resolve(err);
            }
        })
    })
}

let apiDelete = function(url) {
    return new Promise((resolve, reject) => {
        axios.delete(url).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiDelete]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiDelete]"+err);
                resolve(err);
            }
        })
    })
}

let apiPut = function(url, data, config) {
    let fconfig;
    if(config == undefined){
        fconfig = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        };
        
    }else{
        fconfig = config;
        data = Qs.stringify(data)
    }
    return new Promise((resolve, reject) => {
        axios.put(url, data, fconfig).then((response) => {
            resolve(response)
        }).catch((err) => {
            if(err.response){
                resolve(err.response);
            }else if(err.code === "ECONNABORTED" && err.message.indexOf('timeout') != -1){
                console.error("[apiPut]"+err.message);
                let msgData = {data: "request timeout"};
                resolve(msgData);
            }else{
                console.error("[apiPut]"+err);
                resolve(err);
            }
        })
    })
}

//repoapi
let repoApiGet = function(myUrl, object, token){
    let array = [], getUrl;
    if(Object.prototype.toString.call(object) === "[object Object]" && JSON.stringify(object) != "{}"){
        for(let key in object){
            array.push(key+"="+object[key]);
        }
        let parameter = array.join("&")
        getUrl = myUrl+ "?" + parameter;
    }else{
        getUrl = myUrl;
    }

    getUrl = encodeURI(getUrl);
    return new Promise((resolve, reject) => {
        axios.defaults.headers['Authorization'] = token;
        axios.get(getUrl).then((response) => {
            resolve(response)
        }).catch((err) => {
            resolve(err.response)
        });
    })
}

let repoApiPost = function(url, data){
    return new Promise(function(resolve, reject){
        axios.post(url, data).then((response) => {
            resolve(response)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}
export {
    apiGet, 
    apiPost, 
    apiPostfile, 
    apiDelete, 
    apiPut, 
    repoApiGet, 
    repoApiPost,
    cancelArr,
}
