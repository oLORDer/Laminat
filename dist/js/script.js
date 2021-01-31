const catalogMore = document.getElementById('catalogMore');
const test = document.getElementById('test');
const catalogContent = document.querySelectorAll('.catalog__content');
const gold = document.getElementsByClassName('color-gold')


catalogMore.onclick = moreCatalog;


function moreCatalog() {
    test.add(gold)
}

// catalogMore.onclick = function() {
//     alert('oh no no no');  
// } 


// catalogMore.onclick = function() {
//     document.querySelectorAll('catalogMore');
//     classList.remove('catalog-hiden')
//     // catalogContent.classList.remove('catalog-hiden');
//   }


// for (let i = 0; i < catalogMore.length; i++) {
//     catalogMore[i].addEventListener('catalogContent', function() {
//         this.classList.remove;
//     })
// }







// tabs.forEach((tab, index) => {
//     tab.onclick = () => {
//         changeTab(index)
//     };
// });

// function changeTab(index) {
//     for (let tab of tabs) {
//         tab.classList.remove('active');
//     }
//     tabs[index].classList.add('active');

//     for (let el of contents) {
//         el.classList.remove('active');
//     }
//     contents[index].classList.add('active');
// }

