const button = document.querySelector('#submit')
const hexcode1 = document.querySelector('#hexcode1')
const hexcode2 = document.querySelector('#hexcode2')

button.addEventListener('click', () => {
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    var hex_code1 = ""
    var hex_code2 = ""
    var random_index = 0

    for(let i = 0; i < 6; i++){
        random_index = Math.floor(Math.random() * hex_numbers.length)
        hex_code1 = hex_code1 + hex_numbers[random_index]
        random_index = Math.floor(Math.random() * hex_numbers.length)
        hex_code2 = hex_code2 + hex_numbers[random_index]
    }

    document.body.style.background = `linear-gradient(to right, #${hex_code1}, #${hex_code2})`
    hexcode1.textContent = hex_code1
    hexcode2.innerText = hex_code2
})