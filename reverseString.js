const names="Saluja";
let result="";
for(let i=names.length-1;i>=0;i--){
    result=result+names[i]
}
console.log(result)
const splittedName=names.split("");
console.log(splittedName);
const reversedArray=splittedName.reverse();
console.log(reversedArray);
console.log(reversedArray.join(''));