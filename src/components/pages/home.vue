<template lang="pug">
    .container-fluid.sp
        banner.mb-4(title="Cursos" descrip="Description de prueba para nuevos cursos del banner" color="primary" btn-text="Ver más")
        h1.mt-4.text-center.text-primary Destacados
        .container.mb-4.mt-4.pb-4
            .row
                .col-md-6(v-for="x in 2" :key="'destacados'+x")
                    featured(sizeImg="6" :titleCard="'TITULO '+x" hors="18:00" descrip="Description de prueba para destacados" textBtn="Ver más" price="1000")
        .container-fluid.sp.bg-gray.pt-4
            h1.mt-4.text-center.text-primary Nuestros cursos más populares
            .container.mb-4.mt-4
                .row
                    .col-md-3.mt-4(v-for="data in dataApi" :keys="'populares'+data.id")
                        featured(sizeImg="12" :titleCard="data.first_name+' '+data.last_name" hors="18:00" :descrip="data.email" textBtn="Ver más" price="1000" :img="data.avatar")
</template>
<script>
import banner from "../dasboard/banner";
import featured from "../dasboard/featured";
export default {
    name:"home",
    components:{
        banner,
        featured
    },
    data(){
        return{
            dataApi:{}
        }
    },
    mounted(){
        this.$http.get('api/users?page=2')
        .then((res)=>{
            setTimeout(() => {
                console.log(res)
                this.dataApi = res.data.data
                console.log(this.dataApi)
            }, 1000);
        })
    }
}
</script>
<style lang="scss" scoped>

</style>