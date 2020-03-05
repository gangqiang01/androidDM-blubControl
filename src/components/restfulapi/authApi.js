import {apiGet, apiPost} from "../../assets/js/baseApi";

/**
 * @api {post} /login 用户登录
 * @apiVersion 0.1.0
 * @apiName 用户登录
 * @apiGroup 登录
 * @apiDescription 用户登录
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiSuccess {String}  status  return CONTENT.
 * @apiSuccessExample {json} Success-Response:
                   { status: "CHANGED",token: "" }
 */
let loginApi = function(username, password){
    return new Promise((resolve, reject) => {
        let data = {}
        data.username = username
        data.password = password
        apiPost('/login', data).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}

export {
    loginApi,
}