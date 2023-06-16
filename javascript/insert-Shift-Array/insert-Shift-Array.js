'use strict'
function insertShiftArray(arr, value) {

    let middleIndex = Math.ceil(arr.length / 2);

    let newArr = new Array(arr.length + 1);

    for (let i = 0; i < middleIndex; i++) {
        newArr[i] = arr[i];
    }
    newArr[middleIndex] = value;

    for (let j = middleIndex + 1; j < newArr.length; j++) {
        newArr[j] = arr[j - 1];
    }
    // console.log(newArr)
    return newArr;
}

module.exports = {
    insertShiftArray
}