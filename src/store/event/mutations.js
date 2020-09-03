/**
 * Created by cj on 2020/08/29
 */

import * as types from './mutation-types'

export default {
    // 添加任务
    [types.ADDTODO](state, obj) {
        obj.items.id = state.todoList.length
    },
    // 编辑任务
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
            obj['id'] = state.todoList.length
            state.todoList.push(obj)

            console.log('edittodo', state, state.endDate, state.endTime, typeof state.endDate, typeof state.endTime)
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
