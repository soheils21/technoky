(function ($) {
    $(function () {
        $('.main-navigation .has-mega-menu.has-stretchwidth').hover(function (e) {
            var $body = $('body'), pright = $(this).offset().left, bodyright = $body.offset().left;
            $('.mega-stretchwidth', this).css({left: -pright + bodyright, width: $body.width()})
        });
        $('.main-navigation .has-mega-menu.has-containerwidth').hover(function (e) {
            var $parent = $(this).closest('.container , .elementor-container, .col-full, .header-container'),
                pright = $parent.offset().right + parseInt($parent.css('padding-left')),
                cright = $(this).offset().right;
            $('.mega-containerwidth', this).css({right: pright - cright, width: $parent.width()})
        });
        $('.main-navigation .has-mega-menu').has('ul.custom-subwidth').hover(function (e) {
            var pright = parseFloat($(this).children('a').css('padding-left')),
                $oright = $(this).offset().right + pright,
                $itemwidth = parseInt($(this).children('.custom-subwidth').css('width')),
                $bodywidth = $('body').width();
            var $offset = $oright + $itemwidth - $bodywidth;
            if ($offset >= 0) {
                $('.mega-menu.custom-subwidth', this).css({right: -$offset + pright})
            } else {
                $('.mega-menu.custom-subwidth', this).css({right: pright})
            }
        })
    })
})(jQuery)