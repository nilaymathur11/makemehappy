
// Index Page Script

$('#btn1').click(
    function () {
        $('#main_overlay').css('animation', 'main_overlay 1s 0s 1 ease-in forwards');
        $('#slide1').css('opacity', '1');
    }
);

$('#btn2').click(
    function () {
        $('#slide1').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide2').css('opacity', '1');
    }
);

$('#btn3').click(
    function () {
        $('#slide2').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide3').css('opacity', '1');
    }
);

$('#btn4').click(
    function () {
        $('#slide1').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn5').click(
    function () {
        $('#slide3').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide4').css('opacity', '1');
    }
);

$('#btn6').click(
    function () {
        $('#slide2').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn7').click(
    function () {
        $('#slide4').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide5').css('opacity', '1');
    }
);

$('#btn8').click(
    function () {
        $('#slide3').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn9').click(
    function () {
        $('#slide5').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide6').css('opacity', '1');
    }
);

$('#btn10').click(
    function () {
        $('#slide4').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn11').click(
    function () {
        $('#slide6').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide7').css('opacity', '1');
    }
);

$('#btn12').click(
    function () {
        $('#slide5').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn13').click(
    function () {
        $('#slide7').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide8').css('opacity', '1');
    }
);

$('#btn14').click(
    function () {
        $('#slide6').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn15').click(
    function () {
        $('#slide8').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide9').css('opacity', '1');
    }
);

$('#btn16').click(
    function () {
        $('#slide7').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn17').click(
    function () {
        $('#slide9').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide10').css('opacity', '1');
    }
);

$('#btn18').click(
    function () {
        $('#slide8').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn19').click(
    function () {
        $('#slide10').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide11').css('opacity', '1');
    }
);

$('#btn20').click(
    function () {
        $('#slide9').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn21').click(
    function () {
        $('#slide11').css('animation', 'slides 1s 0s 1 ease-in forwards');
        $('#slide12').css('opacity', '1');
    }
);

$('#btn22').click(
    function () {
        $('#slide10').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

$('#btn23').click(
    function () {
        $('#slide11').css('animation', 'slides_rev 1s 0s 1 ease-in-out forwards');
    }
);

// End of Index Page Script

// Home Page Script

var line = document.getElementById('menu_ico');
var cross = document.getElementById('menu_ico2');
var menu = document.getElementById('mob_menu');

function menu_open() {
    line.style.display = 'none';
    cross.style.display = 'block';
    menu.style.left = '0%';
}
function menu_close() {
    line.style.display = 'block';
    cross.style.display = 'none';
    menu.style.left = '100%';
}

// End of Home Page Script