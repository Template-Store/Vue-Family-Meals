// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Component from 'vue-class-component'
import './directives'
// import { LoadingIndicator } from './components/loading-indicator/index'
import './styles/main.scss'
// 样式单独引入
import 'element-ui/lib/theme-default/index.css'

/**
 * 此处为入口文件
 */

/* eslint-disable no-new */

import store from './store/store'

@Component({
  store,
  template: '<App/>',
  components: { '<div></div>' }
})
export class AppView extends Vue {
  name = 'appView'
}

export default new AppView({
  el: '#app'
})
