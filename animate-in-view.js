$('.animate-inview').css('visibility', 'hidden')

$(function() {
    $('.animate-inview-watch').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var target = ($(this).hasClass('animate-inview')) ? $(this) : $(this).find('.animate-inview')
        var delay = (target.data('animate-inview-delay')) ? target.data('animate-inview-delay') : 0
        var motion = target.data('animate-inview-class')
        if (isInView) {
            setTimeout(function() {
                target.css('visibility', 'visible')
                target.stop().addClass(motion);
                target.stop().addClass('animated');
            }, delay)
        } else {
            target.stop().removeClass(motion);
            target.stop().removeClass('animated');
            target.css('visibility', 'hidden')
        }
    });
});

