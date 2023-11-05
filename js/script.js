const menu = document.querySelector('.menu');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const thre = document.querySelector('.thre');
const menumobile = document.querySelector('.menu-mobile')

menu.addEventListener('click',()=>{
    one.classList.toggle('active')
    two.classList.toggle('active')
    thre.classList.toggle('active')
    menumobile.classList.toggle('active')
});

const sections = document.querySelectorAll('.js-scroll');

const animascroll = ()=>{
    sections.forEach(item=>{
        const sectiontop = item.getBoundingClientRect().top -410;
        if(sectiontop < 0){
            item.classList.add('active')
        }
    })
}

animascroll();
window.addEventListener('scroll',animascroll)

