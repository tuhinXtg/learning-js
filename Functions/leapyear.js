function leafyear(year){
    if(year % 4 == 0 && year % 100 != 0){
        return true;
    }
    else if(year % 100 == 0 && year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}


console.log(leafyear(2000));
console.log(leafyear(2390));
console.log(leafyear(2100));
console.log(leafyear(2020));