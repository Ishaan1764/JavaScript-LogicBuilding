function factorial(numb){
    if(numb<0){
        throw new RangeError("No negative number");
    }
    let result=1;
    if(numb!==0){
        for(let i=1;i<=numb;i++){
            result=result*i;
        }
    }else if(numb===0){
        return result;
    }
    
    return result;
}
console.log(factorial(0));


//! Recursive factorial.
function recFact(numb){
    if(numb<0){
        throw new RangeError("No negative number");
    }
    if(numb===0){
        return 1;
    }else{
        return numb*recFact(numb-1);
    }
}

console.log(recFact(1));