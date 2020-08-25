<div class="nav">
    <label class='nav__logo '>❤ TodoList</label>
    <icon class="nav__add" bindtap="showModal"></icon>
</div>
<div wx:if="{{showModal}}" class='modal__mask'>
    <div class="modal">
        <div class='modal__header'>
            请编辑任务
            <icon class='modal__close' bindtap="closeModal"></icon>
        </div>
        <form bindsubmit="bindFormSubmit" data-id="{{id}}">
            <div class='modal__input'>
                <textarea placeholder="请输入任务" name="textarea" class="todo-input" value="{{value}}"></textarea>
            </div>
            <div class='modal__body'>
                <picker mode="date" value="{{endDate}}" start="2000-01-01" end="2200-12-31" bindchange="bindDateChange">
                    <div class="pick">
                        <input placeholder="截止日期" value="{{endDate}}" name='date' />
                        <icon class='date-icon'></icon>
                    </div>
                </picker>
                <picker mode="time" start="2015-09-01" end="2200-12-31" bindchange="bindTimeChange">
                    <div class="pick">
                        <input placeholder="截止时间" value="{{endTime}}" name='time' />
                        <icon class='time-icon'></icon>
                    </div>
                </picker>
            </div>
            <div class='modal__footer'>
                <button class='btn' size='mini' bindtap="closeModal">取消</button >
        <button class='btn confirm-btn' form-type="submit" size='mini' >确认</button>
            </div>
        </form>
    </div>
</div>

<div class="wrap">
    <div class='todolist'>
        <div class='collapse-panel' bindtap="handleCollapseEvent" data-type="todo">
            <icon class="spread  {{todo.collapse ? 'collapse-rotate' : ''}}"></icon>
            待完成
            <icon class="todo-icon"></icon>
            {{todoNum}}
        </div>
        <block wx:if="{{todo.isShowed}}" wx:for="{{todoList}}" wx:key="id" data="{{item}}" class='list'>
            <div wx:if="{{!item.isFinished}}" class="item-container list" bindtap="bindEdit" data-id="{{item.id}}">
                <div class='center item-left'>
                    <checkbox class="item__check" checked="{{item.isFinished ? 'checked' : ''}}" catchtap="bindToggle" data-id="{{item.id}}" />
                    <div class='item__main'>
                        <text class="item__main__text">{{item.value}}</text>
                        <text wx:if="{{item.endDate}}" class="item__main__date">{{item.endDate}}</text>
                        <text wx:if="{{item.endTime}}" class="item__main__time">{{item.endTime}}</text>
                    </div>
                </div>
                <icon class="del-icon" catchtap="bindDelete" data-id="{{item.id}}"></icon>
            </div>
        </block>
        <div wx:if="{{!todoNum && todo.isShowed}}" class='empty center list--todo'>
            <icon class="box-icon"></icon>
            <text>你还没有添加任务呢~</text>
        </div>
    </div>
    <div class='donelist'>
        <div class="collapse-panel collapse-panel--done {{done.isShowed ? '' : 'list--done'}}" bindtap="handleCollapseEvent" data-type="done">
            <icon class="spread  {{done.collapse ? 'collapse-rotate' : ''}}"></icon>
            已完成
            <icon class="done-icon"></icon>
            {{doneNum}}
        </div>
        <block wx:if="{{done.isShowed}}" wx:for="{{todoList}}" wx:key="id" data="{{item}}" class='list'>
            <div wx:if="{{item.isFinished}}" class="item-container list" bindtap="bindEdit" data-id="{{item.id}}">
                <div class='center item-left'>
                    <checkbox class="item__check" checked="{{item.isFinished ? 'checked' : ''}}" catchtap="bindToggle" data-id="{{item.id}}" />
                    <div class='item__main'>
                        <text class="item__main__text">{{item.value}}</text>
                        <text wx:if="{{item.endDate}}" class="end-text item__main__date">{{item.endDate}}</text>
                        <text wx:if="{{item.endTime}}" class="end-text item__main__time">{{item.endTime}}</text>
                    </div>
                </div>
                <icon class="del-icon" catchtap="bindDelete" data-id="{{item.id}}"></icon>
            </div>
        </block>
        <div wx:if="{{!doneNum && done.isShowed}}" class='empty center list--done'>
            <icon class="box-icon"></icon>
            <text>空空如也~</text>
        </div>
    </div>
</div>
<script type="text/javascript">
    var vm = new Vue({

    })
</script>