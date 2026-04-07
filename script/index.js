hover = document.querySelector('.menua')

hover.addEventListener('mouseenter', () =>{
    hover.style.height = "40px"
    hover.style.width = "100px"
})
hover.addEventListener('mouseleave', () =>{
    hover.style.height = "20px"
    hover.style.width = "250px"
})
