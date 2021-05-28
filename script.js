const menu1Toggle = document.querySelector('.menu');
const menu2= document.querySelector('.menu2');
const showcaseToggle = document.querySelector('.showcase');

menu1Toggle.addEventListener('click',()=>{
    menu1Toggle.classList.toggle('active');
    showcaseToggle.classList.toggle('active');
    if(showcaseToggle.classList.contains('active')){
        menu2.style.display="block";
    }else{
        menu2.style.display = "none";
    }
});