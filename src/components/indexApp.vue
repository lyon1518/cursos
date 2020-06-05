<template lang="pug">
  div
    navbarApp
    home(v-if="this.$route.params.title == undefined")
    courses(v-if="this.$route.params.title != undefined && this.$route.params.title != 'carrito' && this.$route.params.title != 'compra'")
    card(v-if="this.$route.params.title == 'carrito'")
    buy(v-if="this.$route.params.title == 'compra'")
    foter
</template>
<script>
import navbarApp from "./navbar/navbarApp";
import foter from "./fotterr/foter";
import home from "./pages/home";
import courses from "./pages/courses";
import card from "./pages/card";
import buy from "./pages/buy";
export default {
  name:"indexApp",
  components:{
    navbarApp,
    home,
    courses,
    card,
    buy,
    foter
  }
}
</script>
<style lang="scss" scoped>

</style>