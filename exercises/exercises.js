
function factor(num){
    let resul=1
    for (i=1; i <= num; i++){

        resul *= i;

    }
    return resul;
}

console.log(factor(5));