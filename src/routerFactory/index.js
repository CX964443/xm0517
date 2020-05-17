import Loadable from '@@/Loadable'

const login = Loadable(() => import('@/pages/purple/login/loginPage'))
const purpleMain = Loadable(() => import('@/pages/purple/mainInterface/main.jsx'))
const purChart = Loadable(() => import('@/pages/purple/mainInterface/chart/chart.jsx'))
const purTable = Loadable(() => import('@/pages/purple/mainInterface/table/table.jsx'))
const formPage = Loadable(() => import('@/pages/purple/mainInterface/form/formPage.jsx'))
const samplePages = Loadable(() => import('@/pages/purple/mainInterface/samplePages/samplePages.jsx'))

const router = [
    {
        path:"/purple",
        component: purpleMain,
        key:1,
        children:[
            {
                path:"/purple/table",
                component: purTable,
                key:11,
                name:"search"
            },
            {
                path:"/purple/chart",
                component: purChart,
                key:12,
                name:"home"
            },
            {
                path:"/purple/formPage",
                component: formPage,
                key:13,
                name:"home"
            },
            {
                path:"/purple/samplePages",
                component: samplePages,
                key:14,
                name:"home"
            },
            {
                path:"/purple",
                redirect:"/purple/chart"
            }
        ]
    },{
        path:"/login/:state",
        component: login,
        key:2,
        name:"login"
    },
    {
        path:"/",
        redirect:"/login/SignIn"
    }
]

export default router