function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstserver = kitchen();
console.log(firstserver);