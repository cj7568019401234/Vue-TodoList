<template>
  <div class="wrap">
    <div class="todolist">
      <div class="collapse-panel" bindtap="handleCollapseEvent">
        <div class="center"><div class="spread" :class="{'collapse-rotate' : !showTodo}"></div>待完成</div>
        <div class="center"><div class="todo-icon"></div>{{getTodo.length}}</div>
      </div>
      <div v-if="showTodo">
          <div v-for="item in getTodo" :key="item.id" class="item-container list" >
            <div class="center item-left">
              <input type="checkbox"  @click="toggleTodo(item.id)"/>
              <div class="item__main" @click="editTodo(item.id)">
                <label class="item__main__text">{{item.value}}</label>
                <label v-if="item.endDate" class="item__main__date">{{item.endDate}}</label>
                <label v-if="item.endTime" class="item__main__time">{{item.endTime}}</label>
              </div>
            </div>
            <div class="del-icon" catchtap="bindDelete" :id="item.id"></div>
          </div>
      </div>
      <div v-if="!getTodo.length && todo.isShowed" class="empty center list--todo">
        <div class="box-icon"></div>
        <label>你还没有添加任务呢~</label>
      </div>
    </div>
    <div class="donelist">
      <div class="collapse-panel collapse-panel--done" :class="{'list--done' : !showDone}" @click="handleCollapseEvent"  data-type="done">
         <div class="center"><div class="spread" :class="{ 'collapse-rotate' : !showDone}"></div>已完成</div>
         <div class="center"><div class="done-icon"></div>{{getDone.length}}</div>
      </div>
      <div v-if="showDone">
        <div v-for="item in getDone" :key="item.id"  class="item-container list">
            <div  class="center item-left"  >
              <input type="checkbox" :checked="true" @click="toggleTodo(item.id)"/>
              <div class="item__main"  @click="EditTodo">
                <label class="item__main__text">{{item.value}}</label>
                <label v-if="item.endDate" class="end-text item__main__date">{{item.endDate}}</label>
                <label v-if="item.endTime" class="end-text item__main__time">{{item.endTime}}</label>
              </div>
            </div>
            <div class="del-icon" @click="deleteTodo(item.id)"></div>
          </div>
        <div v-if="!getDone.length" class="empty center list--done">
          <div class="box-icon"></div>
          <label>空空如也~</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data: function() {
            return {
                showTodo:true,
                showDone:true
            }
        },
        computed: {
          //获取未完成的任务
          getTodo(){
            console.log('gettodo')
            return this.$store.getters.getTodo;
          },
          //获取已完成的任务
          getDone(){
            console.log('getdone',this.$store.getters.getDone)
            return this.$store.getters.getDone;
          }
        },
        methods: {
            showModal() {
                console.log('tosoList')
            },
            toggleTodo(id){
              this.$store.commit('TOGGLETODO',id)
            }
        }
    }
</script>
