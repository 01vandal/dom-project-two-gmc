

const box = document.getElementById("box")


const btn = document.getElementById("btn")


btn.addEventListener('click', () => getRandomColor())




const getRandomColor = () => {
    let r = Math.floor(Math.random() * 255 + 1)
    let g = Math.floor(Math.random() * 255 + 1)
    let b = Math.floor(Math.random() * 255 + 1)

    let color = `rgb(${r}, ${g}, ${b})`

    box.style.backgroundColor = color
    console.log(color)
}