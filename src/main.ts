import { createSSRApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter } from './router';

export function createApp() {
  const app = createSSRApp(App)
  const store = createPinia()
  app.use(store)
  const router = createRouter()
  app.use(router)
  return { app, store, router };
}
