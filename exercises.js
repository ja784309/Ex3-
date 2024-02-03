let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list){
return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
}

console.log(flattening(arrays))

export function loop(value, test, update, body) {
    for(let curValue = value; test(curValue); curValue = update(curValue)) {
        body(curValue)
    }
   //while(true) {
   // console.log("Iteration, curValue" + curValue)
   // if(test(curValue)){
   // console.log("Calling body ...")
   // body(curValue)
    //curValue = update(curValue)
    //} else {
        //console.log("curValue test is false")
    //break;
    //}
}
loop(3, n => n > 0, n => n - 1, console.log);


export function everyLoop(array, test) {
    let curResult = true
    for(let item of array) {
    //console.log(test(item))
    curResult = curResult && test(item)
    }
    return curResult
}

export function everySome(array, test){
return !array.some((value)=>!test(value))
}

console.log("Should be true")
console.log(everySome([1, 3, 5], n => n < 10));
console.log("Should be flase")
console.log(everySome([2, 4, 16], n => n < 10));
console.log("Should be true")
console.log(everySome([], n => n < 10));