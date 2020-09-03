<template>
    <div v-if='showModal' class="modal__mask">
        <div class="modal">
            <div class="modal__header">请编辑任务<div class="close-icon"  @click="closeModal"></div></div>
            <div>
                <div class="modal__input">
                    <textarea placeholder="请输入任务" class="todo-input"  v-model="text"></textarea>
                </div>
                <div class="modal__body">
                    <a-date-picker class='center' placeholder="截止日期" @change="onChangeDate"  :default-value="moment(endDate)"  format="YYYY/MM/DD" />
                    <a-time-picker class='center pick-time' placeholder="截止时间"  @change="onChangeTime" :default-value="moment(endTime)" format="HH:mm:ss"/>
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
    export default {
        data: function() {
            return {
                id: this.$store.state.event.id, // 任务id
                text: this.$store.state.event.text, // 任务描述
                endDate: this.$store.state.event.endDate, // 任务截止日期
                endTime: this.$store.state.event.endTime // 任务截止时间
            }                                                                 
        },
        computed: {
            // 是否展示弹窗
            showModal() {
                return this.$store.state.event.showModal 
            } 
        },
        methods: {
            moment,
            // 关闭弹窗
            closeModal() {
                this.$store.commit('HANDLEMODAL')
            },
            editTodo() {
                let item = {}
                item.text = this.text
                item.id = this.id
                item.endDate = this.endDate
                item.endTime = this.endTime
                this.$store.dispatch('editTodo', item)  
                this.$store.commit('HANDLEMODAL') // 关闭编辑弹窗
            },
            onChangeDate(date, dateString) {
                console.log(date, dateString)
                this.endDate = dateString
            },
            onChangeTime(time, timeString) {
                console.log(time, timeString)
                this.endTime = timeString
            }
        }
    }
</script>
