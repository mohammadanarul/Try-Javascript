// const aBtn = document.getElementById('alertBtn')
// const title = document.querySelector('#title')
// const tags = document.getElementsByClassName('badge')

// for (let t in tags) {
// 	tags[t].className = 'badge bg-success p-2 m-1'
// 	tags[t].className = 'badge bg-primary p-2 m-1'
// 	tags[t].className = 'badge bg-warning p-2 m-1'
// 	tags[t].className = 'badge bg-secondary p-2 m-1'
// 	tags[t].className = 'badge bg-success p-2 m-1'
// }

// title.addEventListener('mouseover', function(e){
// 	console.log(e);
// 	title.innerHTML = 'I Love You Toma!'
// 	title.className = 'text-center text-muted border mt-5 py-3'
// })
// // title.className = 'text-center text-muted border mt-5 py-3'
// let currentTitle = title.textContent
// let nexttitle = 'I Love You Toma!'

// aBtn.addEventListener('click', (e)=>{
// 	aBtn.className = 'btn btn-primary'
// 	const temp = currentTitle
// 	currentTitle = title.innerHTML = nexttitle
// 	nexttitle = temp
// 	// title.className = 'text-center text-muted border mt-5 py-3'
// })

// const input = document.getElementById('inputType')
// const output = document.getElementById('output')

// input.addEventListener('keyup', (e)=>{
// 	output.innerHTML = e.target.value;
// })

// console.log('I Love You Toma!')


const incrementBtn = document.getElementById('increment-btn')
const decreementBtn = document.getElementById('decrement-btn')
const counterDisplay = document.getElementById('counter-display')


let count = 0
incrementBtn.addEventListener('click', function(e){
	console.log('I Love You Toma.');
	count += 1
	counterDisplay.innerHTML = count;
})

decreementBtn.addEventListener('click', function(e){
	console.log('Toma You Hate me.');
	count --
	counterDisplay.innerHTML = count;
	
})