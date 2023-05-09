const burgerMenuBtn = document.getElementById('js-mobile-nav-toggle');
const mainNav = document.getElementById('js-main-nav');
const mainNavActiveClass = "main-nav--opened";

burgerMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle(mainNavActiveClass);
});
window.addEventListener('click', function(e){
    if (!mainNav.contains(e.target)){
        mainNav.classList.remove(mainNavActiveClass);
    }
});

const searchToggleBtn = document.getElementById('js-toggle-search');
const searchContainer = document.getElementById('js-search-form');
const searchCloseBtn = document.getElementById('js-search-close');
const searchActiveClass = "search-form--active";

searchToggleBtn.addEventListener("click", () => {
    searchContainer.classList.toggle(searchActiveClass);
});

searchCloseBtn.addEventListener("click", () => {
    searchContainer.classList.remove(searchActiveClass);
});


//Copy to clipboard
new ClipboardJS('[data-clipboard-target]');
