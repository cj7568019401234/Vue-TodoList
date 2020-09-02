<template>
<div class="nav">
    <label class='nav__logo '>❤ TodoList</label>
    <div class="nav__add" @click="showModal"></div>
</div>
</template>
<script>
    export default {
        methods: {
            // 展示编辑框
            showModal() {
                this.$store.commit('SHOWMODAL')
            }
        }
    }
</script>
<style>

</style>
