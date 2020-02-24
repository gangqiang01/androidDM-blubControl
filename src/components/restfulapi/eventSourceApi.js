import { getBackendServerUrlApi } from "../restfulapi/serverConfigApi"
import {ip, port, protocol} from "../../assets/js/constant"

let serverUrl = protocol+ ip+":"+ port;
let eventSource = null, singleEventSource = null;
let eventSourceConn = function(){
    return new Promise((resolve, reject) => {
        
        let ESServerUrl = serverUrl+"/event"
        if(eventSource === null){
            eventSource = new EventSource(ESServerUrl);
            resolve(true);
        }else{
            resolve(false);
        }
        eventSource.onopen=function(){
            console.log("eventSource open")
        }
        eventSource.onerror = function(){
            eventSource = null;
            console.error("eventSource Error")
        }
    
        
    })
    
}

let eventSourceClose = function(){
    if(eventSource != null){
        console.log("eventSource close")
        eventSource.close();
        eventSource = null;
    }
}

let handleMsg = function(type, cb, mode){
    let dcb = function(msg){
        window.setTimeout(() => {
            cb(msg.type, msg.data);
        }, 1000)
    }
    eventSource.addEventListener(type, dcb, mode);
}

let singleEventSourceConn = function(agentId){
    return new Promise((resolve, reject) => {
        
        let ESServerUrl = serverUrl+"/event"
        if(agentId != undefined){
            let singleServerUrl = ESServerUrl+"?ep="+agentId;
            
            if(singleEventSource != null){
                let preAgentId =  singleEventSource.url.split("=")[1];
                if(preAgentId === agentId){
                    resolve(false);
                }
            }
            
            singleEventSource = new EventSource(singleServerUrl); 
            resolve(true); 
        }else{
            resolve(false);
            console.error("paramater is undefined")
        }
    
        singleEventSource.onopen=function(){
            console.log("slingleEventSource open")
        }
        singleEventSource.onerror = function(){
            eventSource = null;
            console.error("slingleEventSource Error")
        }
        
    })
}

let singleEventSourceClose = function(){
    if(singleEventSource != null){
        console.log("singleEventSource close")
        singleEventSource.close();
        singleEventSource = null;
    }
}

let singleHandleMsg = function(type, cb, mode){
    let dcb = function(msg){
        window.setTimeout(() => {
            cb(msg.type, msg.data);
        }, 1000)
    }
    singleEventSource.addEventListener(type, dcb, mode);
}


export{
    eventSourceConn,
    handleMsg,
    singleEventSourceConn,
    singleHandleMsg,
    singleEventSourceClose,
    eventSourceClose
}
