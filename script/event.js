spin = document.querySelector('.start')
click = document.querySelector('.click')

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
