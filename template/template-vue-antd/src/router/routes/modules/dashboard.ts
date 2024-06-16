const DefaultLayout = () => import('@/layouts/default/index.vue')

export default {
  path: '/dashboard',
  component: DefaultLayout,
  redirect: { name: 'Dashboard' },
  children: [
    {
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
}
