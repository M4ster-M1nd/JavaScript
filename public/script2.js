
const arr = [
    createVagon('Cargo', 100),
    createVagon('liquid', 50),
    createVagon('Cargo', 100),
    createVagon('liquid', 50),
    createVagon('Cargo', 100),
    createVagon('liquid', 50),
    createVagon('Cargo', 100),
    createVagon('liquid', 50),
    createVagon('superCargo', 109),
    createVagon('liquid', 50),
];

console.log(arr);

function getTrainInfo(vagons) {
    return {
        count: vagons.length,
        types: {
            cargo: vagons
            .reduce((acc, value) => {

                if (!value.type){
                    value.type=0
                }
                
                    return acc + value.volume     
                
            }, 0)
        }
    }

}


function createVagon(type, volume) {

    return {
        type: type,
        volume: volume,
    };

}

console.log(getTrainInfo(arr));