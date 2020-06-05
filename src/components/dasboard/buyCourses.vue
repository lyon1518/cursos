<template lang="pug">
    .card.p-3
        .imgD.bg-dark
        .times.text-center.mt-2
            .span.fa.fa-clock
            span {{times}}
        h2.text-center.mt-2 #[strong ${{price}}]
        p.text-center.mt-2 {{descrip}}
        hr
        a.btn.btn-success.btn-lg.btn-block(href="#/carrito") Agregar al carrito
            .fa.fa-angle-right.ml-3
        a.btn.btn-outline-primary.btn-lg.btn-block.mt-4(href="#/compra") Comprar este curso
            .fa.fa-angle-right.ml-3
</template>
<script>
export default {
    name:"buyCourses",
    props:['times', 'price', 'descrip']
}
</script>
<style lang="scss" scoped>

</style>