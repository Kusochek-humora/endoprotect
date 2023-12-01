'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header'),
        menuOpen = document.getElementById('menu-open'),
        menuClose = document.getElementById('menu-close'),
        menu = document.getElementById('menu-mobile');
    let headerHeight;
    function stickyHeaderModify() {
        headerHeight = header.clientHeight;
        if (window.scrollY >= 1) {
            header.classList.add('scroll');
        }
        else {
            header.classList.remove('scroll');
        }
    }

    window.addEventListener('scroll', stickyHeaderModify);

    function openMenu() {
        menu.classList.add('open');
    }

    function closeMenu() {
        menu.classList.remove('open');
    }

    menuOpen.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);


    const modal = document.getElementById('modal'),
        modalOpenBtns = document.querySelectorAll('.modal-open'),
        modalCloseBtn = document.querySelector('.modal-close'),
        overlay = document.getElementById('overlay');

    function openFormHandler() {
        modal.classList.add('active');
        overlay.classList.add('active');
        menu.classList.remove('open');
    }
    function closeFormHandler() {
        modal.classList.remove('active');
        overlay.classList.remove('active');

    }
    modalOpenBtns.forEach(element => {
        element.addEventListener('click', openFormHandler);
    });
    modalCloseBtn.addEventListener('click', closeFormHandler);
    overlay.addEventListener('click', closeFormHandler);
})