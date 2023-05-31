import { createApp } from './main';
const { app, store, router } = createApp();
let storeInitialState = (window as any).__INITIAL_STATE__;
if (storeInitialState) {
  storeInitialState = JSON.parse(JSON.stringify(storeInitialState));
  store.state.value = storeInitialState;
}

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')

  console.log('hydrated')
})