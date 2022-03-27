let arr = []

let str = {b22,a7,c3,a8}

for (let i = 0; i < 14; i++) {

    arr.push(Math.floor(Math.random() * 100));

}

const arr2 = str
    //.filter( value => value>50)
    //.map(value => value **2)
    .map( value => {
        if (charAt(0)===a)
            (Number(value.trimLeft(1)) % 4)
        if (charAt(0)===b)
            (Number(value.trimLeft(1)) / 2)
        if (charAt(0)===c)
            (Number(value.trimLeft(1)) * 4)
       
        
    }, [])

function printArray(arr) {
    arr.forEach((value, i, arr) => {

        console.log(`Элемент ${(i + 1)} из ${arr.length} ( ${(Math.round(((i + 1) / (arr.length)) * 100))} % пройдено) : ${value}`)
    });
};
console.log("____________________________________________________________________________________");
console.log(str)
console.log("____________________________________________________________________________________");
console.log(arr2)