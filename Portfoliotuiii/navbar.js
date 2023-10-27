const navSlide = ( ) => {
    const burger = document.querySelector ('.burger') ;
    const nav = document.querySelector ('.nav-links') ;
    const navLinks = document.querySelectorAll('.nav-links ');
    
    burger.addEventListener ('click',() => {
        nav.classList.toggle ( 'nav-active') ;
        navLinks.forEach((link,port) =>{
        if (link.style.animation ){
        link.style.animation = '';
} else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${ port / 7+1.5} s` ;
    }
    });
    burger.classList.toggle('toggle');
});
}       
navSlide ( ) ;