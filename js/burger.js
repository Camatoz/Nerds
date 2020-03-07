$(function(){
    initBurgerMenu();
});

function initBurgerMenu() {
    let btn = $("a.burger-btn");
    let menu = $('nav.main-navigation');
    let btnPos = btn.position();
    let menuRightPos = $(window).width()-btnPos.left-btn.outerWidth();

    btn.click(function() {
        btn.toggleClass('active');
        menu.css({
            top:btnPos.top + btn.outerHeight(), 
            right:menuRightPos
        }).slideToggle(300);
        return false;
    })
}

