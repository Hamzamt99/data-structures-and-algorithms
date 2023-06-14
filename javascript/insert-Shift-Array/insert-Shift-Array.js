'use strict'
function insertShiftArray (arr,value){
    let middle = Math.floor(arr.length / 2)
    arr[middle] = value
   for(let i =0;i<arr.length;i++){
    // console.log(arr[i])
   }
   return;
}

module.exports = {
    insertShiftArray
}