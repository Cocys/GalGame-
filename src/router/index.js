import vueRouter from 'vue-router'
import zhuYeContent from "@/pages/zhuYeContent";
import xiangQingCotent from "@/pages/xiangQingCotent";

// eslint-disable-next-line no-unused-vars
export default new vueRouter({
    routes:[
        {
            path:'/',
            component:zhuYeContent
        },
        {
            path:'/about',
            component:xiangQingCotent
        },
    ]
})