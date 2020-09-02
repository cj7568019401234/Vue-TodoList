<template>
    <div v-if='showModal' class="modal__mask">
        <div class="modal">
            <div class="modal__header">请编辑任务<div class="close-icon"  @click="closeModal"></div></div>
            <div>
                <div class="modal__input">
                    <textarea placeholder="请输入任务" class="todo-input"  v-model="text"></textarea>
                </div>
                <div class="modal__body">
                    <a-date-picker class='center' placeholder="截止日期" :default-value="moment(endDate)"  />
                    <a-time-picker class='center pick-time' placeholder="截止时间" :default-value="moment(endTime, 'HH:mm:ss')" />
                </div>
                <div class="modal__footer">
                    <button class="btn" size="mini" @click="closeModal">取消</button >
                    <button class="btn confirm-btn" >确认</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment'
    import { mapState } from 'vuex' 
    export default {
        data: function() {
            return {
            //     showModal: true, // 是否展示弹窗
            //     id: -1,
                text: '' // 任务描述
            //     endDate: '', // 任务截止日期
            //     endTime: null, // 任务截止时间
            //     dateFormat: 'YYYY/MM/DD', // 日期格式
            //     timeformat: 'HH:mm' // 时间格式
            }                                                                 
        },
        computed: mapState({
            showModal: state => state.event.showModal, // 是否展示弹窗
            text: state => state.event.text,
            endDate: state => state.event.endDate, // 任务截止日期
            endTime: state => state.event.endTime // 任务截止时间
        }),
        methods: {
            moment,
            onChange(time, timeString) {
                console.log(time, timeString)
            },
            closeModal() {

            }
        } 
    }
</script>
