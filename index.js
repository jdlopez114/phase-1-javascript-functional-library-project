
function myEach(collection, alert) {
    let values = Object.values(collection);
    values.forEach(element => alert(element));
    return collection;
}

function myMap(collection, cb){
    let arr = Object.values(collection);
    let newArr = [];

    for(let ele of arr){
        newArr.push(cb(ele))
    }
    return newArr;
}

function myReduce(collection, cb, ...acc){

    // let arr = Object.values(collection);
    // let copy = [...collection];
    // acc = acc || copy.shift();

    // for (arr in copy){
    //     acc = cb(acc, copy[arr], copy)
    // }
    // return acc;

    let arr = Object.values(collection)
    let newAcc ;
    let i;

    if (acc.length > 0){
        newAcc = acc[0]
        i = 0;
    } else {
        newAcc = arr[0]
        i = 1; 
    }

    for (i; i < arr.length; i++){
        newAcc = cb(newAcc, arr[i], collection)
    }

    return newAcc;
}

function myFind(collection, cb){

    for(let i = 0; i < collection.length; i++){
        const element = collection[i]
        if (cb(element)){
            return element;   
        }
    }
    
}

function myFilter(collection, cb){
    const newArr = [];
    for(let i = 0; i < collection.length; i++){
        const element = collection[i]
        if (cb(element)){
            newArr.push(element)
        }
    } return newArr;
}

function mySize(collection){
    
    let length = Object.keys(collection).length;
    return length;
}

function myFirst(arr, n = 0){
    let newArr = [];

    if (n === 0){
        return arr[0]
    }
    for (let i = 0; i < n; i++){
        newArr.push(arr[i]);
    }
    return newArr; 
}

function myLast(arr, n = 0){
    let newArr = [];

    if (n === 0){
        return arr.slice(-1)[0]
    }
    for (let i = arr.length - n; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr; 

}

function myKeys(obj){
    let arr = Object.keys(obj);
    let newArr = [];

    for(let ele in arr){
        newArr.push(arr[ele]);
    }
    return newArr;
}


function myValues(obj){

    let arr = Object.values(obj);
    let newArr = [];

    for(let ele in arr){
        newArr.push(arr[ele]);
    }
    return newArr;
}