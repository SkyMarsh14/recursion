#!/usr/bin/env node

function fibs(n){
    if(n<=2) return n;
    let a =0;
    let b=1;
    let c;
    let arr=[a,b];
    for(let i=2;i<n;i++){
        c=a+b;
        a=b;
        b=c;
        arr.push(b);
    }
    return arr;
}

function fibsRec(n, sequence=[0,1]){
    console.log("This was printed recursively");
    if(n<=2) return sequence;
    else if (n===1) return [0];

    sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2]);
    return fibsRec(n-1,sequence);
}
