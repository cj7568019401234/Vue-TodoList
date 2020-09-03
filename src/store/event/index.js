/**
 * Created by cj on 2020/08/30.
 */
// import * as func from '../function'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

let state = {
    todoList: [{
        id: 1,
        text: 'hhhhha',
        endDate: '2020年12月10日',
        endTime: '23:27',
        isFinished: true
    }, {
        id: 2,
        text: '第二个任务hhhhha22',
        endDate: '',
        endTime: '23:27',
        isFinished: true
    }, {
        id: 3,
        text: '第三个任务hhhhha2233',
        endDate: '',
        endTime: '23:07',
        isFinished: true
    }],
    showTodo: true,
    showDone: true,
    showModal: false,
    id: -1,
    text: '',
    endDate: '2020/09/02',
    endTime: '2000-01-01 00:10:00'
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
}
