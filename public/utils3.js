let _stationIds = 1

function createStation(name) {

    if (!name)
        throw new Error('Станция не может иметь пустое название')
    return {
        id: _stationIds++,
        name,
    };

}

let _trainIds = 1

function createTrain(id, type) {

    return {
        id: _trainIds++,
        type
    };

}

let _routeIds = 1

function createRoute(name, stations) {

    return {
        id: _routeIds++,
        name,
        stations_list
    };

}

let _runIds = 1

function createRun(id, train, route, date) {

    return {
        id: _runIds++,
        trainId,
        routeId,
        date
    };

}
