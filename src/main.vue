<template>
  <h2>Hello World</h2>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import App from './root/root.component.vue'

/**
 * 此处为入口文件
 */
 

@Component
export class AppView extends Vue {
  name = 'appView'
}

export default new AppView({
  el: '#app',
  render(){
    return <div>222</div>
  }
})
</script>
