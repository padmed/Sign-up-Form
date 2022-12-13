const rePassword = document.getElementById("rep-pswd");

rePassword.addEventListener('input', (event) => {
    const password = document.getElementById("pswd");
    // console.log(`pswd ${password.value}`);
    // console.log(`repeated ${event.target.value}`)


    if (password.value !== event.target.value && password.checkValidity()) {
        event.target.setCustomValidity("Error");
    } else if (password.value === event.target.value && password.checkValidity()) {
        event.target.setCustomValidity("");
    } else {
        event.target.setCustomValidity("Error");
    }

})