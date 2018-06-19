$(document).ready(function () {

    var projectRectangle = $('.project-rectangle')

    $('.project').on('mouseenter', function() {
        $(this).find(projectRectangle).animate({
            width: '100%'
        }, 200)
    })

    $('.project').on('mouseleave', function() {
        $(this).find(projectRectangle).animate({
            width: '20%'
        }, 200)
    })
})