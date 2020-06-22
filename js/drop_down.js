function drop(){
    let dropdown = document.getElementById("dropdown-btn");
    let drop_menu = document.getElementById("dropdown-container");
    if (drop_menu.style.display === "block") {
        drop_menu.style.display = "none";
    } else {
        drop_menu.style.display = "block";
}
}

function dropFlag(){
    let dropdown = document.getElementById("drop-btn");
    let drop_menu = document.getElementById("dropdown-container_flag");
    
    if (drop_menu.style.display === "flex") {
        drop_menu.style.display = "none";
    } else {
        drop_menu.style.display ="flex"
}
}
