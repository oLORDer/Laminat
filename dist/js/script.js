const catalogMore = document.getElementById('catalogMore');
const hidden1 = document.getElementById('catalog-hiden1');
const hidden2 = document.getElementById('catalog-hiden2');

catalogMore.onclick = collapse;
function collapse() {
    hidden1.classList.remove('display-none');
    hidden2.classList.remove('display-none');
    catalogMore.classList.add('display-none');
}


$('[data-modal=call]').on('click', function() {
    $('.overlay, #call').fadeIn('slow');
})
$('.modal__close').on('click', function() {
    $('.overlay').fadeOut('slow');
})

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{38}(000)000-00-00',
  lazy: false
};
var mask = IMask(element, maskOptions);