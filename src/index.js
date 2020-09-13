import {home} from "./home";
import {contact} from "./contact";
import {menu} from "./menu";

home();

document.getElementById("home").addEventListener("click", () => {
    home();
});

document.getElementById("contact").addEventListener("click", () => {
    contact();
});

document.getElementById("menu").addEventListener("click", () => {
    menu();
});