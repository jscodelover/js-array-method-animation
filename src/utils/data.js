export const arrayMethod = {
	find: {
		data: `const nameList = ['Jaclyn', 'Magaly', 'Merle', 'Remona', 'Anabel', 'Jscodelover', 'Evangelina', 'Romelia', 'Trudi', 'Rosy'];`,
		function: ` const getName = nameList.find(function(name){
                        return name === 'Jscodelover';
                    });`,
		alternative_function: `const getName = nameList.find(name => name === 'Jscodelover');`,
		result: `console.log(getname());`
	},
	findIndex: {
		data: `const floorOwners = ['Jaclyn', 'Magaly', 'Merle', 'Remona', 'Anabel', 'Jscodelover', 'Evangelina', 'Romelia', 'Trudi', 'Rosy'];`,
		function: ` const floorNo = floorOwners.findIndex(function(owner){
                        return owner === 'Jscodelover';
                    });`,
		alternative_function: `const floorNo = floorOwners.findIndex(owner => owner === 'Jscodelover');`,
		result: `console.log(floorNo());`
	},
	reduce: {
		data: `const letterArray = ['J', 'S', 'CODE', 'L', 'O', 'V', 'E'];`,
		function: ` const word = letterArray.reduce(function(acc, letter){
                        return acc+letter;
                    }, '');`,
		alternative_function: `const word = letterArray.reduce((acc, letter) => { return acc+letter; }, '');`,
		result: `console.log(word());`
	}
};
