const numbers = [1,2,3,4,5,6,7]

// numbers.reverse();
// console.log(numbers);

let reverse_num = [];
for(i = 0; i<numbers.length; i++){
    reverse_num.unshift(numbers[i]);
}
console.log(reverse_num);