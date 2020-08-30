<template>
    <div class="modal__mask">
        <div class="modal">
            <div class="modal__header">
                请编辑任务
                <div class="close-icon"  @click="closeModal"></div>
            </div>
            <form bindsubmit="bindFormSubmit" data-id="id">
                <!-- <a-time-picker :default-open-value="moment('00:00:00', 'HH:mm:ss')" @change="onChange" /> -->
                <div class="modal__input">
                    <textarea
                        placeholder="请输入任务"
                        name="textarea"
                        class="todo-input"
                        value="value"
                    ></textarea>
                </div>
                <div class="modal__body">
                    <!-- <picker
                        mode="date"
                        value="endDate"
                        start="2000-01-01"
                        end="2200-12-31"
                        bindchange="bindDateChange"
                    >
                        <div class="pick">
                            <input placeholder="截止日期" value="endDate" name="date">
                            <icon class="date-icon"></icon>
                        </div>
                    </picker> -->
                    <a-date-picker class='center' :default-value="moment('2015/01/01', dateFormat)" :format="dateFormat" />
                    <a-time-picker class='center' :default-value="moment('12:08:23', 'HH:mm:ss')"/>
                    <!-- <picker
                        mode="time"
                        start="2015-09-01"
                        end="2200-12-31"
                        bindchange="bindTimeChange"
                    >
                        <div class="pick">
                            <input placeholder="截止时间" value="endTime" name="time">
                            <icon class="time-icon"></icon>
                        </div> -->
                    </picker>
                </div>
                <div class="modal__footer">
                    <button class="btn" size="mini" bindtap="closeModal">
                        取消
                    </button >
                    <button class="btn confirm-btn" form-type="submit" size="mini">确认</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    export default{
        data: function(){
            return{
                showModal:true
            }
        },
        methods: {
            moment,
            onChange(time, timeString) {
                console.log(time, timeString);
            },
        } 
        // methods: {
        //     showModal() {
        //         console.log('tosoList')
        //     }
        // }
    }
</script>
