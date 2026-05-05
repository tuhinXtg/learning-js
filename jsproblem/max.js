const numbers = [1,99,3,55,5,6,-3];

function getmax(numbers){
    let maxx = numbers[0];
    for(const num of numbers){
        if(num > maxx){
            maxx = num;
        }
    }
    return maxx;
}

const max = getmax(numbers);
console.log('Max value is', max);