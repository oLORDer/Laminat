const tabs = document.querySelectorAll('.catalog__tab-head__item');
const contents = document.querySelectorAll('.catalog__tab-content__item');

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

const tabDiscounts = document.querySelectorAll('.discount__tab-head__item');
const contentDiscounts = document.querySelectorAll('.discount__tab-head__item');

tabDiscounts.forEach((tabDiscount, numb) => {
    tabDiscount.onclick = () => {
        changeTabDis(numb)
    };
});

function changeTabDis(numb) {
    for (let tabDiscount of tabDiscounts) {
        tabDiscount.classList.remove('active');
    }
    tabDiscounts[numb].classList.add('active');

    for (let elD of contentDiscounts) {
        elD.classList.remove('active');
    }
    contentDiscounts[numb].classList.add('active');
}