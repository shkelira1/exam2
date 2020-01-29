var map;

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: new google.maps.LatLng(40.7587402, -73.9786736),
            zoom: 14,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });

    var iconBase =
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

    var icons = {

        library: {
            icon: iconBase + 'library_maps.png'
        },

    };

    var features = [
        {
            position: new google.maps.LatLng(40.7587402, -73.9786736),
            type: 'library'
        }
    ];


    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    }
    ;
}

$(document).ready(function () {
    $('.main_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipe: false,
        dots: true,
        arrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    swipe: true,
                }
            },
        ],
    });
    $('.news_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrow: true,
        dots: true,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 4000,
        prevArrow: '<button class="slick-arrow slick-prev "><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next "><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ],
    });
    $(".header_link_data").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);

    });
    $('.btn-down-js').on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 100 }, 1500);

    });

    $('.header_link_data').click(function (event) {
        if ($('.header_link_data').hasClass('active')) {
            $('.header_link_data').removeClass('active');
        }
        ;
        if ($('body').hasClass('active')) {
            $('body').removeClass('active');
        }
        if ($('.btn').hasClass('active')) {
            $('.btn').removeClass('active');
        }

        $(this).addClass('active');
    });
    $('.btn').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('active');
        $(this).toggleClass('active');
    })

});
$(window).scroll(function () {
    $('.anim').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass('bounceInLeft');
        }
    });
});
