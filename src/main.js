import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPhone,
  faBars,
  faPlus,
  faDollarSign,
  faThumbtack,
  faUserTie,
  faTools,
  faArrowLeft
 } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faSmile, faMoneyBillAlt, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import { Settings, DateTime } from 'luxon'

Settings.defaultLocale = 'pt-br'
library.add([
  faSearch,
  faPlus,
  faPhone,
  faBars,
  faDollarSign,
  faCalendarAlt,
  faThumbtack,
  faSmile,
  faUserTie,
  faTools,
  faMoneyBillAlt,
  faAddressCard,
  faArrowLeft
])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.component('datetime', Datetime);
const moment = require('moment')
import 'moment/locale/pt-br'
moment.locale('pt-br')
Vue.use(require('vue-moment'), {
  moment
});


Vue.prototype.$dateTimeNow = DateTime.local().toString()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
