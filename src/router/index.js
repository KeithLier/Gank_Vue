import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import CategoryPage from '@/pages/CategoryPage'
import ContentList from '@/pages/ContentList'
import MinePage from '@/pages/MinePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        requireTabBar: true,  // 是否需要显示tabbar
      }
    },
    {
      path: '/category',
      name: 'CategoryPage',
      component: CategoryPage,
      meta: {
        requireTabBar: true,  // 是否需要显示tabbar
      }
    },
    {
      path: '/contentList',
      name: 'ContentList',
      component: ContentList
    },
    {
      path: '/mine',
      name: 'MinePage',
      component: MinePage,
      meta: {
        requireTabBar: true,  // 是否需要显示tabbar
      }
    }
  ]
})
