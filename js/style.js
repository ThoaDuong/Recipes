$(document).ready(function(){
    //Show/Hide search form
    $('.search-icon').click(function(){
        $('.header__search').fadeIn();
        $('.input-search').focus();
        $('.search-icon').fadeOut();
        $('.menu-icon').fadeOut();
    })
    $('.close-icon').click(function(){
        $('.header__search').fadeOut();
        $('.search-icon').fadeIn();
        $('.menu-icon').fadeIn();
    })

    //Slide
    $('.slide-right-icon').click(function(){
        $('.recipe-week__slidefirst').fadeOut();
        $('.recipe-week__slidesecond').fadeIn();
    })
    $('.slide-left-icon').click(function(){
        $('.recipe-week__slidefirst').fadeIn();
        $('.recipe-week__slidesecond').fadeOut();
    })

    //Nav responsive
    $('.recipes__name--res').click(function(){
        $('.recipes__level1--res').toggle();
    })
    $('.menu-icon').click(function(){
        $('.header__nav-responsive').toggle();
    })
});
