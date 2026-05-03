
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
        logo.setAttribute("src","byui-logo-white.png");

    } else {
    //resets to default
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "black";
        logo.setAttribute("src","byui-logo.webp");
    }

}           
                    