function myDegree(number,degree){
    if (degree===1){
        return number

    }
    else {
        return number*myDegree(number,degree-1)
    }
}
console.log(myDegree(2,5))