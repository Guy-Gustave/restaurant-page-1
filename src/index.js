import {home} from "./home";
import {contact} from "./contact";

home();

document.getElementById("contact").addEventListener("click", () => {
    contact();
});

document.getElementById("home").addEventListener("click", () => {
    home();
});