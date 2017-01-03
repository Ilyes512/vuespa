var Vue = require('vue');

// Register Axios with Vue so we can use it with vm.$http
Vue.prototype.$http = require('axios');;

