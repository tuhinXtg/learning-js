const numbers = [1,2,3,4,5,5,5,7,7,8,9]

function noduplicate(num){
    const unique = [];
    for(const item of num){
        if(unique.includes(item) == false){
            unique.push(item);
        }
    }
    return unique;
}

const updatelist = noduplicate(numbers);
console.log(updatelist);