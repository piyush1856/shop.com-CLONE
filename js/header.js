
document.querySelector("#menu").addEventListener("click",show2);
function show2(event){
    event.preventDefault();
    document.querySelector("#menuSection").style.visibility="visible";
}
document.querySelector("#menu").addEventListener("dblclick",show3);
function show3(event){
    event.preventDefault();
    document.querySelector("#menuSection").style.visibility="hidden";
}



