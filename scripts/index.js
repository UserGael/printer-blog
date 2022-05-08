document.getElementById("displayMenu").addEventListener("click", displayMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);
function displayMenu() {
    var menu = document.getElementById("blogMenu");
    menu.style.cssText = 'display:;';
}
function closeMenu(){
    var menu = document.getElementById("blogMenu");
    menu.style.cssText = 'display:none;';
}