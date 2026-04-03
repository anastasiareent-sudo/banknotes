// Данные о российских банкнотах
const banknotesData = [
    {
        value: 5,
        city: 'Великий Новгород',
        region: 'Новгородская область',
        emoji: '🏰',
        image: 'images/5r_97_av.jpg',
        secondImage: 'images/5r_97_rv.jpg',
        date: '1997',
        coords: [58.521174,31.275299],
        panoramaCoords: [58.521174,31.275299],
        landmarks: [
            'Памятник "Тысячелетие России"',
            'Софийский собор',
            'Стена Новгородского кремля'
        ],
        description: 'Лицевая сторона:<br>На лицевой стороне купюры в 5 рублей запечатлен памятник «Тысячелетие России». Этот грандиозный бронзовый колокол, воздвигнутый в 1862 году, словно каменная книга, где в скульптурах запечатлены ключевые вехи истории страны — от варяжского призвания до великих деятелей. За ним возвышается строгий и величественный Софийский собор — древнейший каменный храм России, который на протяжении веков оставался символом мудрости и духовного центра Новгорода. <br>Оборотная сторона:<br>На оборотной стороне — крепостная стена Новгородского кремля (Детинца) , олицетворяющая несокрушимость и верность традициям этого древнего города.',
        geography: 'Великий Новгород — один из древнейших городов России, «колыбель русской демократии» и место, где зарождалась российская государственность. Здесь веками звучало вече, а каменные храмы хранят память о первых страницах отечественной истории.'
    },
    {
        value: 10,
        city: 'Красноярск',
        region: 'Красноярский край',
        emoji: '🏛️',
        image: 'images/10r_04_av.jpg',
        secondImage: 'images/10r_04_rv.jpg',
        date: '2004',
        coords: [56.023568, 92.859657],
        panoramaCoords: [56.023568, 92.859657],
        landmarks: [
            'Коммунальный мост через Енисей',
            'Часовня Параскевы Пятницы',
            'Плотина Красноярской ГЭС'
        ],
        description: 'Лицевая сторона (Красноярск): <br>Здесь запечатлен символ города — Часовня Параскевы Пятницы, стоящая на вершине Караульной горы. Именно с этого места открывается самый знаменитый вид на сибирский мегаполис. Слева от часовни можно увидеть ажурный пролет Коммунального моста, который в момент постройки считался самым длинным в Азии и соединил два берега Енисея в единое целое. <br>Оборотная сторона (Техногенный символ):<br> На обратной стороне доминирует величественное сооружение — Красноярская гидроэлектростанция (ГЭС). Это не просто индустриальный объект, а настоящий шедевр инженерной мысли, одно из крупнейших гидротехнических сооружений России, олицетворяющее мощь и энергию сибирского края.',
        geography: 'Красноярск — это сердце Сибири, город, где суровая мощь природы встречается с величием человеческой мысли. Раскинувшийся по берегам одного из самых могучих рек мира — Енисея, он славится своими просторами, индустриальной романтикой и удивительными видами, которые и увековечены на десятирублевой купюре.'
    },
    {
        value: 50,
        city: 'Санкт-Петербург',
        region: 'Ленинградская область',
        emoji: '🏛️',
        image: 'images/50r_04_av.jpg',
        secondImage: 'images/50r_04_rv.jpg',
        date: '2004',
        coords: [59.944757, 30.304814],
        panoramaCoords: [59.944757, 30.304814], // Ростральная колонна
        landmarks: [
            'Ростральная колонна',
            'Скульптура девы-Невы у подножия Ростральной колонны',
            'Петропавловская крепость',
            'Стрелка Васильевского острова'
        ],
        description: 'Лицевая сторона (Санкт-Петербург): <br>В основании композиции — Ростральная колонна, увенчанная факелом-маяком, символизирующая морское могущество России. За её спиной возвышается шпиль Петропавловского собора — самой высокой доминанты города, где покоятся останки российских императоров.<br>Оборотная сторона (Санкт-Петербург):<br>Взгляд открывается на стрелку Васильевского острова: здесь на фоне широкой глади Невы расположено монументальное здание Биржи (ныне Военно-морской музей), окруженное гранитной набережной.',
        geography: 'Санкт-Петербург - Северная столица, город белых ночей и разводных мостов. Он застыл на берегах Невы, словно строгий и величественный музей под открытым небом, где каждая набережная дышит историей, а классический силуэт города узнаваем во всем мире.'
    },
    {
        value: 100,
        city: 'Москва',
        region: 'Московская область',
        emoji: '🎭',
        image: 'images/100r_22_av.jpg',
        secondImage: 'images/100r_22_rv.jpg',
        date: '2022',
        coords: [55.753865, 37.620393],
        panoramaCoords: [55.753865, 37.620393], // Большой театр
        landmarks: [
            'Спасская башня Московского Кремля',
            'Парк «Зарядье»',
            'Останкинская и Шуховская башни',
            'Здание МГУ',
            'Ржевский мемориал Советскому Солдату на фоне Куликова поля.'
        ],
        description: 'Лицевая сторона:<br> На фоне панорамы Московского Кремля изображена Московская государственная академическая филармония. В левой части купюры расположен фрагмент Ржевского мемориала Советскому солдату — величественного памятника, олицетворяющего память о героях Великой Отечественной войны.<br>Оборотная сторона:<br> Здесь представлен архитектурный ансамбль современной Москвы. В центре — главное здание МГУ им. М. В. Ломоносова на Воробьевых горах, символ отечественного образования и науки. Справа от него расположен парк «Зарядье» с уникальным концертным залом и парящим мостом, олицетворяющий единение истории и инноваций.',
        geography: 'Москва — это город контрастов, где древние кремлевские стены соседствуют с футуристичными небоскребами. Это динамичный мегаполис, который бережно хранит историю, но уверенно смотрит в будущее. Здесь каждый камень дышит временем, а ритм жизни задает Красная площадь — главная площадь страны.'
    },
    {
        value: 200,
        city: 'Севастополь',
        region: 'Республика Крым',
        emoji: '⚓',
        image: 'images/200r_17_av.jpg',
        secondImage: 'images/200r_17_rv.jpg',
        date: '2017',
        coords: [44.61814, 33.524523],
        panoramaCoords: [44.61814, 33.524523],
        landmarks: [
            'Памятник затопленным кораблям',
            'Херсонес Таврический'
        ],
        description: 'Лицевая сторона:<br>Главный символ города — Памятник затопленным кораблям. Белоснежная колонна с бронзовым орлом возвышается прямо из морской глади Севастопольской бухты, олицетворяя собой несгибаемый дух и трагическую страницу истории.<br>Оборотная сторона:<br>Взгляд устремлён к древней земле — Херсонесу Таврическому. Здесь изображён Владимирский собор, увенчанный куполами, и античные колонны, напоминающие о том, что именно в этом месте зарождалась русская вера и начиналась история великого государства.',
        geography: 'Севастополь - это город морской славы, каменной твердыни и античного величия. Здесь история высечена в скалах, а воздух пропитан солёным ветром и доблестью флота. Севастополь — это не просто город на карте, это символ мужества, вечной памяти и неповторимой красоты бухт, укрытых зелёными мысами.'
    },
    {
        value: 500,
        city: 'Архангельск',
        region: 'Архангельская область',
        emoji: '⛪',
        image: 'images/500r_10_av.jpg',
        secondImage: 'images/500r_10_rv.jpg',
        date: '2010',
        coords: [64.536781, 40.511148],
        panoramaCoords: [64.536781, 40.511148],
        landmarks: [
            'Памятник Петру I',
            'Соловецкий монастырь'
        ],
        description: 'Лицевая сторона:<br> На переднем плане возвышается памятник Петру I. Император изображён на фоне Морского-речного вокзала — символической арки, через которую столетиями отправлялись исследователи Арктики. Цвет купюры — насыщенный фиолетово-красный, подчёркивающий величие северной столицы.<br>Оборотная сторона: <br>Здесь расположен Соловецкий монастырь. Этот уникальный ансамбль, застывший среди холодных вод Белого моря, олицетворяет собой духовную твердыню, историю и суровую красоту Русского Севера.',
        geography: 'Архангельск — это первые морские ворота России, город, где сливаются могучие воды Северной Двины и суровое дыхание Белого моря. Это колыбель русского кораблестроения и центр поморской культуры, хранящий дух арктических открытий.'
    },
    {
        value: 1000,
        city: 'Казань и Нижний Новгород',
        region: 'Приволжский федеральный округ и республика Татарстан',
        emoji: '⛪',
        image: 'images/1000r_25_av.jpg',
        secondImage: 'images/1000r_25_rv.jpg',
        date: '2023',
        coords: [56.328437, 44.003111],
        panoramaCoords: [56.325043, 44.000459],
        landmarks: [
            'Никольская башня нижегородского Кремля',
            'Здание Нижегородской ярмарки',
            'Cтадион «Нижний Новгород»',
            'Дворец земледельцев',
            'Быстроходное судно «Метеор-120Р»',
            'Саратовский мост',
            'Карта слияния Оки и Волги'
        ],
        description: 'Лицевая сторона:<br>На лицевой стороне купюры возвышается Никольская башня Нижегородского кремля — символ оборонительной мощи и древней истории города. Рядом с ней расположено величественное здание Нижегородской ярмарки, напоминающее о былом торговом величии города.<br> Оборотная сторона:<br>На оборотной стороне разворачивается панорама современного и исторического Нижнего: Здесь можно увидеть карту слияния Оки и Волги — главной водной артерии России.Через реку перекинулся легендарный Саратовский мост, долгое время считавшийся самым длинным в Европе.По волнам скользит быстроходное судно «Метеор-120Р» — символ советского и российского речного флота на подводных крыльях.На берегу возвышается величественный Дворец земледельцев — одно из самых узнаваемых современных зданий города.Завершает композицию современный стадион «Нижний Новгород», построенный к чемпионату мира по футболу, олицетворяющий динамичное развитие региона.',
        geography: 'Казань — это уникальный сплав древности и современности, где уютно соседствуют строгие минареты мечети Кул-Шариф и православные купола Благовещенского собора. Город, расположившийся на берегах великой Волги, встречает гостей своим гостеприимством и энергией, а его сердце — белокаменный Казанский кремль — хранит память о многовековой истории Татарстана.<br>Нижний Новгород — это город-купец, город-труженик, гордо раскинувшийся у места слияния двух великих рек: Оки и Волги. Здесь стремительная современность переплетается с богатым историческим наследием. С высоких стен нижегородского кремля, словно в ладонях, открывается захватывающая панорама волжских далей и легендарных архитектурных сооружений.'
    },
    {
        value: 2000,
        city: 'Владивосток',
        region: 'Приморский край',
        emoji: '🌉',
        image: 'images/2000r_17_av.jpg',
        secondImage: 'images/2000r_17_rv.jpg',
        date: '2017',
        coords: [43.065193, 131.910736], 
        panoramaCoords: [43.067611, 131.916907], 
        landmarks: [
            'Русский мост',
            'Космодром Восточный',
            'Дальневосточный федеральный университет (ДВФУ)'
        ],
        description: 'Лицевая сторона:<br>На лицевой стороне купюры в 2000 рублей изображен главный символ современного Владивостока — Русский мост. Это один из самых больших вантовых мостов в мире, соединяющий материк с островом Русский. На переднем плане справа расположен кампус Дальневосточного федерального университета (ДВФУ) — инновационного образовательного кластера, построенного к саммиту АТЭС.<br> Оборотная сторона: <br>На оборотной стороне представлен взгляд в будущее российской космонавтики — космодром «Восточный». Изображение стартового комплекса символизирует мощь и технологический потенциал страны, устремленный к звездам с восточных рубежей России.',
        geography: 'Владивосток — форпост России на Тихом океане, город, где сопки встречаются с морем, а Европа органично переплетается с Азией. Это один из самых живописных мегаполисов страны, славящийся своей морской романтикой, футуристическими мостами и уникальной атмосферой портового города.'
    },
    {
        value: 5000,
        city: 'Екатеринбург, Челябинск и Селехард',
        region: 'Свердловская область, Чеябинская область и Ямало-Ненецкий автономный округ',
        emoji: '🌉',
        image: 'images/5000r_23_av.jpg',
        secondImage: 'images/5000r_23_rv.jpg',
        date: '2023',
        coords: [56.832098,60.3507238],
        panoramaCoords: [56.831561, 60.350746],
        landmarks: [
            'Cтела «Европа-Азия»',
            'Дом Севастьянова',
            'Памятник «Сказ об Урале»',
            'Стела «66 параллель»'
        ],
        description: 'Лицевая сторона (Екатеринбург):<br>На переднем плане изображена стела «Европа-Азия» — знаменитый обелиск на границе двух континентов. За ним открывается панорама города:  Здание Дома Севастьянова с его изумрудным ажурным литьем.<br>Оборотная сторона (Челябинск и Салехард):<br>Символическое путешествие на восток. В центре — памятник «Сказ об Урале» в Челябинске: могучая фигура кузнеца, олицетворяющая мощь и труд Уральского края. Слева от него — стела «66 параллель» в Салехарде, обозначающая вход в Арктику и уникальное географическое положение города на Полярном круге.',
        geography: 'Екатеринбург-столица Урала, город-завод, ставший городом-легендой. Это мощный промышленный центр, где суровая индустриальная эстетика гармонично переплетается с авангардной архитектурой и местом силы на границе двух частей света.<br>Челябинск-город с характером, известный своей индустриальной мощью и невероятной душевной теплотой. Танкоград, превратившийся в современный мегаполис, где металл плавится в тиглях заводов, а сердца горожан остаются открытыми.<br>Салехард-единственный в мире город, расположенный прямо на Полярном круге. Столица Ямала, суровый и прекрасный край вечной мерзлоты, где деревянные дома соседствуют с высокими технологиями, а природа Арктики завораживает своей первозданной мощью.'
    }
];

let mapInstance = null;
let panoramaPlayer = null;
let panoramaResizeHandler = null;
let currentBanknote = null;

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    const banknotesGrid = document.getElementById('banknotesGrid');
    
    // Создание карточек банкнот
    banknotesData.forEach(banknote => {
        const card = createBanknoteCard(banknote);
        banknotesGrid.appendChild(card);
    });
    
    // Инициализация модального окна
    initModal();

    // Инициализация кнопки сравнения
    initCompareModal();

    // Инициализация карты, когда API готов
    if (window.ymaps) {
        ymaps.ready(initMap);
    }
});

// Создание карточки банкноты
function createBanknoteCard(banknote) {
    const card = document.createElement('div');
    card.className = 'banknote-card';
    card.onclick = () => {
        openModal(banknote);
        focusOnMap(banknote);
    };

    const imageHTML = banknote.image
        ? `<img src="${banknote.image}" alt="${banknote.value} рублей — ${banknote.city}" loading="lazy">`
        : `${banknote.emoji} ${banknote.value}₽`;
    
    card.innerHTML = `
        <div class="banknote-image">${imageHTML}</div>
        <div class="banknote-info">
            <div class="banknote-value">${banknote.value} рублей</div>
            <div class="banknote-city">${banknote.city}</div>
            <div class="banknote-region">${banknote.region}</div>
        </div>
    `;
    
    return card;
}

// Инициализация модального окна
function initModal() {
    const modal = document.getElementById('banknoteModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Закрытие по клавише ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Открытие модального окна с информацией о банкноте
function openModal(banknote) {
    const modal = document.getElementById('banknoteModal');
    
    // Находим элементы ВНУТРИ модалки
    const modalHeader = modal.querySelector('.modal-header');
    const modalBody = modal.querySelector('.modal-body');
    
    const modalImage = banknote.image
        ? `<img class="modal-image" src="${banknote.image}" alt="${banknote.value} рублей">`
        : `<div class="banknote-image">${banknote.emoji} ${banknote.value}₽</div>`;
    
    const secondModalImage = banknote.secondImage
        ? `<img class="modal-image" src="${banknote.secondImage}" alt="${banknote.value} рублей (оборот)">`
        : '';
    
    // Заполняем ТОЛЬКО .modal-body
    modalBody.innerHTML = `
        <div class="images-container">
            ${modalImage}
            ${secondModalImage ? `<div class="image-separator"></div>${secondModalImage}` : ''}
        </div>
        
        <div class="info-section">
            <h3>О городе</h3>
            <p>${banknote.geography}</p>
        </div>
        
        <div class="info-section">
            <h3>Описание</h3>
            <p>${banknote.description}</p>
        </div>
        
        <div class="info-section">
            <h3>Дата ввода в обращение</h3>
            <p>${banknote.date} год</p>
        </div>
        
        <div class="info-section">
            <h3>Достопримечательности</h3>
            <ul>
                ${banknote.landmarks.map(landmark => `<li>${landmark}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Обновляем заголовок
    if (modalHeader) {
        modalHeader.querySelector('h2').textContent = `${banknote.emoji} ${banknote.value} рублей`;
        modalHeader.querySelector('.modal-subtitle').textContent = `${banknote.city}, ${banknote.region}`;
    }
    
    modal.style.display = 'block';
    focusOnMap(banknote);
}

// Инициализация карты Яндекс
function initMap() {
    const defaultCenter = [61.524, 99.142]; // геоцентр России
    mapInstance = new ymaps.Map('map', {
        center: defaultCenter,
        zoom: 4,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'geolocationControl']
    });

    banknotesData.forEach(banknote => {
        const placemark = new ymaps.Placemark(
            banknote.coords,
            {
                hintContent: `${banknote.value}₽ — ${banknote.city}`,
                balloonContent: `<strong>${banknote.value} ₽</strong><br>${banknote.city}<br>${banknote.region}`
            },
            { preset: 'islands#violetIcon' }
        );

        placemark.events.add('click', () => {
            openModal(banknote);
            focusOnMap(banknote);
        });

        banknote.placemark = placemark;
        mapInstance.geoObjects.add(placemark);
    });

    // Авто-фокус на первой метке
    if (banknotesData.length > 0) {
        focusOnMap(banknotesData[0]);
    }
}

// Фокус карты и панорама по выбранной купюре
function focusOnMap(banknote) {
    if (!mapInstance || !banknote || !banknote.coords) return;

    mapInstance.setCenter(banknote.coords, 12, { duration: 300 });
    if (banknote.placemark) {
        banknote.placemark.balloon.open();
    }

    updateComparisonPanel(banknote);
    loadPanorama(banknote);
}

// Обновление панели сравнения
function updateComparisonPanel(banknote) {
    currentBanknote = banknote;
    const selected = document.getElementById('selectedBanknote');
    selected.innerHTML = `
        <span class="value">${banknote.emoji} ${banknote.value} ₽</span>
        <span class="city">${banknote.city}, ${banknote.region}</span>
        <span class="small-text">Сравните панораму с изображением на банкноте</span>
    `;
}

// Загрузка панорамы рядом с меткой
function loadPanorama(banknote) {
    const panoramaContainer = document.getElementById('panorama');
    if (!window.ymaps || !ymaps.panorama || !panoramaContainer) return;

    const coords = banknote.panoramaCoords || banknote.coords;

    ymaps.panorama.locate(coords).then(
        (panoramas) => {
            if (!panoramas || !panoramas.length) {
                panoramaContainer.textContent = 'Панорама не найдена для этой точки.';
                return;
            }

            if (panoramaPlayer) {
                panoramaPlayer.destroy();
            }

            panoramaPlayer = new ymaps.panorama.Player('panorama', panoramas[0], {
                controls: ['zoomControl', 'fullscreenControl']
            });

            // Зафиксировать размер плеера под контейнер
            const resizePlayer = () => {
                if (!panoramaPlayer) return;
                const w = panoramaContainer.clientWidth || 0;
                const h = panoramaContainer.clientHeight || 0;
                if (w && h) {
                    panoramaPlayer.setSize([w, h]);
                }
            };
            resizePlayer();

            panoramaContainer.textContent = '';

            if (!panoramaResizeHandler) {
                panoramaResizeHandler = () => resizePlayer();
                window.addEventListener('resize', panoramaResizeHandler);
            }
        },
        (error) => {
            panoramaContainer.textContent = 'Панорама недоступна.';
        }
    );
}

// Инициализация кнопки сравнения
function initCompareModal() {
    const compareButton = document.getElementById('compareButton');
    const panoramaContainer = document.getElementById('panorama');

    compareButton.onclick = () => {
        if (!currentBanknote) {
            alert('Сначала выберите банкноту для сравнения.');
            return;
        }

        // Если overlay уже есть, убрать
        const existingOverlay = document.querySelector('.panorama-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
            const existingSlider = document.querySelector('.panorama-slider');
            if (existingSlider) existingSlider.remove();
            compareButton.classList.remove('active');
            compareButton.textContent = 'Сравнить';
            panoramaContainer.style.setProperty('--value', '100%');
            return;
        }

        // Добавить overlay с купюрой
        const overlay = document.createElement('div');
        overlay.className = 'panorama-overlay';
        const img = document.createElement('img');
        img.src = currentBanknote.image;
        img.style.objectFit = 'fill';
        img.style.width = '100%';
        img.style.height = '100%';
        overlay.appendChild(img);
        panoramaContainer.appendChild(overlay);

        // Добавить слайдер
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '100';
        slider.value = '50';
        slider.className = 'panorama-slider';
        panoramaContainer.appendChild(slider);

        // Установить начальное значение
        panoramaContainer.style.setProperty('--value', slider.value + '%');

        // Обработчик изменения слайдера
        slider.addEventListener('input', (e) => {
            panoramaContainer.style.setProperty('--value', e.target.value + '%');
        });

        // Изменить кнопку
        compareButton.classList.add('active');
        compareButton.textContent = 'Отменить сравнение';
    };
}
