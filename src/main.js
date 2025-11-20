import { createApp } from 'vue'
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import axios from 'axios'
import router from "./router"
import store from './store'

// import clickOutside from './directives/click-ouside.js'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fas, far)

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

    console.log(error.response.status)
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

app.config.globalProperties.$hostname = 'http://151.0.10.245:5002'
// app.directive('click-outside', clickOutside)

app.use(store)
app.use(router)
// app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
