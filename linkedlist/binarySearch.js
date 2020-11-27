var arr = [];

for(let i=1; i<20; i=i+2){
    arr.push(i);
}

console.log(arr.length);

function binarySearch(arr, firstIndex, lastIndex, targetValue){

    let midIndex =Math.floor((firstIndex+lastIndex)/2);
    let midValue = arr[midIndex];

    console.log("midIndex "+midIndex);
    console.log("midValue "+midValue);
    console.log("firstIndex "+firstIndex);
    console.log("lastIndex "+lastIndex);

    if(midValue === targetValue){
        console.log("find!");
        return midValue;
    // target보다 midValue가 작으면 midIndex 이전 범위는 생각하지 않는다 
    } else if (midValue < targetValue){
        console.log("upper!");
        binarySearch(arr, midIndex+1, lastIndex, targetValue);
    // target보다 midValue가 크면 midIndex 이후 범위는 생각하지 않는다 
    } else {
        console.log("lower!");
        binarySearch(arr, firstIndex, midIndex-1, targetValue);
    }

}

console.log(binarySearch(arr, 0, arr.length, 7));