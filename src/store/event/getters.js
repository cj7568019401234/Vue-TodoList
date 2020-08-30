/**
 * Created by cj on 2020/08/29
 */

export default {
  // 获取未完成的todoList
  getTodo(states) {
    return states.todoList.filter(item => {
      return !item.isFinished
    })
  },
  // 获取已完成的todoList
  getDone(states) {
    return states.todoList.filter(item => {
      return item.isFinished
    })
  }
}
