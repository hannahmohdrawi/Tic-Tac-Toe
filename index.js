const toadContainer = document.querySelectorAll(".grid-item");

function flipToad(){
    this.classList.toggle('flip');
}

toadContainer.forEach(toad => toad.addEventListener('click', flipToad));