const toads = document.querySelectorAll(".toad");
const toadContainers = document.getElementsByClassName("grid-item x");
const restartButton = document.getElementById("restartBtn");
const winningMessage = document.getElementsByClassName("winning-message");
const statusMessage = document.getElementsByClassName("status-message");

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let currentPlayer = "red"
let running = false;

function startGame(){
    toads.forEach((toad) => {
        toad.addEventListener("click", displayToad());
    })
    restartButton.addEventListener("click", restartGame)
    winningMessage.textContent = `${currentPlayers's}`
}

function displayToad(){
    toads.forEach((toad) => {
        toad.classList.add("display-toad");
    })
    
}

function updateCell(cell, index){

}

function changePlayer(){

}

function winner(){

}

function restartGame(){

}










//Think its not working cause wanting to click on image rather than container

/*
function displayToad(event){
    //Event.currentTarget gets the specific .grid-item clicked
    const clickedContainer = event.currentTarget;
    
    clickedContainer.classList.add("display-toad");
    //Need to add the image back in display-toad
    
    
    //toadContainers.classList.add("display-toad")
    console.log("It's working!");
}
*/

/*
function hideToad(){
    toad.style.visibility = "hidden";
}
*/


/*
//For each toad position, when clicked function displayToad will execute.
//Array.from(toadContainers) converts the HTMLCollection to an array so forEach can be executed
Array.from(toadContainers).forEach((toad) => {
    toad.addEventListener('click', displayToad);
});

*/




/*
function hideToad(){

    for (let i=0; i<toads.length; i++){
        toads[i].style.visibility = "hidden";
    }
}
*/

