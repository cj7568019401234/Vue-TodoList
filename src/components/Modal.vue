<template>
    <div v-if='showModal' class="modal__mask">
        <div class="modal">
            <div class="modal__header">请编辑任务<div class="close-icon"  @click="closeModal"></div></div>
            <div>
                <div class="modal__input">
                    <textarea placeholder="请输入任务" class="todo-input"  v-model="text"></textarea>
                </div>
                <div class="modal__body">
                    <a-date-picker class='center' placeholder="截止日期" @change="onChangeDate"  :default-value="moment(endDate, 'YYYY/MM/DD')"  format="YYYY/MM/DD" />
                    <a-time-picker class='center pick-time' placeholder="截止时间"  @change="onChangeTime" :default-value="moment(endTime,'HH:mm')" format="HH:mm"/>
                </div>
                <div class="modal__footer">
                    <button class="btn" size="mini" @click="closeModal">取消</button >
                    <button class="btn confirm-btn" @click='editTodo'>确认</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment'
    import { mapState } from 'vuex'

    export default {
        computed: mapState({
            showModal: state => state.event.showModal, // 是否展示弹窗
            id: state => state.event.id, // 任务id
            text: state => state.event.text, // 任务描述
            endDate: state => state.event.endDate || new Date(), // 任务截止日期
            endTime: state => state.event.endTime || '23:59' // 任务截止时间
        }),
        methods: {
            moment,
            // 关闭弹窗
            closeModal() {
                this.$store.commit('HANDLEMODAL')
                this.id = ''
                this.text = ''
                this.endDate = new Date()
                this.endTime = '23:59'
            },
            // 修改todo任务，已有id为修改，id为-1为新增
            editTodo() {
                console.log('modal', this.state)
                 
                if (typeof this.endDate === 'object') {
                    let year = this.endDate.getFullYear()// getFullYear() 返回年
                    let month = this.endDate.getMonth() + 1// getMonth() 返回月份 (0 ~ 11)
                    let day = this.endDate.getDate()// getDate() 返回日 (1 ~ 31)
                    this.endDate = `${year}/${month}/${day}` // 格式化日期
                }

                let item = {}
                item.text = this.text
                item.id = this.id
                item.endDate = this.endDate
                item.endTime = this.endTime
                this.$store.dispatch('editTodo', item)
                this.$store.commit('HANDLEMODAL') // 关闭编辑弹窗
            },
            // 处理日期选择器的变化
            onChangeDate(date, dateString) { 
                this.endDate = dateString
            },
            // 处理时间选择器的变化
            onChangeTime(time, timeString) {
                this.endTime = timeString
            }
        }
    }
</script>
