
import lightControl from "../components/lightControl/lightControl"
import login from "../components/account/login"

import main from '@/components/home'

let childRoute = [

    {
        path: 'lightControl',
        component: lightControl,
        name: 'lightControl',
        meta: {
            menuname: "lightControl"
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
        component: login,
        name: 'login',
        beforeEnter: (to, from, next) => {
            _g.doBeforeLoginout();
            next();
        }
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        beforeEnter: (to, from, next) => {
            if(cookie.checkCookie("lightControlToken")){
                next()
            }else{
                _g.doBeforeLoginout();
                next("/")
            }
        },
        children: childRoute,
        redirect:'/main/lightControl'    
    },
    {
        path: '*',
        redirect:'/'
    }
    
]

export default route
