spin = document.querySelector('.start')
click = document.querySelector('.click')
move = document.querySelector('.move')
hover = document.querySelector('.hover')
dblclick = document.querySelector('.dblclick')


colors = ['blue','purple','pink']
index = 0
click.addEventListener('click', () => {
    click.style.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
    click.style.color = 'white'
})

spin.addEventListener('click', () =>{
    spin.classList.toggle('start')
})

x = 0
y = 0

document.addEventListener('keydown',(event) =>{
    if (event.key == 'ArrowRight') { x = x + 10;}
    if (event.key == 'ArrowUp') {y = y - 10;}
    if (event.key == 'ArrowLeft') {x = x - 10;}
    if (event.key == 'ArrowDown') {y = y + 10;}
    move.style.transform = `translate(${x}px, ${y}px)`
})


hover.addEventListener('mouseenter', () =>{
    hover.style.height = "40px"
    hover.style.width = "100px"
})

hover.addEventListener('mouseleave', () =>{
    hover.style.height = "60px"
    hover.style.width = "250px"
})

dblclick.addEventListener("dblclick", () => {
    load = 0
    load = load + 1
    dblclick.style.opacity = 0

})

