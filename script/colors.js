bg = document.querySelector('body')
box = document.querySelector('.box')

colors = ['red','orange','yellow','green','blue','purple','pink','white']
index = 0

box.addEventListener('click', () => {
    click.style.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
})
