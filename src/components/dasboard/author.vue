<template lang="pug">
    .card.p-2
        .bg-dark.imgD
        strong.text-center {{title}}
        p.text-center {{descrip}}
        .text-center
            a.btn.btn-outline-primary(:href="'#/instructores/'+title") {{btnText}}
</template>
<script>
export default {
    name:"author",
    props:['title','descrip', 'btnText']
}
</script>
<style lang="scss" scoped>
</style>
