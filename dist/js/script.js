const tabs = document.querySelectorAll('.catalog__tab-head__item');
const contents = document.querySelectorAll('.catalog__tab-content__item');
const tabDiscounts = document.querySelectorAll('.discount__tab-head__item');
const contentDiscounts = document.querySelectorAll('.discount__tab-content__item');


tabs.forEach((tab, index) => {
    tab.onclick = () => {
        changeTab(index)
    };
});

function changeTab(index) {
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    tabs[index].classList.add('active');

    for (let el of contents) {
        el.classList.remove('active');
    }
    contents[index].classList.add('active');
}



tabDiscounts.forEach((tabDiscount, DisNumb) => {
    tabDiscount.onclick = () => {
        changeTabDis(DisNumb)
    };
});

function changeTabDis(DisNumb) {
    for (let tabDiscount of tabDiscounts) {
        tabDiscount.classList.remove('discountOn');
    }
    tabDiscounts[DisNumb].classList.add('discountOn');

    for (let elD of contentDiscounts) {
        elD.classList.remove('discountOn');
    }
    contentDiscounts[DisNumb].classList.add('discountOn');
}