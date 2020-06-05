<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import '@/assets/styles/styles.scss'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
// import loader from './components/dashboard/loader'

dom.watch()
library.add(faSpinner, faAlignLeft)
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/styles/styles';

</style>
