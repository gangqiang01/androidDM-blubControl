
import bulbControl from "../components/bulbControl/bulbControl"

import main from '@/components/home'

let childRoute = [

    {
        path: 'bulbControl',
        component: bulbControl,
        name: 'bulbControl',
        meta: {
            menuname: "bulbControl"
        }
    },
    {
        path: '*',
        redirect:'bulbControl'
    }
]
let route = [

    {
        path: '/',
        name: 'main',
        component: main,
        children: childRoute,
        redirect:'/main/bulbControl'    
    },
    {
        path: '*',
        redirect:'/main/bulbControl'
    }
    
]

export default route