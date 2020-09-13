const contact = () => {
    let content = document.getElementById("content");
    content.innerHTML = "";
    
    let contactBox = document.createElement("div");
    let contactUs = document.createElement("b");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let ourAddress = document.createElement("b");
    let address = document.createElement("p");
    let githubLink = document.createElement("a");
    let githubMark = document.createElement("img");

    contactUs.classList.add("info-h");
    phone.classList.add("info");
    email.classList.add("info");
    ourAddress.classList.add("info-h");
    address.classList.add("info");
    githubLink.setAttribute("href", "https://github.com/jthc-dev");
    githubMark.setAttribute("id", "github-mark");
    githubMark.setAttribute("src", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png");
    contactBox.setAttribute("id", "contact-box");
    
    content.appendChild(contactBox);
    contactBox.appendChild(contactUs);
    contactBox.appendChild(phone);
    contactBox.appendChild(email);
    contactBox.appendChild(ourAddress);
    contactBox.appendChild(address);
    contactBox.appendChild(githubLink);
    githubLink.appendChild(githubMark);

    contactUs.textContent = "Contact Us";
    phone.textContent = "012-345-6789";
    email.textContent = "danggoodnoodles@food.com";
    ourAddress.textContent = "Our Address";
    address.textContent = "3 Abbey Road, Paddington, London, UK";
    
}

export {contact};