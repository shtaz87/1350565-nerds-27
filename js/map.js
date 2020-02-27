ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938635, 30.323118],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div>$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Nёrds design studio, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [80, -100]
        })
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});  