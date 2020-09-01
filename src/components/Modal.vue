<template>
    <div class="modal__mask">
        <div class="modal">
            <div class="modal__header">请编辑任务<div class="close-icon"  @click="closeModal"></div></div>
            <form>
                <div class="modal__input">
                    <textarea placeholder="请输入任务" name="textarea" class="todo-input" value="value"></textarea>
                </div>
                <div class="modal__body">
                    <a-date-picker class='center' placeholder="截止日期" :default-value="moment('2015/01/01','YYYY/MM/DD')"  />
                    <a-time-picker class='center pick-time' placeholder="截止时间" :default-value="moment('12:08:23', 'HH:mm:ss')"/>
                </div>
                <div class="modal__footer">
                    <button class="btn" size="mini" @click="closeModal">取消</button >
                    <button class="btn confirm-btn" form-type="submit" size="mini">确认</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import moment from 'moment'
    export default{
        data: function() {
            return {
                showModal: true
            }
        },
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
