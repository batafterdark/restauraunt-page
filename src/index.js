import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
const home = document.getElementById('homeNAV');
const menu = document.getElementById('menuNAV');
const about = document.getElementById('aboutNAV');
console.log("Hello");
let activeButton=home;
activeButton.classList.add('active');
loadHome();
function clearContent(){
    content.textContent='';
    activeButton?.classList.remove('active');
}
home.addEventListener('click', ()=>{
    clearContent();
    activeButton=home;
    activeButton.classList.add('active');
    loadHome();
});
menu.addEventListener('click', (event)=>{
    clearContent();
    activeButton=menu;
    activeButton.classList.add('active');
    loadMenu();
});
about.addEventListener('click', (event)=>{
    clearContent();
    activeButton=about;
    activeButton.classList.add('active');
    loadAbout();
});