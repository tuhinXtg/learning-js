function sumofEven(numbers){
    let sum = 0;
    for (const num of numbers){
        if(num%2 == 0){
            sum += num;
        }
    }
    return sum;
}

const li = [1,2,3,4,5,6,7];
sum = sumofEven(li);
console.log(sum);