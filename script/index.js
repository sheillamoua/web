hover = document.querySelector('.menu a')

hover.addEventListener('mouseenter', () =>{
    hover.style.height = "40px"
    hover.style.width = "100px"
})
consloe.log = 'hello'
hover.addEventListener('mouseleave', () =>{
    hover.style.height = "20px"
    hover.style.width = "250px"
})
