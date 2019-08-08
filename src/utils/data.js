export const arrayMethod = {
	find: {
		data: `const nameList = ['Jaclyn', 'Magaly', 'Merle', 'Remona', 'Anabel', 'Jscodelover', 'Evangelina', 'Romelia', 'Trudi', 'Rosy'];`,
		function: ` const getName = nameList.find(function(name){
                        return name === 'Jscodelover';
                    });`,
		alternative_function: `const getName = nameList.find(name => name === 'Jscodelover');`,
		result: `console.log(getname);`
	},
	findIndex: {
		data: `const floorOwners = ['Jaclyn', 'Magaly', 'Merle', 'Remona', 'Anabel', 'Jscodelover', 'Evangelina', 'Romelia', 'Trudi', 'Rosy'];`,
		function: ` const floorNo = floorOwners.findIndex(function(owner){
                        return owner === 'Jscodelover';
                    });`,
		alternative_function: `const floorNo = floorOwners.findIndex(owner => owner === 'Jscodelover');`,
		result: `console.log(floorNo);`
	},
	reduce: {
		data: `let peopleData = [
                {
                    country: 'China',
                    name: 'Hai Rong',
                },
                {
                    country: 'India',
                    name: 'Rohan',
                },
                {
                    country: 'USA',
                    name: 'Jack',
                },
                {
                    country: 'India',
                    name: 'Niti',
                },
                {
                    country: 'China',
                    name: 'Huang',
                },
                {
                    country: 'USA',
                    pop: 'Harry',
                },
            ];`,
		function: ` const indianCitizen = peopleData.reduce(function(acc, info){
                        if(info.country === 'India')
                            return acc.concat(info.name);
                        return acc;    
                    }, []);`,
		result: `console.log(indianCitizen);`
	},
	map: {
		data: `const personWithLikes = [
                { name: 'Jonathan', likes: 'Grilled Chicken' },
                { name: 'Janes', likes: 'Cold Beer' },
                { name: 'Camilla', likes: 'Fish' }
            ];`,
		function: ` const personByFood = personWithLikes.map(item => {
                        const container = {};
                        container[item.name] = item.likes;
                        return container;
                    });
                `,
		result: `console.log(personByFood);`
	},
	filter: {
		data: `const heroes = [
                {name: 'Batman', franchise: 'DC'},
                {name: 'Ironman', franchise: 'Marvel'},
                {name: 'Thor', franchise: 'Marvel'},
                {name: 'Superman', franchise: 'DC'}
            ];`,
		function: ` const marvelHeroes =  heroes.filter(function(hero) {
                        return hero.franchise == 'Marvel';
                    }); `,
		alternative_function: `const marvelHeroes = heroes.filter(hero => hero.franchise === 'Marvel');`,
		result: `console.log(marvelHeroes);`
	},
	some: {
		data: `const employes = [
                {name: 'Sam', language: 'java'},
                {name: 'Simaran', language: 'php'},
                {name: 'Happy', language: 'reactjs'},
                {name: 'Sunny', language: 'vuejs'}
            ];`,
		function: ` const haveReactEmployee =  employes.some(function(employee) {
                        return employee.language == 'reactjs';
                    }); `,
		alternative_function: `const haveReactEmployee = heroes.some(employee => employee.language === 'reactjs');`,
		result: `console.log(haveReactEmployee);`
	},
	every: {
		data: `const employes = [
                {name: 'Sam', language: 'java'},
                {name: 'Simaran', language: 'php'},
                {name: 'Happy', language: 'reactjs'},
                {name: 'Sunny', language: 'vuejs'}
            ];`,
		function: ` const haveReactEmployee =  employes.every(function(employee) {
                        return employee.language == 'reactjs';
                    }); `,
		alternative_function: `const haveReactEmployee = heroes.every(employee => employee.language === 'reactjs');`,
		result: `console.log(haveReactEmployee);`
	},
	sortA: {
		data: `const students = [
                'Hai Rong',
                'Rohan',
                'Vicky',
                'Niti',
                'Jack',
                'Huang'
            ];`,
		function: ` const studentAsc =  students.sort(function(student1, student2) {
                        return student1 > syudent2? -1 : 1;
                    }); `,
		alternative_function: `const studentAsc = students.sort((student1, student2) => student1 > syudent2? -1 : 1);`,
		result: `console.log(studentAsc);`
	},
	sortD: {
		data: `const students = [
                'Hai Rong',
                'Rohan',
                'Vicky',
                'Niti',
                'Jack',
                'Huang'
            ];`,
		function: ` const studentDesc =  students.sort(function(student1, student2) {
                        return student1 < syudent2? -1 : 1;
                    }); `,
		alternative_function: `const studentDesc = students.sort((student1, student2) => student1 > syudent2? -1 : 1);`,
		result: `console.log(studentDesc);`
	},
	from: {
		data: `const handler = '@jscodelover';`,
		function: `const handlerArray = Array.from(handler);`,
		result: `console.log(handlerArray);`
	}
};
