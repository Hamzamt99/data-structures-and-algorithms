function list(arr){
    let array = [];
    for(let i =0 ; i < arr.length; i++){
    array.unshift(arr[i])
    }
    return array;
    }

module.exports = {
    list
}