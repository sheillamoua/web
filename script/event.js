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
    if (event.key == 'ArrowRight') {
        x = x + 10;
        move.style.transform = `translate(${x}px, ${y}px)`
    }
    if (event.key == 'ArrowUp') {
        y = y - 10;
        move.style.transform = `translate(${y}px, ${x}px)`
    }
})
