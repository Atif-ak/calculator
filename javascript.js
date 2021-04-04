function dis(val){
    document.getElementById("input").value+=val;
}
function solve(){
 let u = document.getElementById("input").value;
 let x = eval(u);
 document.getElementById("input").value = x;
}
function clr(){
    document.getElementById("input").value = "";
}