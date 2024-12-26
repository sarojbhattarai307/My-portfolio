
let navbar = document.querySelector(".navbar")
let navList = document.querySelector(".nav-list")  
let navMenu = document.querySelector(".menu-btn")  
let lists = document.querySelectorAll(".nav-item")
let click = true;
navMenu.addEventListener("click",()=>{
    if(click){
    navList.classList.remove('hidden')
    navList.classList.add('flex','bg-gray-500' ,'flex-col', 'absolute', 'top-5', 'right-0', 'p-5')
    click = false;    
}
})

lists.forEach((list)=>{
    list.addEventListener("click",()=>{
        if(click === false){
            navList.classList.add("hidden")
            click = true;
        
        }
        
    })
})