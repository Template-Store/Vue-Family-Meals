<template>
  <span>Hello world</span>
</template>
>
<script>
import { Vue, Provide, Component } from 'vue-property-decorator'

import * as Styles from './root.component.styl'

@Component({})
export class App extends Vue {
  @Provide() data = {}
}
</script>
