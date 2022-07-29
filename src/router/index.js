import { createRouter, createWebHashHistory } from "vue-router";
import HomeViews from '../components/HomeViews.vue'
import LoginViews from '../components/LoginViews.vue'
import WelcomeViews from '../components/WelcomeViews.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: '首页'
        },
        component: HomeViews,
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎体验Vue3全栈课程'
                },
                component: WelcomeViews
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登录'
        },
        component: LoginViews
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router