function sumOfDigits(num){
    let numb=num;
    let result=0;
    while(numb>0){
        let lastDigit=numb%10;
        numb=Math.floor(numb/10);
        result=result+lastDigit;
    }
    return result;
}
console.log(sumOfDigits(12))
