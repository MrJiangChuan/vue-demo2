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
new Vue({
  render: h => h(App)
}).$mount('#app')
