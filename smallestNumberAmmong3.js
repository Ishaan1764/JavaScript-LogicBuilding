function smallest(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log(num1+ "is smallest");
    }else if(num2<num1 && num2<num3){
        console.log(num2+ "is smallest");
    }else if(num1===num2&& num1<num3){
        console.log(num1+"smallest");
    }else if(num1===num3&& num1<num2){
        console.log(num1+"is smallest");
    }else if(num2===num3&&num2<num1){
        console.log(num2+"smallest");
    }
    else{
        console.log(num3+ "is smallest");
    }
}
smallest(1,2,3);
smallest(-1,-2,3);
smallest(0,0,3);

function smallest2(a,b,c){
    let smallestnumb=a;
    if(b<smallestnumb){
        smallestnumb=b;
    }
    if(c<smallestnumb){
        smallestnumb=c;
    }
    return smallestnumb;
}

const number=smallest2(3,3,2);
console.log(number)
