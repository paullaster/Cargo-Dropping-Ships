/**
 * Cargo-Dropping Ships
There is a cargo ship that contains an unlimited 
amount of cargo in it. The ship is ready to sail and 
you have a list of N non-negative integers that denote 
the water level in the sea at ith points. A Wave is defined 
as the continuously decreasing water level or continuously increasing water level.

Let A = [1,2,6,4,2,3,1,8,9,7], it has 6 waves in it 
[1,2,6],[6,4,2],[2,3],[3,1],[1,8,9],[9,7]
The amount of cargo that falls into the sea is 
equal to the product of the smallest height of the wave and length of the wave.
You have to find the total amount of cargo which falls into the sea.
 */
let mtda = [
    [1,2,6],
    [6,4,2],
    [2,3],
    [3,1],
    [1,8,9],
    [9,7]
];
// let mtda2 = process.stdin.on('data', (data)=>{
//     return data.toString();
// })
// console.log(mtda2);

Array.min = (arr)=>{
    return Math.min.apply(Math, arr);
}
function getRunningTotal () {
    let runningTotal = 0;
    for(let i = 0; i < mtda.length; i++) {
        let len = mtda[i].length;
        let smallestValue = Array.min(mtda[i]);
        let minLenProd = smallestValue * len;
        runningTotal += minLenProd;
    }
    return runningTotal;
}
console.log(` ${getRunningTotal()}`);
//console.log(Array.min(testArr));