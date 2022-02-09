
// one dimensional array
const numbers = [1,2,3,4,5,6,7,8]

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
		console.log(`Person ${i} ${j} = ${persons[i][j]}`);
	}
}