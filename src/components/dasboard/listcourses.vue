<template lang="pug">
    .container
        h1 #[strong {{title}}]
        .row.mt-2(v-for="cour in course")
            .col-md-8.centrar
                span.fa.fa-play-circle
                span.ml-2 {{cour.text}}
            .col-md-3.centrar
                span.fa.fa-clock
                span.ml-2 {{cour.hors}}
</template>
<script>
export default {
    name:"listcourses",
    props:['title', 'course', 'hors']
}
</script>
<style lang="scss" scoped>

</style>