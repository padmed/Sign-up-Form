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

window.addEventListener('click', (event) => {
    if(['name', 'mail', 'pswd', 'rep-pswd'].includes(event.target.id)){
        const input = event.target;
        const prompt = document.querySelector(`span[data-prompt="${input.getAttribute('data-prompt')}"`);

        clearPromts();
        prompt.style.display = 'block';
    }
})


function clearPromts() {
    const prompts = document.getElementsByClassName('prompt');

    for (let i = 0; i < prompts.length; i++) {
        const prompt = prompts[i];

        prompt.style.display = 'none';
    }
}




