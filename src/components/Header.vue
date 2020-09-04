<template>
<div class="nav">
    <label class='nav__logo '>❤ TodoList</label>
    <div class="nav__add" @click="showModal"></div>
</div>
</template>
<script>
    export default {
        methods: {
            showModal() { this.$store.commit('HANDLEMODAL') } // 展示编辑框
        }
    }
</script>
<style>
</style>
