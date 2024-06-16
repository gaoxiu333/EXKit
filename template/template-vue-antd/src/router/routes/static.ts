import BaseLayout from '@/layouts/BaseLayout.vue'

/** root route */
const root = {
  path: '/',
  name: 'Root',
  redirect: { name: 'Dashboard' },
  meta: { title: 'Root' }
}

/** login */
const login = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: { title: '登录' }
}

/** 404 */
export const notFound = {
  path: '/404',
  name: 'NotFound',
  component: () => import('@/views/error-page/404.vue'),
  meta: { title: '404' }
}

export const staticRoutes = [
  root,
  login

  // {
  //   path: '/:path(.*)*',
  //   name: 'ErrorPage',
  //   component: BaseLayout,
  //   meta: { title: 'ErrorPage', hideBreadcrumb: true, hideMenu: true },
  //   children: [
  //     {
  //       path: '/:path(.*)*',
  //       name: 'ErrorPage',
  //       component: BaseLayout,
  //       meta: { title: 'ErrorPage', hideBreadcrumb: true, hideMenu: true }
  //     }
  //   ]
  // }
]
