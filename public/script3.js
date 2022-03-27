
const stationArray = [
    createStation(1),
    createStation(2),
    createStation(3),
    createStation(4),
    createStation(5),
];

const trainsArray = [
    createTrain(1,'cargo'),
    createTrain(2,'passenger'),
]

console.log(arr);


/*
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
*/

function createStation(id) {

    return {
        id
    };

}

function createTrain(id,type) {

    return {
        id,
        type
    };

}
function createRoute(name,stations) {

    return {
        name,
        stations_list
    };

}

function createRun(id,train,route,date) {

    return {
        id,
        train_id,
        route_name,
        date
    };

}

