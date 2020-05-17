import React from 'react'
import Loadable from '@@/Loadable'

const App = Loadable(() => import('@/pages/app'))
const Home = Loadable(() => import('@/pages/home'))
const Detail = Loadable(() => import('@/pages/detail'))
const Lx = Loadable(() => import('@/pages/lx'))
const List = Loadable(() => import('@/pages/list'))

const Login = Loadable(() => import('@/pages/purple/login/loginPage'))
const purpleMain = Loadable(() => import('@/pages/purple/mainInterface'))

export {
  App,
  Home,
  Login,
  Detail,
  Lx,
  List,
  purpleMain,
}
