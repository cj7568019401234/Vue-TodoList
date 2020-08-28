<template>
  <div class="wrap">
    <div class="todolist">
      <div class="collapse-panel" bindtap="handleCollapseEvent" data-type="todo">
        <div class="center"><div class="spread" :class="{'collapse-rotate' : todo.collapse}"></div>待完成</div>
        <div class="center"><div class="todo-icon"></div>{{todoNum}}</div>
      </div>
      <div v-if="todo.isShowed">
        <div v-for="item in todoList" :key="item.id" class="list">
          <div v-if="!item.isFinished" class="item-container list" @click="EditTodo">
            <div class="center item-left">
              <input type="checkbox" :checked="item.isFinished" @click="ToggleTodo" v-model="item.id"/>
              <div class="item__main">
                <label class="item__main__text">{{item.value}}</label>
                <label v-if="item.endDate" class="item__main__date">{{item.endDate}}</label>
                <label v-if="item.endTime" class="item__main__time">{{item.endTime}}</label>
              </div>
            </div>
            <div class="del-icon" catchtap="bindDelete" :id="item.id"></div>
          </div>
        </div>
      </div>
      <div v-if="!todoNum && todo.isShowed" class="empty center list--todo">
        <div class="box-icon"></div>
        <text>你还没有添加任务呢~</text>
      </div>
    </div>
    <div class="donelist">
      <div class="collapse-panel collapse-panel--done" :class="{'list--done' : !done.isShowed}" @click="handleCollapseEvent"  data-type="done">
         <div class="center"><div class="spread" :class="{ 'collapse-rotate' : done.collapse}"></div>已完成</div>
         <div class="center"><div class="done-icon"></div>{{doneNum}}</div>
      </div>
      <div v-if="done.isShowed">
        <div v-for="item in todoList" :key="item.id" data="item" class="list">
          <div v-if="item.isFinished" class="item-container list" @click="bindEdit" data-id="item.id">
            <div class="center item-left">
              <input type="checkbox" :checked="!item.isFinished" @click="bindToggle" data-id="item.id"/>
              <div class="item__main">
                <label class="item__main__text">{{item.value}}</label>
                <label v-if="item.endDate" class="end-text item__main__date">{{item.endDate}}</label>
                <label v-if="item.endTime" class="end-text item__main__time">{{item.endTime}}</label>
              </div>
            </div>
            <div class="del-icon" @click="bindDelete" data-id="item.id"></div>
          </div>
        </div>
        <div v-if="!doneNum" class="empty center list--done">
          <div class="box-icon"></div>
          <text>空空如也~</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      isActive: true,
      todo: {
        collapse: false,
        isShowed: true
      },
      done: {
        collapse: false,
        isShowed: true
      },
      todoNum: 16,
      doneNum: 10,
      todoList: [
        {
          id: 1,
          value: 'hhhhha',
          endDate: '2020年12月10日',
          endTime: '23:27',
          isFinished: false
        },
        {
          id: 2,
          value: '第二个任务hhhhha22',
          endDate: '',
          endTime: '23:27',
          isFinished: false
        },
        {
          id: 3,
          value: '第三个任务hhhhha2233',
          endDate: '',
          endTime: '23:27',
          isFinished: true
        }
      ]
    }
  },
  methods: {
    showModal() {
      console.log('tosoList')
    }
  }
}
</script>
