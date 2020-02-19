
import {apiGet} from '../../assets/js/baseApi'

let getLocalConfigJSonApi = function(){
    return new Promise((resolve, reject) => {
        apiGet("static/json/config.json").then((data) =>{
            resolve(data);
        }).catch((error) => {
            resolve(err.response)
        })
    })
}

export {
    getLocalConfigJSonApi
}