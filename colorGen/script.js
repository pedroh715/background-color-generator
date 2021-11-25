const codHex = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const generateColor = document.querySelector('.btn-gen')
let newColor = []

generateColor.addEventListener('click', function() {
    for (let i = 0; i <= 5; i++) {
        const random = Math.floor(Math.random() * codHex.length)
        newColor[i] = [codHex[random]]
    }
    let newColorHex = newColor.join('')
    document.body.style.backgroundColor = '#' + newColorHex
    
    let hexInHTML = document.querySelector('.colorHex')
    hexInHTML.textContent = '#' + newColorHex
})