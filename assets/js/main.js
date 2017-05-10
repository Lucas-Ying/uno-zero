$(document).ready(function() {

    if (window.location.hash && window.location.hash == "#posts") {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.main-post-list').removeClass('hidden');
    }

    $('a.blog-button').on('click', function() {
        // If not in home page, return to home page, otherwise wrap or open the cover.
        if (location.pathname == '/') {
            if (location.hash == '#posts') {
                coverOpen();
                location.hash = '';
            } else {
                coverCollapse();
                location.hash = '#posts';
            }
        } else {
            window.location.replace('/#posts');
        }
    });

    if (window.location.pathname.substring(0, 5) == "/tag/") {
        $('.panel-cover').addClass('panel-cover--collapsed');
    }

    $('.btn-mobile-menu__icon').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').toggleClass('animated bounceOutUp');
            $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            });

        } else {
            $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
            $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('animated bounceInDown');
            });
        }
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });

    $('.navigation-wrapper .blog-button').click(function() {
        if ($('.btn-mobile-menu').css('display') == "block" && $('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').toggleClass('animated bounceOutUp');
            $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            });
            $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });

});

$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

function coverOpen() {
    $('.content-wrapper').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('.content-wrapper').removeClass('animated slideOutRight');
        $('.main-post-list').addClass('hidden');
    });
    setTimeout(function() {
        $('.panel-cover').removeClass('panel-cover--collapsed');
        toggleCoverAnimation();
    }, 200);
}

function coverCollapse() {
    $('.main-post-list').removeClass('hidden');
    $('.content-wrapper').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $('.content-wrapper').removeClass('animated slideInRight');
    });
    $('.panel-cover').addClass('panel-cover--collapsed');
    toggleCoverAnimation();
}

function toggleCoverAnimation() {
    $('.panel-cover').addClass('panel-cover--animation');
    $('.panel-cover').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        setTimeout(function() {
            $('.panel-cover').removeClass('panel-cover--animation');
        }, 1000);
    });
}