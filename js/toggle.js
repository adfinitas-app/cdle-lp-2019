function expand(index) {
    let target = document.getElementById(index);
    var up = target.parentElement;
    up.querySelector(".discover").style.display = "none";
    up.style.height = "1100px";
    

    setTimeout(function(){ target.style.display = "flex";}, 500);
}

function reduce(index) {
    let target = document.getElementById(index);
    var up = target.parentElement;
    target.style.display = "none";
    up.style.height = "320px";
    up.querySelector(".discover").style.display = "flex";
}

function toggle_menu(index1,index2) {
    let target = document.getElementById(index1);
    if(!target.classList.contains("active")){
        let off = document.getElementById(index2);
        target.classList.add("active");
        off.classList.remove("active");
        document.querySelector("#"+index1+"_content").classList.add("active");
        document.querySelector("#"+index2+"_content").classList.remove("active");
    }
}
    
