buttons = document.querySelector('.buttons')
console.log("HELLO")
// sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


console.log(buttons)
    btn = document.createElement('button')
    btn.innerText = "HELLO"
    btn.classList.add('btn')
    buttons.appendChild(btn)

    console.log(btn)

// for(let i = 0; i < 6 ; i = i + 1) {
//     btn = document.createElement('button')
//     btn.innerText = sounds[i]
//     btn.classList.add('btn')
//     btn.addEventListener('click', () => {
//         document.querySelector(`.${sounds[i]}`).play()
//     })
//     buttons.appendChild(btn)
// }
