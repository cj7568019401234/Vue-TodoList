/**
 * Created by cj on 2020/08/30.
 */
import * as func from '../function'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

let state = func.localData.get() || 
{
    todoList: [], // 待办事项列表
    showTodo: true, // 是否展示未完成任务的列表
    showDone: true, // 是否展示已完成任务的列表
    showModal: false, // 是否展示编辑框
    id: '', // 待编辑待办事项的id
    text: '', // 待编辑待办事项描述
    endDate: '', // 待编辑待办事项的截止日期
    endTime: '' // 待编辑待办事项的截止时间
}

export default {
    state,
    getters,
    actions,
    mutations
}
