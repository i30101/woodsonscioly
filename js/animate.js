let darkened = false;
let navbarClass = '.navbar';
let bigNavItemClass = '.big-nav-item';
let navDecorClass = '.nav-decor';
let navButtonID = '#small-toggle-button';


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(navbarClass).css('background-color', 'rgba(34, 34, 59, .95)');
        } else {
            $(navbarClass).css('background-color', 'transparent');
        }
    });


    $(navButtonID).click(function() {
        if(darkened) {
            // un-darken
            $(navbarClass).css('background-color', 'transparent');
            darkened = false;
        }else {
            // darken
            $(navbarClass).css('background-color', 'rgb(34, 34, 59)');
            darkened = true;
        }
    })

    $('#big-0').hover(function() {
        $('#decor-0').css('width', '40px');
    }, function() {
        $('#decor-0').css('width', '');
    });

    $('#big-1').hover(function() {
        $('#decor-1').css('width', '40px');
    }, function() {
        $('#decor-1').css('width', '');
    });

    $('#big-2').hover(function() {
        $('#decor-2').css('width', '40px');
    }, function() {
        $('#decor-2').css('width', '');
    });

    $('#big-3').hover(function() {
        $('#decor-3').css('width', '40px');
    }, function() {
        $('#decor-3').css('width', '');
    });

    // $('#big-4').hover(function() {
    //     $('#decor-4').css('width', '40px');
    // }, function() {
    //     $('#decor-4').css('width', '');
    // });
    
});

console.log(".org/contribute")