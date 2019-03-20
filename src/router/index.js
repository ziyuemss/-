import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Borrow from '@/pages/Borrow/Borrow'
import Discounts from '@/pages/Discounts/Discounts'
import Member from '@/pages/Member/Member'
import Savemoney from '@/pages/Savemoney/Savemoney'
import Makemoney from '@/pages/Makemoney/Makemoney'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/discounts',
      name: 'Discounts',
      component: Discounts
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/savemoney',
      name: 'Savemoney',
      component: Savemoney
    },
    {
      path: '/makemoney',
      name: 'Makemoney',
      component: Makemoney
    }
  ]
})
