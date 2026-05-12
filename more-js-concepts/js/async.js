const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve(0.3)
        } else {
            reject(0.7)
        }
    })
}

async function dataLoader(){
    const res = await fetch('')
    const data = res.json()
    console.log(data)
}

const dataLoader2 = async() =>{
    const res = await fetch('');
    const data = res.json();
    console.log(data)
}

dataLoader();
dataLoader2();