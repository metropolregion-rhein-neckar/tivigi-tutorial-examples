import Vue from 'vue'
import App from './components/App/App'

import "tivigi/src/util/vueFilters"
import 'tivigi/src/directives/v-tooltip'

// Import global app-specific styles:
import "./globals.scss"


// Enable tab focus outline (accessibility):
import { tabfocusoutline } from 'tivigi/src/util/tabfocusoutline'
tabfocusoutline()


// Instantiate Vue root component:
new Vue({
    
    render: h => h(App)
}).$mount('#app')
