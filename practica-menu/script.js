///asignar constante al menu hamburguesa
///asignar constante al nav
///prender para que escuche el llamado
///una vez que escucha el llamado que cambia?



const botonHamburguesa = document.querySelector(".icono-menu");
const navBar = document.querySelector(".navBar");

botonHamburguesa.addEventListener("click", function(){
    navBar.classList.toggle("cambio");
});