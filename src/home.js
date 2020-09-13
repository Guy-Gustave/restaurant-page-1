function home() {
    let content = document.getElementById("content");
    content.innerHTML = "";

    let homeContainer = document.createElement("div");
    let reserveButton = document.createElement("button");

    homeContainer.setAttribute("id", "home-container");
    reserveButton.setAttribute("id", "reserve-button");

    content.appendChild(homeContainer);
    homeContainer.appendChild(reserveButton);
    
    reserveButton.textContent = "Book Reservation";
};

export {home};