/**
 * Created by cj on 2020/08/30.
 */
import * as func from '../function'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

let state = func.localData.get() || 
{
    todoList: [],
    showTodo: true,
    showDone: true,
    showModal: false,
    id: '',
    text: '',
    endDate: '',
    endTime: ''
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}
