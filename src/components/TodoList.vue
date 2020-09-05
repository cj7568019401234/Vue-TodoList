<template>
  <div class="wrap">
    <div class="todolist">
      <div class="collapse-panel" @click="handleCollapseEvent('todo')">
        <div class="center"><div class="spread" :class="{'collapse-rotate' : !showTodo}"></div>待完成</div>
        <div class="center"><div class="todo-icon"></div>{{getTodo.length}}</div>
      </div>
      <div v-if="showTodo">
          <div v-for="item in getTodo" :key="item.id" class="item-container list" >
            <div class="center item-left">
              <input type="checkbox"  @click="toggleTodo(item.id)"/>
              <div class="item__main" @click="editTodo(item.id)">
                <label class="item__main__text">{{item.text}}</label>
                <label v-if="item.endDate" class="item__main__date">{{item.endDate}}</label>
                <label v-if="item.endTime" class="item__main__time">{{item.endTime}}</label>
              </div>
            </div>
            <div class="del-icon" @click="deleteTodo(item.id)"></div>
          </div>
      </div>
      <div v-if="!getTodo.length && showTodo" class="empty center list--todo">
        <div class="box-icon"></div>
        <label>你还没有添加任务呢~</label>
      </div>
    </div>
    <div class="donelist">
      <div class="collapse-panel collapse-panel--done" :class="{'list--done' : !showDone}" @click="handleCollapseEvent('done')"  data-type="done">
         <div class="center"><div class="spread" :class="{ 'collapse-rotate' : !showDone}"></div>已完成</div>
         <div class="center"><div class="done-icon"></div>{{getDone.length}}</div>
      </div>
      <div v-if="showDone">
        <div v-for="item in getDone" :key="item.id"  class="item-container list">
            <div  class="center item-left"  >
              <input type="checkbox" :checked="true" @click="toggleTodo(item.id)"/>
              <div class="item__main"  @click="editTodo(item.id)">
                <label class="item__main__text">{{item.text}}</label>
                <label v-if="item.endDate" class="end-text item__main__date">{{item.endDate}}</label>
                <label v-if="item.endTime" class="end-text item__main__time">{{item.endTime}}</label>
              </div>
            </div>
            <div class="del-icon" @click="deleteTodo(item.id)"></div>
          </div>
        <div v-if="!getDone.length && showDone" class="empty center list--done">
          <div class="box-icon"></div>
          <label>空空如也~</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState({
      // 获取未完成的任务
      getTodo() {
        return this.$store.getters.getTodo
      },
      // 获取已完成的任务
      getDone() {
        return this.$store.getters.getDone
      },
      showDone: state => state.event.showDone, // 是否展示已完成任务列表
      showTodo: state => state.event.showTodo, // 是否展示未完成任务列表
      showModal: state => state.event.showModal // 是否展示弹窗
    }),
    methods: {
        // 处理展开或者收缩任务列表
        handleCollapseEvent(type) {
          this.$store.commit('COLLAPSE', type)
        },
        // 扭转任务状态
        toggleTodo(id) {
          this.$store.dispatch('toggleTodo', id)
        },
        // 编辑任务
        editTodo(id) {
          this.$store.commit('GETTODO', id)
          this.$store.dispatch('handleModal')
        },
        // 删除任务
        deleteTodo(id) {
          this.$store.dispatch('deleteTodo', id)
        }
    }
  }
</script>
