// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

/**
 * 入口js，创建Vue实例
 * @type {boolean}
 */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
