// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TagsPage from './pages/TagsPage.vue'
import TagPage from './pages/TagPage.vue'
import ReadmesPage from './pages/ReadmesPage.vue'
import SitesPage from './pages/SitesPage.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('TagsPage', TagsPage)
    app.component('TagPage', TagPage)
    app.component('ReadmesPage', ReadmesPage)
    app.component('SitesPage', SitesPage)
  }
} satisfies Theme
