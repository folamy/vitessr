import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
import BalmUI from 'balm-ui'; // Official Google Material Components
// import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
// import BalmUINext from 'balm-ui-next'; // Experimental Material Components

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(BalmUI); // Mandatory
  // app.use(BalmUIPlus); // Optional
  // app.use(BalmUINext); // Experimental
  return { app, router }
}
