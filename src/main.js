import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// <!--全局指令-->
// Vue.directive('focus',{
//   inserted: function(el) {
//     el.focus()
//   }
// })
// Vue.directive('bgcolor',{
//   bind: function(el, binding) {
//     el.style.backgroundColor = binding.value.color
//   }
// })
// <!--全局过滤器-->
// Vue.filter('upper', function(val) {
//   return val.charAt(0).toUpperCase() + val.slice(1)
// })
// Vue.filter('lower', function(val) {
//   return val.charAt(0).toLowerCase() + val.slice(1)
// })
new Vue({
  render: h => h(App)
}).$mount('#app')
