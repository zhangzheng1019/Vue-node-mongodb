import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{//动态路由
      path: '/goods/:goodsId/user/:name',
      name: 'GoodsList',
      component: GoodsList
    },{//嵌套路由
      path: '/goodsChild',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          path:'title',
          name:'title',
          component:Title,
        },{
          path:'img',
          name:'img',
          component:Image,
        }
      ]
    },{
      path: '/cart/:cartId',
      name: 'Cart',
      component: Cart,
    }

  ]
})
