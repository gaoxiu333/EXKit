const DefaultLayout = () => import('@/layouts/default/index.vue')
export default {
  path: '/about',
  component: DefaultLayout,
  redirect: { name: 'About' },
  children: [
    {
      path: '',
      name: 'About',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: '关于'
      }
    }
  ]
}
