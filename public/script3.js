
function displayStations(stations) {

    const listEl = document.getElementById('station-list')
    const template = document.getElementById('station-list__item');
    Array.from(listEl.getElementsByTagName('li')).forEach(el => el.remove());

    stations.forEach(station => {

        const el = template.content.cloneNode(true);
        console.log(station);
        const li = el.querySelector('li');
        li.dataset.stationId = station.id;
        fillTemplate(el, station);
        listEl.appendChild(el);


    });
}

function displayRoutes(routes) {

    const listEl = document.getElementById('route-list')
    const template = document.getElementById('route-list__item');


    routes.forEach(route => {

        const el = template.content.cloneNode(true);
        const li = el.querySelector('li');
        li.dataset.routeId = route.id;

        fillTemplate(el, route);
        listEl.appendChild(el);


    });
}


function fillTemplate(element, data) {

    const source = element.dataset && element.dataset.source

    if (source) {
        const text = data[source];
        element.innerHTML = text;

    }

    Array.from(element.children).forEach(el => fillTemplate(el, data))

}

displayStations(stationArray);
displayRoutes(routeArray);


const routeList = document.getElementById("route-list");

const func = (event) => {
    const li = event.composedPath().find(el => el.dataset && el.dataset.routeId)
    if (!li) {
        return;
    }
    const routeId = +li.dataset.routeId;
    console.log(routeId);
    const route = routeArray.find(item => item.id === routeId)


    const stations = route.stationsIds.map(
        stationId => stationArray.find(
            station => station.id === stationId
        )
    );
    displayStations(stations);
}

routeList.addEventListener('click', func)

const form = document.getElementById("form");
form.addEventListener('submit', (event) =>{
    event.preventDefault();
/*дз найти маршруты по поиску с кнопкой поиска
 на 2 города (contains, lower case) без пересадок*/
    const src = form.elements.src.value;   
    const dst = form.elements.dst.value;
    console.log(src,dst);
})