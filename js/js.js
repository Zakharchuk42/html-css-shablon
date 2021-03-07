let burgerBtn = document.querySelector("#nav-toggle");
let menuModal = document.querySelector(".mobile-menu__list");
let dropMenu = document.querySelector(".drop-menu");
let subMenu = document.querySelector(".sub-menu");
let loginBtn = document.querySelector("#login");
let popupModal = document.querySelector(".popup");
let closeModal = document.querySelector(".popup-close");
let menuSubList = document.querySelector(".mobile-submenu__list");
let dropMenuMobile = document.querySelector(".drop-menu-mobile");

dropMenuMobile.onclick = function () {
    menuSubList.classList.toggle("active");
};

dropMenu.onclick = function () {
    subMenu.classList.toggle("open");
};

burgerBtn.onclick = function () {
    menuModal.classList.toggle("open");
    burgerBtn.classList.toggle("open");
};

loginBtn.onclick = function () {
    popupModal.classList.add("open");
};

closeModal.onclick = function () {
    popupModal.classList.remove("open");
};

$(document).ready(function () {
    $(".form-btn").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate(
            {
                scrollTop: destination - 100,
            },
            800
        );
        $("#focus-holder").focus();
        return false;
    });
});

$(document).ready(function () {
    $("#discover").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate(
            {
                scrollTop: destination - 100,
            },
            800
        );
        return false;
    });
});
