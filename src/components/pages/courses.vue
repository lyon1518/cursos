<template lang="pug">
    .container-fluid.bg-gray.p-5
        .container
            .row
                .col-md-7
                    h1.text-center.text-primary {{this.$route.params.title}}
                    ul.nav.nav-tabs#myTab(role="tablist")
                        li.nav-item
                            a.nav-link.active#curso-tab(data-toggle="tab" href="#curso" role="tab" aria-controls="curso" aria-selected="true") Curso
                        li.nav-item
                            a.nav-link#instructores-tab(data-toggle="tab" href="#instructores" role="tab" aria-controls="instructores" aria-selected="true") Instructores
                        li.nav-item
                            a.nav-link#contenidos-tab(data-toggle="tab" href="#contenidos" role="tab" aria-controls="contenidos" aria-selected="true") Contenidos
                    div.tab-content#myTabContent.pt-4
                        .tab-pane.fade.show.active#curso(role="tabpanel" aria-labelledby="curso-tab")
                            p Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.
                            strong ¿Qué vas a aprender?
                            p Phasellus enim magna, varius et commodo ut.
                            p Sed consequat justo non mauris pretium at tempor justo.
                            p Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo
                            p Phasellus enim magna, varius et commodo ut.
                            p Phasellus enim magna, varius et commodo ut.
                            p Sed consequat justo non mauris pretium at tempor justo.
                            p Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo
                            p Phasellus enim magna, varius et commodo ut.
                        .tab-pane.fade#instructores(role="tabpanel" aria-labelledby="instructores-tab")
                            .row
                                .col-md-6.mt-4(v-for="x in 4")
                                    author(title="Title" descrip="Phasellus enim magna, varius et commodo ut." btnText="Detalles")
                        .tab-pane.fade#contenidos(role="tabpanel" aria-labelledby="contenidos-tab")
                            div.mt-4(v-for="x in 3")
                                listcourses(:title="'TITULO '+x" :course="coursesList")
                .col-md-5
                    buyCourses.stiky(times="6 horas y 30 minutos" price="999,99" descrip="Phasellus enim magna, varius et commodo ut.")
</template>
<script>
import author from "../dasboard/author";
import listcourses from "../dasboard/listcourses";
import buyCourses from "../dasboard/buyCourses";
export default {
    name:"courses",
    components:{
        author,
        listcourses,
        buyCourses
    },
    data(){
        return{
            coursesList:[
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"},
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"},
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"},
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>