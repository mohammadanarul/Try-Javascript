/***
 * project requirements
 * Random hex color genaretor and change background color by click the button
 * input file up genaretor hex color
 * color code copy button
 * add a toast message
 * user can type their own hex code too
 ***/
// globals variable
let div = null
// step 1 -> create onload handler
window.onload = () => {
    main()
}
// setp 2 -> main function
function main() {
    console.log('I Love You Toma.');
    const root = document.getElementById('root')
    const button = document.getElementById('clickMe')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copyBtn')


    button.addEventListener('click', function () {
        const bgColor = randomHexColorGenaretor()
        root.style.backgroundColor = bgColor;
        output.value = bgColor.substring(1);
    })

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value)
        if (div !== null) {
            div.remove()
            div = null
        }
        if(isHexvalid(output.value)){
            generateToastMessage(`#${output.value} color copied.`)
        }else{
            generateToastMessage(`#${output.value} Invalid code code.`)
        }
    })

    output.addEventListener('keyup', function (e) {
        const color = e.target.value;
        if(color){
            output.value = color.toUpperCase()
            if (isHexvalid(color)) {
                root.style.backgroundColor = `#${color}`;
            }
        }
    })
}

// step 3 -> randome Hex Color Genator
function randomHexColorGenaretor() {
    // #0000, #ffffff
    // rgb(255, 255, 255) -> hex #ffffff

    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `#${red.toString(16).toUpperCase()}${green.toString(16).toUpperCase()}${blue.toString(16).toUpperCase()}`
}


// step 4 -> collect all necessary color

// step 5 -> click event handler

// step 6 -> active toast message

// step 7 -> create toast message
function generateToastMessage(msg) {
    div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in'
    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')
        div.addEventListener('animationend', function () {
            div.remove()
            div = null
        })
    })
    document.body.appendChild(div)

}

/**
 * @param {string} color : ;
 */
function isHexvalid(color) {
    if (color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}

// step 8 -> clear toast message
// step 9 ->  created isHexvalid function
// step 10 -> implement change handler on input field
// step 11 -> prevent copying hex code if it is not valid