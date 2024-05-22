const toads = document.querySelectorAll(".toad");
const toadContainers = document.getElementsByClassName("grid-item");

//Think its not working cause wanting to click on image rather than container

function displayToad(event){
    //Event.currentTarget gets the specific .grid-item clicked
    const clickedContainer = event.currentTarget;
    clickedContainer.classList.add("display-toad");
    //Need to add the image back in display-toad
    console.log("It's working!");
}

/*
function hideToad(){
    toad.style.visibility = "hidden";
}
*/


//For each toad position, when clicked function displayToad will execute.
//Array.from(toadContainers) converts the HTMLCollection to an array so forEach can be executed
Array.from(toadContainers).forEach((toad) => {
    toad.addEventListener('click', displayToad);
});




/*
function hideToad(){

    for (let i=0; i<toads.length; i++){
        toads[i].style.visibility = "hidden";
    }
}
*/

