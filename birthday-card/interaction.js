function validate(username, password)
{
    defUser = "birthdaygirl14";
    defPass = "ilovecats69";

    if (username === defUser && password === defPass) {
        return true
    }
    return false
}


function initialise(elements) 
{
    elements.forEach(element => {
        element.classList.add("hideCard");
    });
}

function showCard()
{
    // Get elements
    let container = document.getElementById("container");
    let text = document.getElementById("text");
    let link = document.getElementById("belly");
    let ems = [container, text, link];

    let userBox = document.getElementsByName("username")[0];
    let pwBox = document.getElementsByName("password")[0];

    if (validate(userBox.value, pwBox.value) === false) {
        alert("INCORRECT CREDENTIALS. PLEASE TRY AGAIN!");
        userBox.value = "";
        pwBox.value = "";
        return;
    }
    
    ems.forEach(element => {
        element.classList.remove("hideCard");
        element.classList.add("showCard");
    });
    


    /*text.classList.remove("hideCard");
    text.classList.add("showCard");
    
    container.classList.remove("hideCard");
    container.classList.add("showCard");*/
    console.log(container.classList.contains("showCard"));
    

}


document.getElementById("mainButton").addEventListener("click", showCard);
let e1 = document.getElementById("text");
let e2 = document.getElementById("belly");
let elems = [e1, e2];

initialise(elems);