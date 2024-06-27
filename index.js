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
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"
let gameRunning = false;

startGame();

function startGame(){
    toads.forEach((toad) => {
        toad.addEventListener("click", displayToad());
    })
    restartButton.addEventListener("click", restartGame)
    winningMessage.textContent = `${currentPlayer}'s turn`
    gameRunning = true;
    
}

function displayToad(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (current player === "X") ? "O" : "X"; 
    stateText.textContent = `${currentPlayer}'s turn`;
}

function winner(){
    let roundWon = false;
    for(let i=0; 9< winningConditions.length; i++){
        const condition = winningConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }else if(options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    let options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    CSSRuleList.forEach(cell => cell.textContent = "");
    running = true;
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

