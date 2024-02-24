let phoneMenu = document.querySelector('.burger_menu');
let navigation = document.querySelector('.menu')

let burger1 = document.querySelector('.burger_menu span:nth-child(1)')
let burger2 = document.querySelector('.burger_menu span:nth-child(2)')
let burger3 = document.querySelector('.burger_menu span:nth-child(3)')

phoneMenu.addEventListener('click', function(){


    navigation.classList.toggle('none')
    burger1.classList.toggle('first');
    burger2.classList.toggle('middle');
    burger3.classList.toggle('last');
   
    
})