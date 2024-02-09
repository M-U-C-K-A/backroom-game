function openPopup(card) {
    var contentContainer = document.getElementById('popup-content-container');
    contentContainer.innerHTML = "";

    var clonedContent = card.cloneNode(true);
    
    clonedContent.removeAttribute("onclick");
    
    var description = clonedContent.querySelector(".description");

    contentContainer.appendChild(clonedContent);

    description.style.display = "block";

    document.getElementById('popup').classList.add('active');

}

function closePopup() {
    document.getElementById('popup').classList.remove('active');


}
