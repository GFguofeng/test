// 获取弹窗
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modala = document.getElementById('myModala');
var modalb = document.getElementById('myModalb');
var modalc = document.getElementById('myModalc');

// 打开弹窗的按钮对象
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btna = document.getElementById("myBtna");
var btnb = document.getElementById("myBtnb");
var btnc = document.getElementById("myBtnc");
 
// 获取 <span> 元素，用于关闭弹窗
var span = document.getElementById("CLOSE");
var span2 = document.getElementById("CLOSE2");
var spana = document.getElementById("CLOSEa");
var spanb = document.getElementById("CLOSEb");
var spanc = document.getElementById("CLOSEc");
 
// 点击按钮打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btna.onclick = function() {
    modala.style.display = "block";
}
btnb.onclick = function() {
    modalb.style.display = "block";
}
btnc.onclick = function() {
    modalc.style.display = "block";
}
 
// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
spana.onclick = function() {
    modala.style.display = "none";
}
spanb.onclick = function() {
    modalb.style.display = "none";
}
spanc.onclick = function() {
    modalc.style.display = "none";
}
 
// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modala) {
        modala.style.display = "none";
    }
    if (event.target == modalb) {
        modalb.style.display = "none";
    }
    if (event.target == modalc) {
        modalc.style.display = "none";
    }
}
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal2.style.display = "none";
//     }
// }
// ------------------------------------------------------------------------------------------
// 提示弹窗
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}