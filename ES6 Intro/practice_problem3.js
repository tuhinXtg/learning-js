const arrays = (arr1, arr2) => {
    const arr11 = [...arr1]
    const arr22 = [...arr2]
    const combined = [...arr11, ...arr22];
    const max = Math.max(...combined)
    return max;

}

a1 = [1, 2, 3, 4]
b1 = [1, 2, 3, 4, 5]

const result = arrays(a1, b1)
console.log(result)