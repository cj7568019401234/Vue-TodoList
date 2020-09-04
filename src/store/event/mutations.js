/**
 * Created by cj on 2020/08/29
 */

import * as types from './mutation-types'
import * as func from '../function'

export default {
    // 删除任务
    [types.DELETETODO](state, id) {
        state.todoList.some((item, index) => {
           if (item.id === id) {
               state.todoList.splice(index, 1)
               return true
           } 
        })
        func.localData.set(state)
    },
    // 编辑任务，id不小于0就是编辑，小于0就是新增
    [types.EDITTODO](state, obj) {
        if (!obj.text) {
            return 
        }
        if (obj.id) {
            state.todoList.some((item, index) => {
                if (item.id === obj.id) {
                    obj.isFinished = item.isFinished
                    state.todoList[index] = obj
                    return true
                }
            })
        } else {
            obj.id = String(new Date().valueOf())
            obj.isFinished = false
            state.todoList.push(obj)
        }
        func.localData.set(state)
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
        func.localData.set(state)
    },
    [types.GETTODO](state, id) {
        state.todoList.some((item, index) => { 
            if (item.id === id) {
                state.id = id
                state.text = item.text
                state.endDate = item.endDate
                state.endTime = item.endTime
                return true
            }
        })
    },
    // 展开收缩列表
    [types.COLLAPSE](state, type) {
        if (type === 'todo') {
            state.showTodo = !state.showTodo
        } else if (type === 'done') {
            state.showDone = !state.showDone
        }
        func.localData.set(state)
    },
    // 展示编辑框
    [types.HANDLEMODAL](state) {
        state.showModal = !state.showModal
    }
}
