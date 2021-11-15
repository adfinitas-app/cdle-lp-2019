function expand(index) {
    let target = document.getElementById(index);
    document.querySelector(index + ".discover").style.display = "none";
    target.parentElement.style.height = "720px";
    target.style.display = "flex";
}

function reduce(index) {
    let target = document.getElementById(index);
    target.style.display = "none";
    target.parentElement.style.height = "320px";
    document.querySelector( {index} + ".discover").style.display = "flex";
}

function toggle_menu(index) {
    let target = document.getElementById(index);
    target.style.display = "none";
    target.parentElement.style.height = "320px";
}
