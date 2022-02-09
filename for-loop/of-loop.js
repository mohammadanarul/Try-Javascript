let arr = ['Toma', 'Amena', 'Anarul', 'Angur', 'Angura', 'Rofikul', 'Awal', 'Jan', 'Love']


// direct value provide
// of for loop
for (value of arr){
	if (value == 'Toma'){
		console.log('I Love You ', value);
		for (val of value) {
			console.log(val);
		}
	}else if(value == 'Amena'){
		console.log('I Love You ', value);
	}else if (value == 'Jan'){
		console.log('I Love You ', value);
	}
}