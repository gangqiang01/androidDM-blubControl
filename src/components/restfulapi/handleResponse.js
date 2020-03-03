import swal from 'sweetalert'
import router from '../../router'
import {ip, port, protocol} from "../../assets/js/constant"

let handleResponse = function(res, cb, isLoading = true){
    if(isLoading){
        _g.closeGlobalLoading();
    }
    if(res === undefined){
        console.error("data is undefined")
        return;
    }
    if(res.status != 401){
        cb(res.data)
    }else{
        if(typeof(errcb) == 'function'){
            errcb()
        }
        handleError(res)
    }
};
let handleError = function(res) {
    switch (res.status) {
        case 401:
        
            swal("","Login expired","error").then((val) =>{
                if(val){
                    let url = protocol+ ip+":"+ port;
                    window.location.href = url;
                }
            });
            
            break
        // case 400:
        default :
            console.log(res)
    }
}
export default handleResponse;