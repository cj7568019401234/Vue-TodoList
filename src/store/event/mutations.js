/**
 * Created by cj on 2020/08/29
 */

import * as types from './mutation-types'

export default {
    // 删除任务
    [types.DELETETODO](state, id) {
        state.todoList.some((item, index) => {
           if (item.id === id) {
               state.todoList.splice(index, 1)
               return true
           } 
        })
    },
    // 编辑任务，id不小于0就是编辑，小于0就是新增
    [types.EDITTODO](state, obj) {
        if (!obj.text) {
            return 
        }
        if (obj.id >= 0) {
            state.todoList.some((item, index) => {
                if (item.id === obj.id) {
                    obj['isFinished'] = state.todoList[index].isFinished
                    state.todoList[index] = obj
                    return true
                }
            })
        } else {
            obj['id'] = state.todoList.length + 1
            obj['isFinished'] = false
            state.todoList.push(obj)
        }
    },
    // 扭转任务状态
    [types.TOGGLETODO](state, id) {
        let {
            todoList
        } = state
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
    [types.HANDLEMODAL](state) {
        state.showModal = !state.showModal
    }
}
