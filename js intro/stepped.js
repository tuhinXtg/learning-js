const price = 4000;
if(price >= 5000){
    const dis = price*10 / 100;
    const payAmount = price - dis;
    console.log(payAmount);
}
else if(price > 2500){
    const dis = price * 5 / 100;
    const payAmount = price - dis;
    console.log(payAmount);
}
else{
    console.log(price);
}