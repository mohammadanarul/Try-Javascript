// one dimensional array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
	// console.log(numbers[i]);
}

// two Dimensional array
const persons = [
	['Mohammd Anarul', 23, 'Mst Angura Begum', 'Md Rofikul Islam', 'Degree'],
	['Mohammd Anarul', 23, 'Mst Angura Begum', 'Md Rofikul Islam', 'Degree'],
	['Mohammd Anarul', 23, 'Mst Angura Begum', 'Md Rofikul Islam', 'Degree'],

]


for (let i = 0; i < persons.length; i++) {
	for (let j = 0; j < persons[i].length; j++) {
		// console.log(`Person ${i} ${j} = ${persons[i][j]}`);
	}
}

const arr = [1, 2, 3, 3, 4, 45, null, {}, false, false, 90, '', 'Python', 'Javascript', 12]

let counter = 0

for (let i = 0; i < arr.length; i++) {
	for (let t = i; t < arr.length -1; t++) {
		if (typeof arr[t] !== 'number') {
			arr[t] = arr[t + 1]
			arr[t + 1] = undefined
		}
	}
	if (arr[i] === undefined){
		counter++
	}
}
arr.length -= counter
console.log(arr);
console.log(counter);

	// newArr.forEach((value, index)=>{console.log(`${value} + ${index}`);})