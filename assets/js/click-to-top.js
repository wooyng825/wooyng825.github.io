$(document).ready(function() {
    let offset = 100,
            scroll_top_duration = 700,
            $go_top = $('.gotop'),
            $thedial = $('.dial'),
            $progress_circle = $('.progress-circle');

    // Initialize the progress-dial
    $thedial.knob( {
        'min' : 0,
        'max' : 100,
        'width' : 70,
        'height' : 70,
        'bottom' : 300,
        'fgColor' : '#3366ff',
        'skin' : 'tron',
        'thickness' : .08,
        'displayInput' : false,
        'displayPreview' : false,
        'readOnly' : true
    });

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $progress_circle.addClass('is-visible') : $progress_circle.removeClass('is-visible');
        let s = $(window).scrollTop(),
                d = $(document).height(),
                c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;

        $('.dial').val(scrollPercent).change();
    });

    // Click to top
    $go_top.on('click', function(e) {
        e.preventDefault();
        $('body,html').animate( {
            scrollTop: 0 ,
        }, scroll_top_duration);
    });
});


const arrow = document.getElementById('top-btn');
const bg = document.getElementById('gotop');

bg.addEventListener("mouseover", (event) => {
    arrow.style.color = "red";
});

bg.addEventListener("mouseout", (event) => {
    arrow.style.color = "white";
});