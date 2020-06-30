import React from 'react';
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
const Home1 = React.lazy(() => import('../pages/home/home1'))
const Home2 = React.lazy(() => import('../pages/home/home2'))
const Home3 = React.lazy(() => import('../pages/home/home3'))
const User1 = React.lazy(() => import('../pages/user/user1'))
const User2 = React.lazy(() => import('../pages/user/user2'))
const Activity = React.lazy(() => import('../pages/activity/activity'))


let router = [
  {
    path:'/dashboard',
    exact:true,
    component: Dashboard
  },
  {
    path:'/login',
    component: Login
  },

  {
    path:'/home/home1',
    component: Home1
  },
  {
    path:'/home/home2',
    component: Home2
  },
  {
    path:'/home/home3',
    component: Home3
  },
  {
    path:'/user/user1',
    component: User1
  },
  {
    path:'/user/user2',
    component: User2
  },
  {
    path:'/activity',
    component: Activity
  }
]
export default router