<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand logo bg-white" href="#">
        <img :src="dataNav.logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="list in dataNav.navlist">
            <a class="nav-link" :href="list.link">{{list.text}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <img class="circulo bg-gray" :src="dataNav.user.avatar">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{dataNav.user.name}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" :href="item.link" v-for="item in dataNav.user.dropdown">{{item.text}}</a>
                <!-- <a class="dropdown-item" href="#">Cursos</a> -->
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Cerrar sesión</a>
              </div>
            </li>
          </ul>
          <!--        <div class="circulo2 text-white">-->
          <!--          <span class="fa fa-search"></span>-->
          <!--        </div>-->
          <a href="#/carrito" class="buyCard text-white ml-2">
            <div class="count text-white bg-danger">{{dataNav.cantProduct}}</div>
            <div class="fa fa-shopping-cart"></div>
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbarApp",
  props:['dataNav']
};
</script>
<style lang="scss" scoped>
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
  }
  .logo>img{
    width: 100%;
  }
  .circulo{
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .circulo2{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: solid #fff 2px;
    padding: 1px 5px;
    cursor: pointer;
  }
  .buyCard{
    position: relative;
  }
  .count{
    position: absolute;
    font-size: 10px;
    right: -5px;
    top: -5px;
    padding: 0px 5px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
</style>
