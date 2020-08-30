/**
 * Created by cj on 2020/08/29
 */

import Vue from 'vue'
import Vuex from 'vuex'
import event from './event'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    event
  }
})
