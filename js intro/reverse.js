const numbers = [1,2,3,4,5,6,7]
// num.reverse();
// console.log(num)


const rev = [];
for(const num of numbers){
    rev.unshift(num)
}
console.log(rev);