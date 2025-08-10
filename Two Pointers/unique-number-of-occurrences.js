var uniqueOccurrences = function(arr) {
    let sorted_arr = arr.sort((a, b) => a - b);
    let arr2 = []
    let count = 1
    for (let i=0; i<sorted_arr.length; i++){
        if(sorted_arr[i] === sorted_arr[i+1]){
            count ++
        }else{
            arr2.push(count)
            count = 1;
        }
    }
    return arr2.length === new Set(arr2).size;
};