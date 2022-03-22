const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const userRank = document.querySelector(".user-rank");

function getUserRank(e){
    e.preventDefault();
    userRank.textContent = "You selected"
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
            userRank.textContent = userRank.textContent + " " + inputs[i].value + " out of 5";
            return;
        }
    }
    alert("Please, select a rank");
}

function setLabelFocused(e){
    e.target.parentElement.classList.add("label-focus");
    inputs.forEach(entrada => {
        if(entrada != e.target && entrada.parentElement.classList.length != 0){
            entrada.parentElement.classList.remove("label-focus");
        }
    })
}


form.addEventListener("submit", getUserRank);

inputs.forEach(input => input.addEventListener("click", setLabelFocused));
