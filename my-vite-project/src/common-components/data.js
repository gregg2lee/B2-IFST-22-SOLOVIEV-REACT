const resident_evil_4 = {
    id: 1,
    name: "Resident Evil 4",
    price: 3999,
    features: [
        ["Переиздание Resident Evil 4 с улучшенной графикой и текстурами однозначно заслуживает вашего внимания", "Это по-прежнему один из лучших хоррор-экшенов. Тут не банальные зомби, а ловкие крестьяне-культисты, которые, однако, пугают не меньше. Врагов много, а аптечек не очень, так что игра постоянно щекочет нервы – сможете ли выжить или нет?"],
        ["Прекрасная анимация и перерисованные текстуры", "Выстрелы из дробовиков, рукопашные драки – вы увидите настоящий танец смерти. Танец будет в паре: значительную часть игры вас будет сопровождать спасаемая вами дочь президента. О ней придется заботиться, что тоже прибавляет адреналина."],
    ],
    description: "Испанские страсти и пули.",
    img: "public/re4.jpg",
    rating: 0
};

const silent_hill_2 = {
    id: 2,
    name: "Silent Hill 2",
    price: 7999,
    features: [
        ["Переживите культовую историю ужасов в Silent Hill 2", "Насладитесь до жути реалистичными визуальными эффектами и звучанием культовой игры в жанре психологического ужаса на выживание и, по мнению многих, лучшей игру серии Silent Hill."],
        ["Исследуйте удивительный мир", "Вы повстречаетесь с кошмарными монстрами, зловещим Пирамидоголовым и на вид обычными обывателями с мрачным прошлым."],
    ],
    description: "В моих беспокойных снах... я вижу этот город - Сайлент Хилл.",
    img: "public/sh2.png",
    rating: 0
};

const hitman_contracts= {
    id: 3,
    name: "Hitman Contracts",
    price: 1999,
    features: [
        ["Путешествуйте по миру", "Уничтожейте международных террористов и главарей преступного мира, отмеченных в вашем списке целей."],
        ["Импровизируйте на работе", "Выполняйте свои задания так, как вам больше нравится. Меняйте облик и используйте окружение в качестве оружия"],
    ],
    description: "Тут нет правил... только контракт, подписанный кровью.",
    img: "public/contracts.jpg",
    rating: 0
};

const gothic_2= {
    id: 4,
    name: "Gothic 2",
    price: 4999,
    features: [
        ["Более 100 увлекательных миссий", "Прямое продолжение ставшей вечной классикой Gothic 1 от Piranha Bytes начинает свое повествование спустя 2 недели после происшествий первой части."],
        ["Включает официальное дополнение 'Ночь Ворона'", "Десятки часов захватывающих приключений по огромному открытому миру обеспечены всем и каждому."],
    ],
    description: "Спасите человечество от сил зла.",
    img: "public/g2.jpeg",
    rating: 0
};

const half_life = {
    id: 5,
    name: "Half Life",
    price: 9999,
    features: [
        ["Сюжет развивается полностью внутри игрового пространства без использования видеозаставок", "Игровые издания высоко оценили новаторский стиль повествования, являющийся главным достоинством игры."],
        ["Лабораторные ужасы", "Действие игры происходит в гигантском сверхсекретном научно-исследовательском комплексе Чёрная Меза, который находится в недрах горы, расположенной в американском штате Нью-Мексико."],
    ],
    description: "Культовый шутер от первого лица о молодом ученом в экспериментальном бронескафандре, который сражается с зомби и инопланетянами, попавшими на Землю после неудачного научного эксперимента.",
    img: "public/hl1.jpg",
    rating: 0
};

const doom_3 = {
    id: 6,
    name: "Doom 3",
    price: 7999,
    features: [
        ["Сразитесь с ужасающими монстрами", "Зомби, демоны, упыри и прочая нечисть заполонили базу на Марсе! Ты - единственная надежда Марса, солдат."],
        ["Используйте расширенный арсенал оружия", "Арсенал в игре очень общирен. От кулаков и пистолета, до пулемёта с ракетницами. Вишенка на торте - душекуб, который будет питать вас мощью поверженных врагов!"],
    ],
    description: "Армия ада захватила научную базу Объединенной Аэрокосмической Корпорации на Марсе, и вы оказались среди немногих выживших. Теперь вам предстоит пройти через пекло и обратно, сокрушив полчища демонов.",
    img: "public/doom3.jpg",
    rating: 0
};

const videogames = [resident_evil_4, silent_hill_2, hitman_contracts, gothic_2, half_life, doom_3];
export default videogames;