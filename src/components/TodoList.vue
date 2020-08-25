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