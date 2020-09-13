function menu() {
    let content = document.getElementById("content");
    content.innerHTML = "";

    let menuContainer = document.createElement("div");
    let menuHeader = document.createElement("div");
    let menuText = document.createElement("p");
    
    menuContainer.setAttribute("id", "menu-container");
    menuHeader.id = "menu-header";
    menuText.id = "menu-text";
    
    content.appendChild(menuContainer);
    menuContainer.appendChild(menuHeader);
    menuHeader.appendChild(menuText);

    menuText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ipsum dolor sit amet consectetur adipiscing elit duis tristique. 
    Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. 
    Non blandit massa enim nec. Odio facilisis mauris sit amet. Aliquam nulla 
    facilisi cras fermentum odio eu feugiat. Iaculis urna id volutpat lacus 
    laoreet non curabitur gravida. Ac tortor dignissim convallis aenean et 
    tortor at. Nisl suscipit adipiscing bibendum est ultricies. Elementum tempus 
    egestas sed sed risus pretium quam. Scelerisque felis imperdiet proin 
    fermentum leo vel orci porta.`;

    for (let i = 0; i < 8; i++) {
        let menuItem = document.createElement("div");
        let itemImage = document.createElement("img");
        let itemName = document.createElement("b");
        let itemDesc = document.createElement("p");

        menuItem.classList.add("menu-item");
        itemImage.classList.add("item-image");
        itemName.classList.add("item-name");
        itemDesc.classList.add("item-desc");
        itemImage.setAttribute("src", "https://images.unsplash.com/photo-1568096889942-6eedde686635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
        itemName.textContent = "Delicious Noodles - $12"
        itemDesc.textContent = "Overly verbose description of menu item"

        menuContainer.appendChild(menuItem);
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDesc);
    }
}

export {menu};