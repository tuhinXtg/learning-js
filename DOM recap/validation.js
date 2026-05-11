const number = 23;
if(typeof number == 'number'){
    console.log('Value is a number')
}else{
    console.log('Value is not a number')
}

const num = [1,23,4,4]
console.log(Array.isArray(num))
//  isNaN means only for number not others
console.log(isNaN('ad'))