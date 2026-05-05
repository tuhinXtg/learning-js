function woodQuantity(chair, table, bed){
    const perchairwood = 3;
    const pertablewood = 10;
    const perbedwood = 50;

    const allchairwood = chair * perchairwood;
    const alltablewood = table * pertablewood;
    const allbedwood = bed * perbedwood;

    const totalwood = allbedwood + allchairwood + alltablewood;
    return totalwood;
}

const wood = woodQuantity(1,2,3);
console.log(wood);