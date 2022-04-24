
const stationArray = [
    createStation('Краснодар'),
    createStation('Ростов-на-Дону'),
    createStation('Майкоп'),
    createStation('Адлер'),
    createStation('Кисловодск'),
    createStation('Владивосток'),
    createStation('Ульяновск')
];

const trainsArray = [
    createTrain(1, 'Грузовой'),
    createTrain(2, 'Пассажирский'),
]

const routeArray = [
   createRoute('Ростов -Адлер -Владивосток -Ульяновск', [2,4,6,7]),
   createRoute('Краснодар -Майкоп -Кисловодск -Ульяновск', [1,3,5,7]),
   createRoute('Ульяновск -Майкоп -Владивосток', [7,3,6]),
   createRoute('Краснодар -Кисловодск -Ростов-на-Дону', [1,5,2])
]