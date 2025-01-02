function area(l,b){
    if(l<=0||b<=0){
        throw new RangeError("Out of range value.");
        
    }
    const area=l*b;
    console.log("Area of Rectangle having length: "+l+" breath: "+b+" = "+ area);
}
//! length should not be negative so 
area(2,4);
area(2,0);