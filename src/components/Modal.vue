<template>
    <div  v-if='showModal' class="modal__mask">
        <div class="modal">
            <div class="modal__header">请编辑任务<div class="close-icon"  @click="closeModal"></div></div>
            <div>
                <div class="modal__input">
                    <textarea placeholder="请输入任务" class="todo-input"  v-model="text"></textarea>
                </div>
                <div class="modal__body">
                    <a-date-picker class='center' placeholder="截止日期" @change="onChangeDate" :default-value="moment(endDate, 'YYYY/MM/DD')"  format="YYYY/MM/DD" />
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
        data() {
            return {
                id: '',
                text: '', // 任务描述
                endDate: new Date(), // 任务截止日期
                endTime: '23:59' // 任务截止时间
            }
        },
        computed: mapState({
            showModal: state => state.event.showModal // 是否展示弹窗
        }),
        watch: {
            // 弹窗状态变化的时候更新数据，以便拉取到最新的数据展示在编辑框上
            showModal() {
                this.id = this.$store.state.event.id
                this.text = this.$store.state.event.text
                this.endDate = this.$store.state.event.endDate
                this.endTime = this.$store.state.event.endTime
            }
        },
        methods: {
            moment,
            // 关闭弹窗
            closeModal() {
                this.$store.dispatch('handleModal')
            },
            // 修改todo任务，已有id为修改，id为空则为新增
            editTodo() {
                if (typeof this.endDate === 'object') {
                    let year = this.endDate.getFullYear()// getFullYear() 返回年
                    let month = this.endDate.getMonth() + 1// getMonth() 返回月份 (0 ~ 11)
                    let day = this.endDate.getDate()// getDate() 返回日 (1 ~ 31)
                    this.endDate = `${year}/${month}/${day}` // 格式化日期
                }

                let item = { text: this.text, id: this.id, endDate: this.endDate, endTime: this.endTime }
                this.$store.dispatch('editTodo', item)
                this.$store.dispatch('handleModal') // 关闭编辑弹窗
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
