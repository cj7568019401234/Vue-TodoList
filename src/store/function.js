/**
 * Created by  cj on 2020/09/04
 */

 const LocalEvent = function(item) {
     this.get = function () { 
         return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
     }
     this.set = function (obj) { 
         localStorage.setItem(item, JSON.stringify(obj))
     }
 }

 export const localData = new LocalEvent('TodoList')
