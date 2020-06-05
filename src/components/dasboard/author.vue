<template lang="pug">
    .card.p-2
        .bg-dark.imgD
        strong.text-center {{title}}
        p.text-center {{descrip}}
        .text-center
            .btn.btn-outline-primary {{btnText}}
</template>
<script>
export default {
    name:"author",
    props:['title','descrip', 'btnText']
}
</script>
<style lang="scss" scoped>
</style>