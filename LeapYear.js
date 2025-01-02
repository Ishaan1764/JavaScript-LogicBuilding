function leapYr(yr){
    if(typeof(yr)!=="number"){
        throw Error("Enter NUmber");
    }else{
        if(yr%4==0){
            return true;
        }else{
            return false;
        }
    }
}

console.log(leapYr(2024));