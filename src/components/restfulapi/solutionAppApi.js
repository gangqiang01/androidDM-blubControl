import {apiGet, apiPut, apiDelete, apiPost} from '../../assets/js/baseApi'
/**
 * @api {get} /api/solutionApp/${endpoint}/40007/0/27600 get solution app value
 * @apiVersion 0.1.0
 * @apiName getSolutionAppValue
 * @apiGroup solutionApp
 * @apiDescription get value of solution app
 * @apiParam {String} endpoint endpoint id of device
 * @apiParam {String} funcid defined by solution app
 * @apiParam {String} appname solution app package name
 * @apiParam {String} param data to send to solution app
 * @apiSuccess {String}  status  return CONTENT.
 * @apiSuccessExample {json} Success-Response:
                   { status: "CONTENT",content: "" }
 */

let getSolutionAppValueApi = function(endpoint, sensorId, param){
    return new Promise((resolve, reject) => {
        let url = "/api/solutionApp/"+ endpoint+ sensorId
        apiGet(url, param).then((data) => {
            resolve(data);
        }).catch((error) => {
            resolve(error.response);
        })
    })
}
/**
 * @api {put} /api/solutionApp/${endpoint}/40007/0/27601 set solution app value
 * @apiVersion 0.1.0
 * @apiName setSolutionAppValue
 * @apiGroup solutionApp
 * @apiDescription set value of solution app
 * @apiParam {String} endpoint endpoint id of device
 * @apiParam {String} id resource id of lwm2m value example 5
 * @apiParam {String} value data to send to solution app,format:{
                    appname: this.pkgname,
                    funcid: this.funcIds.setLedColor,
                    param: this.bulbColor
                }
  * @apiSuccess {String}  status  return CHANGED.
  * @apiSuccessExample {json} Success-Response:
                   { status: "CHANGED"}
 */
let setSolutionAppValueApi = function(endpoint, sensorId, val=""){
    return new Promise((resolve, reject) => {
        let url = "/api/solutionApp/"+ endpoint+ sensorId; 
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
/**
 * @api {post} /api/solutionApp/redeploy/40007/0/27601 reset solution app value
 * @apiVersion 0.1.0
 * @apiName reSetSolutionAppValue
 * @apiGroup solutionApp
 * @apiDescription get value of solution app
 * @apiParam {String} funcid defined by solution app
 * @apiParam {String} taskname the name of reset 
 * @apiParam {String} endpoint endpoint id of device
 * @apiParam {String} appname solution app package name
 * @apiParam {String} param data to send to solution app
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
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
/**
 * @api {post} /api/solutionApp/batchdeploy/40007/0/27601 Read batch set solution app value
 * @apiVersion 0.1.0
 * @apiName batchSetSolutionAppValue
 * @apiGroup solutionApp
 * @apiDescription get value of solution app
 * @apiParam {String} taskname the name of batch set solution app value 
 * @apiParam {String} endpoint endpoint id of device
 * @apiParam {String} funcid defined by solution app
 * @apiParam {String} appname solution app package name
 * @apiParam {String} value data to send to solution app
 * @apiSuccess {String}  status  return CHANGED.
 * @apiSuccessExample {json} Success-Response:
                { status: "CHANGED"}
 */
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