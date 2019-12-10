import AUTH from '../services/auth'
let beforeEnter = (to, from, next) => {
    AUTH.currentPath = to.path
    
    if (to.meta.tokenRequired === true) {
        if (to.path === '/') {
            next({ path: '/login' })
        } else if (AUTH.user != null) {
            next()
        }else{
            next({path: '/login'})
        }
    } else {
        next()
    }
    // if (sessionStorage.getItem("Password") != null) {
    //     if (to.path === '/' || to.path === '/') {
    //         next({ path: '/login' })
    //     } else if (to.meta.tokenRequired === true) {
    //         next({ path: '/' })
    //     } else {
    //         next()
    //     }
    // } else {
    //     next()
    // }

}
var devroutes = []
let app = require('router/app.js')
devroutes = devroutes.concat(app.default.routes)
for (let x = 0; x < devroutes.length; x++) {
    devroutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        //     path: '/',
        //     name: 'Header',
        //     component: resolve => require([''], resolve),
        //     beforeEnter:  beforeEnter
        // },
        // {
        path: '/',
        name: 'login',
        component: resolve => require(['components/Login.vue'], resolve),
        beforeEnter: beforeEnter
    }
]
routes = routes.concat(devroutes)
export default {
    routes: routes
}