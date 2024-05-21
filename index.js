//const toads = document.querySelectorAll(".toad");
const toads = document.getElementsByClassName("toad");


function displayToad(){
    toads.classList.add("display-toad");
}

function hideToad(){
    toads.style.visibility = "hidden";
}



toads.forEach(toad => toad.addEventListener('click', hideToad));




/*
function hideToad(){

    for (let i=0; i<toads.length; i++){
        toads[i].style.visibility = "hidden";
    }
}
*/

