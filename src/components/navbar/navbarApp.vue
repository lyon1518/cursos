<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#/">Cursos <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 ml-auto mr-5">
        <div class="circulo bg-gray"></div>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Héctor
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Perfil</a>
                <a class="dropdown-item" href="#">Cursos</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Cerrar sesión</a>
              </div>
            </li>
        </ul>
        <div class="circulo2 text-white">
          <span class="fa fa-search"></span>
        </div>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbarApp"
};
</script>
<style lang="scss" scoped>
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
</style>