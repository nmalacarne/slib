export default [
  {
    path: '/',
    name: 'main',
    component: require('components/MainView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
