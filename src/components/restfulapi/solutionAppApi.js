import {apiGet, apiPut, apiDelete, apiPost} from '../../assets/js/baseApi'
/**
 * @api {get} /api/solutionApp/${endpoint}/40007/0/27600 获得设备的信息
 * @apiVersion 0.1.0
 * @apiName 获得设备的信息
 * @apiGroup 操作设备
 * @apiDescription 获得设备的信息
 * @apiParam {String} endpoint 设备的ID
 * @apiParam {String} funcid 设备中解决方案app中制定的方法ID
 * @apiParam {String} appname 设备中解决方案APP的包名
 * @apiParam {String} param 发送给设备中解决方案APP的数据
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
 * @api {put} /api/solutionApp/${endpoint}/40007/0/27601 设置设备
 * @apiVersion 0.1.0
 * @apiName 设置设备
 * @apiGroup 操作设备
 * @apiDescription 设置设备
 * @apiParam {String} endpoint 设备的ID
 * @apiParam {String} id resource id of lwm2m value example 5
 * @apiParam {String} value 发送给设备中解决方案APP的数据,format:{
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
 * @api {post} /api/solutionApp/redeploy/40007/0/27601 重新设置设备
 * @apiVersion 0.1.0
 * @apiName 重新设置设备
 * @apiGroup 操作设备
 * @apiDescription 重新设置设备
 * @apiParam {String} funcid 设备中解决方案app中制定的方法ID
 * @apiParam {String} taskname 任务名称 
 * @apiParam {String} endpoint 设备的ID
 * @apiParam {String} appname 设备中解决方案APP的包名
 * @apiParam {String} param 发送给设备中解决方案APP的数据
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
 * @api {post} /api/solutionApp/batchdeploy/40007/0/27601 批量设置设备
 * @apiVersion 0.1.0
 * @apiName 批量设置设备
 * @apiGroup 操作设备
 * @apiDescription 批量设置设备
 * @apiParam {String} taskname 任务名称 
 * @apiParam {String} groupname 设备组的名称
 * @apiParam {String} funcid 设备中解决方案app中制定的方法ID
 * @apiParam {String} appname 设备中解决方案APP的包名
 * @apiParam {String} value 发送给设备中解决方案APP的数据
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