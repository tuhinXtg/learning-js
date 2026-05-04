function sumofodd(list){
    let odds = [];
    for( num of list){
        if(num % 2 != 0){
            odds.push(num);
        }
    }
    let sum = 0;
    for(odd of odds){
        sum += odd;
    }
    return sum;
}

const numbers = [1,2,3,4,5,6,7,8,9]
const result = sumofodd(numbers);
console.log(result);