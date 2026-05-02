
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#333";
        logo.setAttribute("src","byui-logo-white.png");
    } else {
        document.body.style.backgroundColor = "#ffffff";
        logo.setAttribute("src","byui-logo.webp");
    }
}           
                    