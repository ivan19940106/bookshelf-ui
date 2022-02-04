$(document).ready(function(){
    $('.star-bar i').click(function(){
        var heartIcon = $(this);

        if(heartIcon.hasClass('icon-heart')){
            heartIcon.removeClass('icon-heart');
            heartIcon.addClass('icon-heart-empty');
        } else {
            heartIcon.removeClass('icon-heart-empty');
            heartIcon.addClass('icon-heart');
        }
    });
});