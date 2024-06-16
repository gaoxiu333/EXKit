import DefaultLayout from '@/layouts/DefaultLayout.vue'

// 页面枚举
export enum PageEnum {
  Root = 'root',
  Home = 'home',
  NotFound = 'notFound'
}

const routes = [
  {
    path: '/',
    name: PageEnum.Root,
    component: DefaultLayout,
    redirect: { name: PageEnum.Home },
    children: [
      {
        path: '',
        name: PageEnum.Home,
        component: () => import('../views/Home/index.vue')
      }
    ]
  }
]
export default routes
