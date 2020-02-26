
import lightControl from "../components/lightControl/lightControl"

import main from '@/components/home'

let childRoute = [

    {
        path: 'lightControl',
        component: lightControl,
        name: 'lightControl',
        meta: {
            menuname: "lightControl"
        }
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
        redirect:'/main/lightControl'    
    },
    {
        path: '*',
        redirect:'/main/lightControl'
    }
    
]

export default route