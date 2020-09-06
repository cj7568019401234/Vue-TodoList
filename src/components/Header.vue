<template>
<div class="nav">
    <label class='nav__logo '>❤ TodoList</label>
    <div class="nav__add" :showModal="showModal" @click="addTodo"></div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            // 点击添加按钮，展示编辑框
            addTodo() { 
                this.showModal = true
                this.$store.dispatch('handleModal') // 展示编辑框
            } 
        }
    }
</script>
<style>
</style>
