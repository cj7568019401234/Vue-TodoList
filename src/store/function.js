/**
 * Created by  cj on 2020/09/04
 */

 const LocalEvent = function(item) {
     // 获取存在本地的数据
     this.get = function () { 
         return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
     }
     // 把数据保存在本地
     this.set = function (obj) { 
         localStorage.setItem(item, JSON.stringify(obj))
     }
 }

 export const localData = new LocalEvent('TodoList')
