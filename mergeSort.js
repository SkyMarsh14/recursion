#!/usr/bin/env node

function mergeSort(arr){

    if(arr.length<=1) return arr;

    let [left,right]=split(arr);

    left = mergeSort(left);
    right=mergeSort(right);

    return merge(left,right);
}

function split(array){
    let half=Math.floor(array.length/2);

    return [array.slice(0,half),array.slice(half)];
}

function merge(left,right,result=[]){

    if(left.length===0) return result.concat(right);
    if(right.length===0) return result.concat(left);

    if(left[0]<right[0]){
        result.push(left.shift());
    }else{
        result.push(right.shift());
    }
    return merge(left,right,result);
}

