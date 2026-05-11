const numbers = [1,2,3,4,5,6]

function doubleit(num){
    return num * 2; 
}

// const double = x => x*2;

const result = numbers.map(doubleit);
console.log(result)





// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }