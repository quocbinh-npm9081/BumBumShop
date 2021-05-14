const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".HoverableSlideOutModal_menu_mobile")
hamburger.addEventListener("click", function() {
    menu.classList.toggle("show");
    console.log(menu);
})

const filter = document.querySelector(".filter-tab-list");

const filterItem = filter.querySelectorAll(".more");
const plus = filter.querySelectorAll(".plus");
const minus = filter.querySelectorAll(".minus");
const accordion_label = filter.querySelectorAll(".accordion-label");
const accordion_panel_content = filter.querySelectorAll(".accordion-panel-content");
const checkbox_bor = filter.querySelectorAll(".checkbox-bor");
for (let i = 0; i < filterItem.length; i++) {
    filterItem[i].addEventListener("click", function() {
        minus[i].classList.toggle("show_inline");
        plus[i].classList.toggle("text-white-color");
        accordion_label[i].classList.toggle("text_w--600");
        accordion_panel_content[i].classList.toggle("show");
    })
    for (let j = 0; j < checkbox_bor.length; j++) {
        checkbox_bor[j].addEventListener("click", function() {
            checkbox_bor[j].classList.toggle("active-check-box");
        })
    }
}