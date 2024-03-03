const menu_icon = document.getElementById("menu");
const navdiv2 = document.querySelector(".navdiv2");
menu_icon.addEventListener("click",bring_in);


let menu_icon_count=0;
function bring_in(event){
    if(menu_icon_count==0){
        console.log();
        navdiv2.style.display="flex";
        navdiv2.style.animation="entry 0.6s ease-in-out forwards";
        menu_icon_count++;
        
        
    }
    else{
        menu_icon_count=0;
        navdiv2.style.animation="exit 0.6s ease-in-out forwards";
    }

    // animation: exit 0.6s ease-in-out forwards;
}

const navdiv2_children = navdiv2.children;
console.log(typeof navdiv2_children,navdiv2_children);

Array.from(navdiv2_children).forEach(element => {
    element.addEventListener("click" , bring_in);
    

});

