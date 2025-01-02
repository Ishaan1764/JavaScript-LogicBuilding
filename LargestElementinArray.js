
const arr=[5,4,10,2,50]
let biggest=arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>biggest){
        biggest = arr[i]
    }
}
console.log(biggest)



//! Using swap function.
function swap(arr2,i,j){
    let temp=arr2[i];
    arr2[i]=arr2[j];
    arr2[j]=temp;
}
// const arr2=[5,34,5211,1];
// let biggestIndex=0;
// for (let i = 1; i < arr2.length; i++) {
//     if (arr2[i] > arr2[biggestIndex]) {
//         // Swap the current element with the biggest element found so far
//         swap(arr2, i, biggestIndex);
//         biggestIndex = i; // Update the index of the biggest number
//     }
// }
// console.log(arr2[biggestIndex]);

function largest2(array){
    const maxNum=Math.max(...array);
    console.log(maxNum);
}
largest2(arr)