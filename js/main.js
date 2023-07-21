
// Index Page Script
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var slide1_vid = document.querySelector('#slide1_vid');
slide1_vid.preload = "auto";
var slide6_vid = document.querySelector('#slide6_vid');
slide6_vid.preload = "auto";
var slide10_vid = document.querySelector('#slide10_vid');
slide10_vid.preload = "auto";

const games_pc = ['https://www.miniplay.com/embed/super-mario-bros', 'https://www.miniplay.com/embed/super-bomberman', 'https://www.miniplay.com/embed/space-adventure-pinball'];
const games_mob = ['https://www.miniplay.com/game/super-mario-bros/play', 'https://www.miniplay.com/game/super-bomberman/play', 'https://www.miniplay.com/embed/space-adventure-pinball'];

var winWidth = window.innerWidth;

const sound1 = new Howl({
    src: ['../audio/main.mp3'],
    loop: true
});
const sound2 = new Howl({
    src: ['../audio/slide1.mp3'],
    loop: true
});
const sound3 = new Howl({
    src: ['../audio/slide2.mp3'],
    loop: true
});
const sound4 = new Howl({
    src: ['../audio/slide3.mp3'],
    loop: true
});
const sound5 = new Howl({
    src: ['../audio/slide4.mp3'],
    loop: true
});
const sound6 = new Howl({
    src: ['../audio/slide5.mp3'],
    loop: true
});
const sound7 = new Howl({
    src: ['../audio/slide6.mp3'],
    loop: true
});
const sound8 = new Howl({
    src: ['../audio/slide7.mp3'],
    loop: true
});
const sound9 = new Howl({
    src: ['../audio/slide10.mp3'],
    loop: true
});

const cat_txt1 = ['Hello My Friend, Welcome To MMH', 'My Name is Tikki!'];
var user_name = '';
$('#btn1').attr('disabled', true);
$('.forward_btn').fadeOut();
$('.logo_slide').fadeOut();
Howler.volume(0.5);

function hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}
$(document).ready(
    function () {
        $('#main_overlay').css('display', 'unset');
        $("#cat_txt1").typed({
            strings: ["Greetings, my friend", "My Name is Tikki", "May I know your name ?"],
            typeSpeed: 1,
            startDelay: 1000,
            backSpeed: 1,
            backDelay: 500,
            loop: false,
            cursorChar: "|",
            contentType: 'html'
        });
        var check_tikki = setInterval(function () {
            if ($("#cat_txt1").html() == 'May I know your name ?') {
                clearInterval(check_tikki);
                $('#user_name').val('');
                $('.cat_1 .cat_sprite img').attr('src', "images/cat sprites/Asset3.webp");
                $('.user_name_div').css('opacity', '1');
                $('#user_name').trigger("select");
                $('#user_name').keyup(function (e) {
                    if ($('#user_name').val().length >= 10) {
                        $('#user_name').val(user_name);
                        $('.name_error').css({
                            'opacity': '1',
                            'bottom': '41%'
                        })

                    } else {
                        $('.name_error').css({
                            'opacity': '1',
                            'bottom': '-100%'
                        })
                        user_name = $('#user_name').val();
                    }
                    if ((e.key == 'Enter') && (e.target.value != '')) {
                        sound1.play();
                        $('.name_error').css('display', 'none');
                        user_name = $('#user_name').val();
                        $('.user_name_div').fadeOut();
                        hideKeyboard($('#user_name'));
                        $('#user_name').addClass('disp_none');
                        $("#cat_txt1").remove();
                        $(".typed-cursor").eq(0).remove();
                        $("#cat_txt1_p2").removeClass('disp_none');
                        $("#cat_txt1_p2").typed({
                            strings: ["(please adjust your sound level", "according to your preference)", `Let's Start ${user_name}!`, "Click on make me happy"],
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
        }, 1000)
    }
);

$('#btn1').click(
    function () {
        slide1_vid.play();
        $('.slides').css('display', 'unset');
        sound1.fade(1, 0, 2000);
        setTimeout(function () {
            sound2.play();
        }, 1500)
        $('#main_overlay').css('animation', 'main_overlay 1s 0s 1 ease-in forwards');

        setTimeout(function () {
            $('#slide1 .welcome_div').append(user_name);
            $('#slide1 .welcome_div').css('opacity', '1');
        }, 500);

        setTimeout(function () {
            $('#slide1 .welcome_div').css('opacity', '0');
        }, 6000);

        setTimeout(function () {
            $('#slide1 .welcome_div').hide();
            $('.cat_2').fadeIn();
            $("#cat_txt2").typed({
                strings: [`${user_name} your journey`, "of happiness has started!", "click on the red heart"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 500,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });
        }, 7000);

        setTimeout(function () {
            $('.float_box1').fadeIn();
            $('.float_box1').css('display', 'flex');
            $('.heart').click(function () {
                $('.heart').css('transform', 'scale(2,2)');
                setTimeout(function () {
                    $('.heart').fadeOut();
                }, 1000)
                setTimeout(function () {
                    $('.heart_cont').fadeIn();
                }, 1500)
            })
        }, 14000);

        $('.heart_cont_btn').click(function () {
            $('.float_box1').fadeOut();
            $("#cat_txt2").next().remove();
            $("#cat_txt2").remove();
            $("#cat_txt2_p2").fadeIn()
            $('.forward_btn').show();
            $("#cat_txt2_p2").typed({
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
                $('.cat_2').css('transition', '1s')
                $('.cat_2').css('opacity', '0');
            }, 7000)
        });
    }
);

$('.forward_btn').click(
    function () {
        $('.forward_btn').fadeOut();

        if ($('#slide2').hasClass('carousel-item-next')) {
            $('#slide1 iframe').remove();
            sound2.fade(1, 0, 2000);
            setTimeout(function () {
                sound3.play();
            }, 1500)

            $('.cat_3').fadeIn();

            $("#cat_txt3").typed({
                strings: [`time has stopped ${user_name}`, "just focus on this", "soothing flower animation", "alongwith peaceful music"],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 1000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });

            setTimeout(function () {
                $('.forward_btn').show();
                $('.forward_btn').addClass('blue_bg');
            }, 5000)

            setTimeout(function () {
                $('.cat_3').css('transition', '1s')
                $('.cat_3').css('opacity', '0');
            }, 12000);
        }

        else if ($('#slide3').hasClass('carousel-item-next')) {
            start_slide3_bg();
            sound3.fade(1, 0, 2000);
            setTimeout(function () {
                sound4.play();
            }, 1500)

            $('.cat_4').fadeIn();

            $("#cat_txt4").typed({
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
                $('.float_box2').fadeIn();
                $('.float_box2').css('display', 'flex');
            }, 5000);

            $('.door').click(function () {
                $('.door').css('transform', 'scale(2,2) rotateZ(360deg)');
                setTimeout(function () {
                    $('.door').fadeOut();
                }, 1000)
                setTimeout(function () {
                    $('.door_cont').fadeIn();
                }, 1500)
            });

            $('.door_cont_btn').click(function () {
                $('.float_box2').fadeOut();
                $("#cat_txt4").next().remove();
                $("#cat_txt4").remove();
                $("#cat_txt4_p2").fadeIn();
                $('.forward_btn').removeClass('blue_bg');
                $('.forward_btn').show();
                $("#cat_txt4_p2").typed({
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
                    $('.cat_4').css('transition', '1s')
                    $('.cat_4').css('opacity', '0');
                }, 6500)
            });
        }

        else if ($('#slide4').hasClass('carousel-item-next')) {
            sound4.fade(1, 0, 2000);
            setTimeout(function () {
                sound5.play();
            }, 1500)


            setTimeout(function () {
                $('#slide4 .welcome_div').css('opacity', '1');
            }, 500);

            setTimeout(function () {
                $('#slide4 .welcome_div').css('opacity', '0');
                $('.cat_5').fadeIn();
                $("#cat_txt5").typed({
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
                $('.forward_btn').removeClass('blue_bg');
                $('.forward_btn').show();
            }, 5000)

            setTimeout(function () {
                $('#slide4 .welcome_div').hide();
                $('.cat_5').css('transition', '1s')
                $('.cat_5').css('opacity', '0');
                $('.slide4_bg').css('position', 'unset');
            }, 18000);
        }

        else if ($('#slide5').hasClass('carousel-item-next')) {
            sound5.fade(1, 0, 2000);
            setTimeout(function () {
                sound6.play();
            }, 1500)

            $('.cat_6').fadeIn();
            $("#cat_txt6").typed({
                strings: ["writing down our thoughts", "helps our mind alot", "gives relief from stress, anxiety,", "suffering and so here i'm", "giving you a lantern on which", "you can write down your", "thoughts and feel relieved."],
                typeSpeed: 1,
                startDelay: 1000,
                backSpeed: 1,
                backDelay: 1000,
                loop: false,
                cursorChar: "|",
                contentType: 'html'
            });
            setTimeout(function () {
                $('.forward_btn').addClass('blue_bg');
                $('.forward_btn').show();
            }, 5000)
            setTimeout(function () {
                $('.lantern_user textarea').val('');
                $('.lantern_user').css('opacity', '1');
                $('.lantern_user textarea').select();
            }, 21000);

            $('.lantern_user textarea').on('keyup', function (e) {
                if (e.key == 'Enter' && (e.target.value != '')) {
                    lantern_submit();
                }
            })

            $('.lantern_submit').click(function () {
                $('.lantern_user').addClass('lantern_userafter');
                $('.lantern_user textarea').addClass('lantern_userafter_textarea');
                $('.lantern_user textarea').attr("disabled", true);
                $('.lantern_submit').fadeOut();
                $('.lantern_ask').fadeIn();
            })

            lantern_submit = () => {
                $('.lantern_user').addClass('lantern_userafter');
                $('.lantern_user textarea').addClass('lantern_userafter_textarea');
                $('.lantern_user textarea').attr("disabled", true);
                $('.lantern_submit').fadeOut();
                $('.lantern_ask').fadeIn();
            }

            $('.lantern_opt1').click(function () {
                $('.lantern_ask').fadeOut();
                $('#slide5 .slide_lvl .cat').append(
                    `
                        <div class="lantern_user opacity-100">
                        <img src="images/lantern.svg" alt=""> <br>
                        <textarea name="user_thoughts" id="user_thoughts" cols="25" rows="6" placeholder="Write Your Thoughts Here"></textarea> <br>
                        <button class="lantern_submit" onclick="lantern_submit()">Submit</button>
                        </div>
                    `
                )
                $('.lantern_user textarea').select();
            });

            $('.lantern_opt2').click(function () {
                $('.lantern_ask').fadeOut();
                $("#cat_txt6").next().remove();
                $("#cat_txt6").remove();
                $("#cat_txt6_p2").fadeIn();
                $("#cat_txt6_p2").typed({
                    strings: ["you can sit here peacefully", "or click on next button"],
                    typeSpeed: 1,
                    startDelay: 1000,
                    backSpeed: 1,
                    backDelay: 1000,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
                setTimeout(function () {
                    $('.cat_6').css('transition', '1s')
                    $('.cat_6').css('opacity', '0');
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
            slide6_vid.play();
            sound6.fade(1, 0, 2000);
            setTimeout(function () {
                sound7.play();
            }, 2000)

            setTimeout(function () {
                $('#slide6 .welcome_div').append(user_name);
                $('#slide6 .welcome_div').css('opacity', '1');
            }, 500);

            setTimeout(function () {
                $('#slide6 .welcome_div').css('opacity', '0');
                $('.cat_7').fadeIn();
                $("#cat_txt7").typed({
                    strings: [`isn't nature so peaceful ${user_name}?`, "I just thought of a poem", "River's tranquil embrace,", "Gently winding through time.", "Whispers of ancient tales,", "Flowing secrets untold.", "Nature's endless symphony,", "Eternal current's embrace.", `you can close your eyes ${user_name}`, "and feel the water flowing"],
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
                $('.forward_btn').removeClass('blue_bg');
                $('.forward_btn').addClass('green_bg');
                $('.forward_btn').show();
            }, 5000)

            setTimeout(function () {
                $('#slide6 .welcome_div').hide();
                $('.cat_7').css('transition', '1s')
                $('.cat_7').css('opacity', '0');
            }, 36000);
        }

        else if ($('#slide7').hasClass('carousel-item-next')) {
            sound7.fade(1, 0, 2000);
            $('.game_pc iframe').eq(0).attr('src', games_pc[0]);
            $('.game_mob iframe').eq(0).attr('src', games_mob[0]);
            setTimeout(function () {
                sound8.play();
            }, 1500)
            setTimeout(function () {
                $('#slide7 .welcome_div').css('opacity', '1');
            }, 500);

            setTimeout(function () {
                $('#slide7 .welcome_div').css('opacity', '0');
                $('.cat_8').fadeIn();
                $('.forward_btn').removeClass('green_bg');
                $('.forward_btn').show();
                $("#cat_txt8").typed({
                    strings: [`do you remember the time ${user_name}`, "when you used to play a lot", "either outdoor or indoor games", "wasn't life fun till then?", "i want you to experience that", "feeling once again so i've gathered", "a few old retro games to try to", "make you relive those moments", "once again. i'll go now but", "i'll comeback again!"],
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
                $('#slide7 .welcome_div').hide();
                sound8.fade(1, 0, 2000);
            }, 7000)

            setTimeout(function () {
                $('.cat_8').css('transition', '1s')
                $('.cat_8').css('opacity', '0');
            }, 41000);
        }

        else if ($('#slide8').hasClass('carousel-item-next')) {
            $('#slide6 iframe').remove();
            sound8.fade(1, 0, 2000);
            $('.game_wrapper').eq(0).remove();
            $('.game_pc iframe').eq(0).attr('src', games_pc[1]);
            $('.game_mob iframe').eq(0).attr('src', games_mob[1]);
            $('.cat_9').fadeIn();
            $("#cat_txt9").typed({
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
                $('.forward_btn').show();
            }, 5000)

            setTimeout(function () {
                $('.cat_9').css('transition', '1s')
                $('.cat_9').css('opacity', '0');
            }, 7000);
        }

        else if ($('#slide9').hasClass('carousel-item-next')) {
            $('.game_wrapper').eq(0).remove();
            $('.game_pc iframe').eq(0).attr('src', games_pc[2]);
            $('.game_mob iframe').eq(0).attr('src', games_mob[2]);
            $('.cat_10').fadeIn();
            $("#cat_txt10").typed({
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
                $('.forward_btn').show();
                
            }, 4000)

            setTimeout(function () {
                $('.cat_10').css('transition', '1s')
                $('.cat_10').css('opacity', '0');
            }, 15000);
        }

        else {
            sound9.play();
            slide10_vid.play();
            $('.game_wrapper').eq(0).remove();
            $('.forward_btn').fadeOut();
            setTimeout(function () {
                $('#slide10 .welcome_div').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                $('#slide10 .welcome_div').css('opacity', '0');
                $('.cat_11').fadeIn();
                $("#cat_txt11").typed({
                    strings: ["music can reduce anxiety,", "improve sleep quality and mood", "So keep your brain young", `with music ${user_name}!`],
                    typeSpeed: 1,
                    startDelay: 1000,
                    backSpeed: 1,
                    backDelay: 1000,
                    loop: false,
                    cursorChar: "|",
                    contentType: 'html'
                });
            }, 3000)

            setTimeout(function () {
                $('#slide10 .welcome_div').css('display', 'none');
                $('.cat_11').css('transition', '1s')
                $('.cat_11').css('opacity', '0');
                $('#slide10 .end_div').css('opacity', '1');
                $('.logo_slide').fadeIn();
            }, 16000);
            setTimeout(function () {
                $('#slide10 .end_div').css('opacity', '0');
                $('.review_btn').removeClass('d-none');
            }, 24000);
            setTimeout(function () {
                $('#slide10 .end_div').css('display', 'none');
            }, 25000);
            $('.review_btn').click(()=>{
                slide10_vid.pause();
                sound10.fade(1, 0, 2000);
                $('#slide10_bg').remove();
                $('.review_btn').remove();
                $('#slide10').css('overflow-x', 'hidden');
                $('#slide10').css('overflow-y', 'auto');
                $('.review_form').removeClass('d-none');
                $('#slide10 .end_div').remove();
            })
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