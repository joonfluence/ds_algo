var arr = [];

for(let i=1; i<20; i=i+2){
    arr.push(i);
}

function binarySearch(arr, firstIndex, lastIndex, targetValue){

    let midIndex = Math.floor((firstIndex+lastIndex)/2);
    console.log(midIndex);
    console.log(arr[midIndex]);
    console.log(firstIndex);
    console.log(lastIndex);

    // 만약 존재하지 않는 경우라면 끝낼 것.
    if(firstIndex>lastIndex) {
        throw("Not Exist");
    } 

    if (arr[midIndex] === targetValue) {
        console.log("right");
        return arr[midIndex];
    } else if(arr[midIndex] < targetValue){
        console.log("higher");
        binarySearch(arr, midIndex+1, lastIndex, targetValue);
    } else {
        console.log("lower");
        binarySearch(arr, firstIndex, midIndex-1, targetValue);
    }
}

console.log(binarySearch(arr, 0, arr.length-1, 10));