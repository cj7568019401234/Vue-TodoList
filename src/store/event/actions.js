/**
 * Created by cj 2020/08/31
 */

 export default {
   toggleTodo: ({ commit }, id) => commit('TOGGLETODO', id),
   editTodo: ({ commit }, param) => commit('EDITTODO', param),
   deleteTodo: ({commit}, id) => commit('DELETETODO', id),
   handleModal: ({ commit }) => commit('HANDLEMODAL')
 }
