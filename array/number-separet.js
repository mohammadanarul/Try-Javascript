const arr = [1, 2, 3, 3, 4, 45, null, {}, false, false, 90, '', 'Javascript', 'Python', 'Java', 12]


// let counter = 0

// for (let i = 0; i < arr.length; i++) {
// 	for (let t = i; t < arr.length -1; t++) {
// 		if (typeof arr[t] !== 'number') {
// 			arr[t] = arr[t + 1]
// 			arr[t + 1] = undefined
// 		}
// 	}
// 	if (arr[i] === undefined){
// 		counter++
// 	}
// }
// arr.length -= counter
// console.log(arr);
// console.log(counter);

const newArr = arr.filter((val)=>{
    if(typeof val === 'number'){
        return val
    }
})

console.log(newArr);