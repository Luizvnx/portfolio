document.querySelector (".menu-lines").addEventListener("click",() => 
    document.querySelector(".container").classList.toggle("show-menu")
);

function goTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    })
}

