import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView, 
  PartnersView,
  NewsView,
  NewsDetailView,
  DocumentsView,
  AchievementsView,
  AchievementsDetailView,
  PriceView,
  BAMView,
  CoursesView,
} from '@/views'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: HomeView,
    },
    {
      path:'/partners',
      name:'partners',
      component: PartnersView,
    },
    {
      path:'/news',
      name:'news',
      component: NewsView,
    },
    {
      path:'/news/News-detail/:id',
      name:'news-details',
      component: NewsDetailView,
    },
    {
      path:'/documents',
      name:'documents',
      component: DocumentsView,
    },
    {
      path:'/achievements',
      name:'achievements',
      component: AchievementsView,
    },
    {
      path:'/achievements/achievements-detail/:id',
      name:'achievements-details',
      component: AchievementsDetailView,
    },
    {
      path:'/price',
      name:'price',
      component: PriceView,
    },
    {
      path:'/bams',
      name:'bams',
      component: BAMView,
    },
    {
      path:'/courses',
      name:'courses',
      component: CoursesView,
    },
  ]
})

export default router
