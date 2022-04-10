
function displayStations(stations) {

    const listEl = document.getElementById('station-list')
    const template = document.getElementById('station-list__item');


    stations.forEach(station => {

        const el = template.content.cloneNode(true);
        console.log(station);
        fillTemplate(el, station);
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