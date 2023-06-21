let txt = document.getElementById("txt");
let btn = document.getElementById("btn");

function changeColor(color){
    document.body.style.background = color;
    btn.style.background = color;
    txt.style.color = color;

    document.querySelectorAll("span").forEach(function(item){
        item.classList.remove("active");
    })
        event.target.classList.add("active");
}