function Search(value,arr){
    let lower = 0;
    let upper = arr.length -1;
    while(lower <= upper){
        let middle = Math.floor((upper - lower)/2)
        if(value === arr[middle]){
            return middle
        }
        if(value < arr[middle]){
            upper = middle -1
        }else{
            lower = middle +1
        }
    }
    return -1
}
module.exports = Search;