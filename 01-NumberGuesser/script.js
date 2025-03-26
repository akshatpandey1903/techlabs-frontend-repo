var circle = document.querySelector("#circle");

let numberInput = prompt("Enter the number of blocks: ");
let number = parseInt(numberInput);

let random = Math.floor(Math.random() * number) + 1;
console.log(random);
createCircle(number);
let x = 6;
function createCircle(number) {

    if(number < 10){
        alert("Please enter a number greater than 10");
        return;
    }

    for (let i = 0; i < number; i++) {
        var paragraph = document.createElement("p");
        paragraph.classList.add("para");
        var node = document.createTextNode(i + 1);
        paragraph.appendChild(node);
        circle.appendChild(paragraph);
    }

    var para = document.querySelectorAll(".para");
    para.forEach((element) => {
        element.addEventListener("click", function () {
            if (parseInt(element.innerText) === random) {
                element.style.backgroundColor = "green";
                alert("Congratulations! You have won the game");
                return;
            } else if (parseInt(element.innerText) > random) {
                element.style.backgroundColor = "red";
            } else if (parseInt(element.innerText) < random) {
                element.style.backgroundColor = "yellow";
            }
            x--;
            if(x === 0){
                alert("Game Over! The correct number was " + random);
                paragraph.innerText = "";

                return;
            }
        });
    });
    // alert("Game Over! The correct number was " + random);
    // return;
}