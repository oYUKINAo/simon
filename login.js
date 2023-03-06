function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
}
//we did assign as id=name for input for username
//store input value in localstorage as userName 
//I think window allows to see the username from other page