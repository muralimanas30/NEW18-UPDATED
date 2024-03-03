const loader_page=document.getElementById("LOADER");
console.log(loader_page);

document.addEventListener("DOMContentLoaded", fadeLoader);

function fadeLoader(){
    document.body.removeChild(loader_page);
    // setTimeout(function(){document.body.removeChild(loader_page);},3000)
    
}
