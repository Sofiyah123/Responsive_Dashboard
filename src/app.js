// add hovered class to selected list item
list = document.querySelectorAll('.navigation li');

function activelink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    })
    this.classList.add('hovered');

}
list.forEach(item=>item.addEventListener("mouseover", activelink));

// Menu Toggle
toggle = document.querySelector(".toggle");
navigation = document.querySelector(".navigation");
main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};