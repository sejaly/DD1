function allow(event) {
    event.preventDefault();
    event.target.classList.add("hover");
}

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    event.target.classList.add("dragging");
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain" );
    var dropContainer = event.target;
    var item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = data;
    dropContainer.appendChild(item);
    event.target.classList.remove("hover");
    event.target.classList.remove("dragging");
    event.dataTransfer.clearData();
    displayMessage("Item dropped successfully!");
}

function reset() {
    var dragContainer = document.querySelector('.drag-container');
    var dropContainer = document.querySelector('.drop-container');
    dragContainer.innerHTML = '<div class="item" draggable="true">' +
                                   '<img src="images.png" alt="Item 1" style="width: 250px;">' +
                               '</div>' +
                               '<div class="item" draggable="true">' +
                                   '<img src="images.png" alt="Item 1" style="width: 250px;">' +
                               '</div>' +
                               '<div class="item" draggable="true">' +
                                   '<img src="images.png" alt="Item 1" style="width: 250px;">' +
                               '</div>';
    dropContainer.innerHTML = '';
    clearMessage();
}

function displayMessage(message) {
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = message;
}

function clearMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = '';
}