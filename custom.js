$(document).ready(function() {
    $(".nav_ico").click(function(event) {
        $(this).toggleClass('active');
        $(".side_nav").toggleClass('active');
        $(".side_nav-overlay").toggleClass('active');
        $(".side_nav-overlay").click(function() {
            $(this).removeClass('active');
            $(".side_nav").removeClass('active');
            $(".side_nav-overlay").removeClass('active');
        });
    });
});