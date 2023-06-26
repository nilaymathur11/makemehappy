
// Index Page Script

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const dog_txt1 = ['Hello My Friend, Welcome To MMH', 'My Name is mishi!'];
var user_name = '';
$('.slides').hide();
$('#btn1').attr('disabled', true);
$('.forward_btn').hide();

$(document).ready(
    function () {
        $("#dog_txt1").typed({
            strings: ["Greetings, my friend", "My Name is mishi!", "May I know your name ?"],
            typeSpeed: 1,
            startDelay: 1000,
            backSpeed: 1,
            backDelay: 500,
            loop: false,
            cursorChar: "|",
            contentType: 'html'
        });

        setTimeout(
            function () {
                $('#user_name').val('');
                $('.dog_1 .dog_sprite img').attr('src', "images/dog sprites/Asset 7.svg");
                $('#user_name').css('opacity', '1');
                $('#user_name').select();
                $('#user_name').keyup(function (e) {
                    if ((e.key == 'Enter') && (e.target.value != '')) {
                        user_name = $('#user_name').val();
                        $('#user_name').addClass('d-none');
                        $("#dog_txt1").remove();
                        $(".typed-cursor").eq(0).remove();
                        $("#dog_txt1_p2").removeClass('d-none');
                        $("#dog_txt1_p2").typed({
                            strings: [`Let's Start ${user_name}!`, "Click on make me happy"],
                            typeSpeed: 10,
                            startDelay: 0,
                            backSpeed: 1,
                            backDelay: 500,
                            loop: false,
                            cursorChar: "|",
                            contentType: 'html'
                        });
                        $('#btn1').attr('disabled', false);
                    }
                })
            }
            , 6200);

        $('.heart').click(
            function () {
                $('.heart').next().css('opacity', '0')
                $(this).addClass('d-none');
                $(this).next().css('opacity', '1');
            }
        );
    }
);

$('#btn1').click(
    function () {
        $('#main_overlay').css('animation', 'main_overlay 1s 0s 1 ease-in forwards');
        $('.slides').show();

        setTimeout(function () {
            $('.slide_lvl1 .welcome_div').append(user_name);
            $('.slide_lvl1 .welcome_div').css('opacity', '1');
        }, 500);

        setTimeout(function () {
            $('.slide_lvl1 .welcome_div').css('opacity', '0');
        }, 4000);

        setTimeout(function () {
            $('.slide_lvl1 .welcome_div').addClass('d-none');
            $('.dog_2').removeClass('d-none');
            $("#dog_txt2").typed({
                strings: [`${user_name} your journey`, "of happiness has started!", "click on the red heart"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 500,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });
        }, 5000);

        setTimeout(function () {
            $('.float_box1').removeClass('d-none');
            $('.heart').click(function () {
                $('.heart').hide();
                $('.heart_cont').removeClass('d-none');
            })
        }, 12000);

        $('.heart_cont_btn').click(function () {
            $('.float_box1').hide();
            $("#dog_txt2").next().remove();
            $("#dog_txt2").remove();
            $("#dog_txt2_p2").removeClass('d-none')
            $("#dog_txt2_p2").typed({
                strings: ["you can now just watch", "this beautiful animation", "or click on next button"],
                typeSpeed: 1,
                startDelay: 100,
                backSpeed: 1,
                backDelay: 500,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });
            setTimeout(function () {
                $('.dog_2').css('transition', '1s')
                $('.dog_2').css('opacity', '0');
                $('.forward_btn').show();
            }, 7000)
        });
    }
);

$('.forward_btn').click(
    function () {
        $('.forward_btn').hide();

        if ($('#slide2').hasClass('carousel-item-next')) {

            $('.dog_3').removeClass('d-none');

            $("#dog_txt3").typed({
                strings: [`time has stopped ${user_name}`, "just focus on this", "soothing flower animation", "alongwith peaceful music"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 2000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });

            setTimeout(function () {
                $('.dog_3').css('transition', '1s')
                $('.dog_3').css('opacity', '0');
                $('.forward_btn').show();
                $('.forward_btn').addClass('blue_bg');
            }, 14000);
        }

        else if ($('#slide3').hasClass('carousel-item-next')) {

            $('.dog_4').removeClass('d-none');

            $("#dog_txt4").typed({
                strings: [`I'm here for you ${user_name}`, "click on the door you see"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 1000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });

            setTimeout(function () {
                $('.float_box2').removeClass('d-none');
            }, 5500);

            $('.door').click(function () {
                $('.door').hide();
                $('.door_cont').removeClass('d-none');
            });

            $('.door_cont_btn').click(function () {
                $('.float_box2').hide();
                $("#dog_txt4").next().remove();
                $("#dog_txt4").remove();
                $("#dog_txt4_p2").removeClass('d-none');
                $("#dog_txt4_p2").typed({
                    strings: ["you can now just watch", "this beautiful animation", "or click on next button"],
                    typeSpeed: 1,
                    startDelay: 100,
                    backSpeed: 1,
                    backDelay: 500,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
                setTimeout(function () {
                    $('.dog_4').css('transition', '1s')
                    $('.dog_4').css('opacity', '0');
                    $('.forward_btn').removeClass('blue_bg');
                    $('.forward_btn').show();
                }, 7000)
            });
        }

        else if ($('#slide4').hasClass('carousel-item-next')) {

            setTimeout(function () {
                $('.slide_lvl2 .welcome_div').css('opacity', '1');
            }, 500);

            setTimeout(function () {
                $('.slide_lvl2 .welcome_div').css('opacity', '0');
                $('.dog_5').removeClass('d-none');
                $("#dog_txt5").typed({
                    strings: ["what you are seeing", `on the screen ${user_name} is`, "called a NOVA", "you can drag and zoom", "this NOVA even after I go"],
                    typeSpeed: 1,
                    startDelay: 1000,
                    backSpeed: 1,
                    backDelay: 1000,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
            }, 4000);

            setTimeout(function () {
                $('.slide_lvl2 .welcome_div').addClass('d-none');
                $('.dog_5').css('transition', '1s')
                $('.dog_5').css('opacity', '0');
                $('.slide4_bg').css('position', 'unset');
                $('.forward_btn').removeClass('blue_bg');
                $('.forward_btn').show();
            }, 18000);
        }

        else if ($('#slide5').hasClass('carousel-item-next')) {

            $('.dog_6').removeClass('d-none');
            $("#dog_txt6").typed({
                strings: ["writing down our thoughts", "helps our mind alot", "gives relief from stress,anxiety,", "suffering and so here i'm", "giving you a lantern on which", "you can write down your", "thoughts and feel relieved."],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 1000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });
            setTimeout(function () {
                $('.lantern_user textarea').val('');
                $('.lantern_user').css('opacity', '1');
            }, 22000);

            $('.lantern_submit').click(function () {
                $('.lantern_user').addClass('lantern_userafter');
                $('.lantern_user textarea').addClass('lantern_userafter_textarea');
                $('.lantern_user textarea').attr("disabled", true);
                $('.lantern_submit').hide();
                $('.lantern_ask').removeClass('d-none');
            })

            lantern_submit = () => {
                $('.lantern_user').addClass('lantern_userafter');
                $('.lantern_user textarea').addClass('lantern_userafter_textarea');
                $('.lantern_user textarea').attr("disabled", true);
                $('.lantern_submit').hide();
                $('.lantern_ask').removeClass('d-none');
            }

            $('.lantern_opt1').click(function () {
                $('.lantern_ask').addClass('d-none');
                $('#slide5 .slide_lvl .dog').append(
                    `
                        <div class="lantern_user opacity-100">
                        <img src="images/lantern.svg" alt=""> <br>
                        <textarea name="user_thoughts" id="user_thoughts" cols="25" rows="6" placeholder="Write Your Thoughts Here"></textarea> <br>
                        <button class="lantern_submit" onclick="lantern_submit()">Submit</button>
                        </div>
                    `
                )
            });

            $('.lantern_opt2').click(function () {
                $('.lantern_ask').addClass('d-none');
                $("#dog_txt6").next().remove();
                $("#dog_txt6").remove();
                $("#dog_txt6_p2").removeClass('d-none');
                $("#dog_txt6_p2").typed({
                    strings: ["you can sit here peacefully", "or click on forward button"],
                    typeSpeed: 1,
                    startDelay: 1000,
                    backSpeed: 1,
                    backDelay: 1000,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
                setTimeout(function () {
                    $('.dog_6').css('transition', '1s')
                    $('.dog_6').css('opacity', '0');
                    $('.forward_btn').addClass('blue_bg');
                    $('.forward_btn').show();
                }, 6000);
            })

            var lanterns = 0;
            var genlantern = setInterval(function () {
                $('.slide5_bg').append(`<div class="lantern"><img src="images/lantern.svg" alt=""></div>`);
                $('.lantern').eq(lanterns).css('left', Math.random() * 1500);
                lanterns++;
                if ($('#slide6').hasClass('carousel-item-next')) {
                    clearInterval(genlantern);
                }
            }, 1000)
        }

        else if ($('#slide6').hasClass('carousel-item-next')) {

            setTimeout(function () {
                $('#slide6 .welcome_div').append(user_name);
                $('#slide6 .welcome_div').css('opacity', '1');
            }, 500);

            setTimeout(function () {
                $('#slide6 .welcome_div').css('opacity', '0');
                $('.dog_7').removeClass('d-none');
                $("#dog_txt7").typed({
                    strings: [`isn't nature so peaceful ${user_name}?`, "I just thought of a poem", "River's tranquil embrace,", "Gently winding through time.", "Whispers of ancient tales,", "Flowing secrets untold.", "Nature's endless symphony,", "Eternal current's embrace.", `you can close your eyes ${user_name}`, "and feel the river flowing"],
                    typeSpeed: 1,
                    startDelay: 1000,
                    backSpeed: 1,
                    backDelay: 1000,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
            }, 4000);

            setTimeout(function () {
                $('#slide6 .welcome_div').addClass('d-none');
                $('.dog_7').css('transition', '1s')
                $('.dog_7').css('opacity', '0');
                $('.forward_btn').removeClass('blue_bg');
                $('.forward_btn').addClass('green_bg');
                $('.forward_btn').show();
            }, 36000);
        }

        else if ($('#slide7').hasClass('carousel-item-next')) {
            setTimeout(function () {
                $('#slide7 .welcome_div').css('opacity', '1');
            }, 500);

            setTimeout(function () {
                $('#slide7 .welcome_div').css('opacity', '0');
                $('.dog_8').removeClass('d-none');
                $("#dog_txt8").typed({
                    strings: [`do you remember the time ${user_name}`, "when you used to play a lot", "either outdoor or indoor games", "wasn't life fun till then?", "i want you to experience that feeling", "once again so i've gathered a few", "old retro games to try to make", "you relive those moments once again", "i'll go now but don't worry!", "i'll comeback for you again"],
                    typeSpeed: 1,
                    startDelay: 1000,
                    backSpeed: 1,
                    backDelay: 1000,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
            }, 6000);

            setTimeout(function () {
                $('#slide7 .welcome_div').addClass('d-none');
            }, 7000)

            setTimeout(function () {
                $('.dog_8').css('transition', '1s')
                $('.dog_8').css('opacity', '0');
                $('.forward_btn').removeClass('green_bg');
                $('.forward_btn').show();
            }, 42000);
        }

        else if ($('#slide8').hasClass('carousel-item-next')) {
            $('.dog_8').removeClass('d-none');
            $("#dog_txt8").typed({
                strings: ["this game is one of my favourites", "i hope you will like it too"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 1000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });

            setTimeout(function () {
                $('.dog_8').css('transition', '1s')
                $('.dog_8').css('opacity', '0');
                $('.forward_btn').removeClass('green_bg');
                $('.forward_btn').show();
            }, 6000);
        }

        else if ($('#slide9').hasClass('carousel-item-next')) {
            $('.dog_9').removeClass('d-none');
            $("#dog_txt9").typed({
                strings: ["i hope you are enjoying", "my selection of games", "if not i'm really sorry", "suggest me some good games", "and i'll try to add them"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 1000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });

            setTimeout(function () {
                $('.dog_9').css('transition', '1s')
                $('.dog_9').css('opacity', '0');
                $('.forward_btn').removeClass('green_bg');
            }, 15000);
        }

        else {
            $('.forward_btn').hide();
        }
    }
);


// End of Index Page Script

// Home Page Script

var line = document.getElementById('menu_ico');
var cross = document.getElementById('menu_ico2');
var menu = document.getElementById('mob_menu');
var body = document.querySelector('body');

function menu_open() {
    line.style.display = 'none';
    cross.style.display = 'block';
    menu.style.left = '0%';
    body.style.overflow = 'hidden';
}
function menu_close() {
    line.style.display = 'block';
    cross.style.display = 'none';
    menu.style.left = '100%';
    body.style.overflow = 'unset';
}

// End of Home Page Script