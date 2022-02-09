// step 1 -> create onload handler
window.onload = () => {
    main()
}
// setp 2 -> main function
function main(){
    console.log('I Love You Toma.');
    const root = document.getElementById('root')
    const button = document.getElementById('clickMe')


    button.addEventListener('click', function(){
        const bgColor = randomRGBColorGenaretor()
        root.style.backgroundColor = bgColor;
    })
}

// step 3 -> randome RGB Color Genator
function randomRGBColorGenaretor(){
    // rgb(0, 0, 0), rgb(255, 255, 255)
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}

// step 4 -> collect all necessary color

// step 5 -> click event handler