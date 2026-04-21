import { createApp } from 'vue'
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import axios from 'axios'
import router from "./router"
import store from './store'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// import clickOutside from './directives/click-ouside.js'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fas, far)

const options = {
  transition: 'Vue-Toastification__fade',
  maxToasts: 10,
  newestOnTop: true,
  position: 'bottom-right',
  timeout: false,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: false,
  rtl: false,
  bodyClassName: 'custom-class-1',
  toastClassName: 'custom-class-2',
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter(
      t => (t.content === toast.content)
    ).length !== 0) {
      // Returning false discards the toast
      return false
    }
    // You can modify the toast if you want
    return toast
  }
}

const authInterceptor = (config) => {
    const token = localStorage.getItem('token')
  
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
  
    return config
}

const errorInterceptor = async error => {
    // check if it's a server error
    if (!error.response) {
        console.error('**Network/Server error')
        console.log(error.response)
        return Promise.reject(error)
    }

    // console.log(error.response.status)
    // all the other error responses
    switch (error.response.status) {
        case 400:
            console.log('my error 400')
            console.error(error.response.status, error.message)
            break
        case 401: // authentication error, logout the user
            // console.log('my error 401')
            // console.error(error.response.status, error.message)
            await store.dispatch('logout')
            router.push('/login')
            break
        case 403:
            // console.log('my error 403')
            // console.error(error.response.status, error.message)
            await store.dispatch('logout')
            router.push('/login')
            break
        //
        // default:
        //   console.error(error.response.status, error.message)
    }
    return Promise.reject(error)
}

axios.interceptors.request.use(authInterceptor)
axios.interceptors.response.use(undefined, errorInterceptor)
//.use(ymapPlugin, settings)
const app = createApp(App)

// app.directive('click-outside', clickOutside)
app.config.globalProperties.hostReg = "http://151.0.10.245:5002"
app.use(store)
app.use(router)
app.use(Toast, options)
// app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
