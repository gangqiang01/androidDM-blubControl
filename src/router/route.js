
import lightControl from "../components/lightControl/lightControl"

import main from '@/components/home'

let childRoute = [

    {
        path: 'lightControl',
        component: lightControl,
        name: 'lightControl',
        meta: {
            menuname: "lightControl"
        },
        beforeEnter: (to, from, next) => {
            let transportData = _g.getUrlParams();
            let token = transportData.tn;
            if(token){
                window.sessionStorage.setItem("androidDM_tn", token);
                let url = window.location.href.slice(0, window.location.href.indexOf("?"));
                window.location.href = url;
            }
           
            next();
        },
    },
    {
        path: '*',
        redirect:'lightControl'
    }
]
let route = [

    {
        path: '/',
        name: 'main',
        component: main,
        children: childRoute,
        redirect:'/main/lightControl',   
    },
    {
        path: '*',
        redirect:'/main/lightControl'
    }
    
]

export default route