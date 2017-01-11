$(document).ready(function () {
    // RESPOSIVE MENU
    var buttonMenu = $('.small-button.button-menu');
    var headerNavbar = $('.header__navbar.clearfix');

    $(document).mouseup(function (event) {
        if (buttonMenu.has(event.target).length === 1) {
            headerNavbar.toggle(300);
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= '992') {
            headerNavbar.show(300);
        } else {
            headerNavbar.hide(0);
        }
    });
    // RESPOSIVE MENU END

    // VIDEO BACKGROUND
    var is_mobile = false;

    if ($('.player').css('display') == 'none') {
        is_mobile = true;
    }
    if (is_mobile == true) {
        //Conditional script here
        $('.bg-video').addClass('default-image');
        $('.pattern').remove();
    } else {
        $(".player").mb_YTPlayer();
    }
    // VIDEO BACKGROUND END

    // SCROLL TO TOP
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $(window).width() > 1200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    // SCROLL TO TOP END
    $(window).scroll(function () {
        if ($(this).scrollTop() > 170 && $(window).width() > 992) {
            $('.fixed-header').fadeIn();
        } else {
            $('.fixed-header').fadeOut();
        }
    });
    // FIXED HEADER

    // FIXED HEADER END

    //MODAL FEEDBACK
    modalForm(document.getElementById('modalFeedback'),
        document.getElementById("btnFeedback"),
        document.getElementsByClassName("modal-feedback__close")[0]
    );
    modalForm(document.getElementById('modalRecall'),
        document.getElementById("btnRecall"),
        document.getElementsByClassName("modal-feedback__close")[1]
    );
    modalForm(document.getElementById('modalFeedback'),
        document.getElementById("smBtnFeedback"),
        document.getElementsByClassName("modal-feedback__close")[0]
    );
    modalForm(document.getElementById('modalRecall'),
        document.getElementById("smBtnRecall"),
        document.getElementsByClassName("modal-feedback__close")[1]
    );
    modalForm(document.getElementById('modalFeedback'),
        document.getElementById("fxBtnFeedback"),
        document.getElementsByClassName("modal-feedback__close")[0]
    );
    modalForm(document.getElementById('modalRecall'),
        document.getElementById("fxBtnRecall"),
        document.getElementsByClassName("modal-feedback__close")[1]
    );
    modalForm(document.getElementById('modalRecall'),
        document.getElementById("uptocall-mini"),
        document.getElementsByClassName("modal-feedback__close")[1]
    );
    //MODAL FEEDBACK END
});

function modalForm(modal, btn, span) {
    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

