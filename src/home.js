function home() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    document.getElementById("content").appendChild(homeContainer);
    let reserveButton = document.createElement("button");
    reserveButton.id = "reserve-button";
    reserveButton.textContent = "Book Reservation";
    homeContainer.appendChild(reserveButton);
};

export {home};