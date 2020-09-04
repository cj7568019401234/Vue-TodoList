/**
 * Created by  cj on 2020/09/04
 */

 const localEvent = function(item){
     this.get = funtion () { 
         return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : {}
     }
     this.set = funtion () { 
         return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : {}
     }
 }
