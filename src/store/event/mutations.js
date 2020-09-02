/**
 * Created by cj on 2020/08/29
 */

 import * as types from './mutation-types'
 
 export default{
    // 添加任务
    [types.ADDTODO](state, obj) {
        state.todoNum++
        obj.items.id = state.num
    },
    // 扭转任务状态
    [types.TOGGLETODO](state, id) {
        let { todoList } = state
        todoList.some((item, index) => {
            if (item.id === id) {
                todoList[index].isFinished = !todoList[index].isFinished
                return true
            }
        })
        state.todoList = todoList
    },
    // 展开收缩列表
    [types.COLLAPSE](state, type) {
        if (type === 'todo') {
            state.showTodo = !state.showTodo
        } else if (type === 'done') {
            state.showDone = !state.showDone
        }
    },
    // 展示编辑框
    [types.SHOWMODAL](state, id) {
        state.showModal = true
    }
 }
