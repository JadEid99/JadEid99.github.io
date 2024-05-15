var images = ["img/Cake1.png", "img/Cake2.png", "img/Cake3.png", "img/Cake4.png", "img/Cake5.png", "img/Cake6.png", "img/Cake7.png"]
var i = 1
function changeImage() {
    if (i < 8){
    document.getElementById("imgClickAndChange").src = images[i];
    i++
    }
    if (i == 8){
    document.getElementById("imgClickAndChange").src = "img/Cake1.png"
    i = 1
    }
}