export const arrayMethod = {
	find: {
		data: `<p>const nameList = [</p>
                
            <p>{ firstname: 'Jaclyn', surname: 'B' },</p>
            <p>{ firstname: 'Magaly', surname: 'Y' },</p>
            <p>{ firstname: 'Merle', surname: ''K },</p>
            <p>{ firstname: 'Remona', surname: 'L' },</p>
            <p>{ firstname: 'Anabel', surname: 'S' },</p>
            <p>{ firstname: 'Evangelina', surname: 'D' },</p>
            <p>{ firstname: 'Jscodelover', surname: 'B' },</p>
            <p>{ firstname: 'Romelia', surname: 'G' },</p>
            <p>{ firstname: 'Trudi', surname: 'T' },</p>
            <p>{ firstname: 'Rosy', surname: 'S' }</p>
            <p>];</p>`,
		function: ` <p>const getName = nameList.find(function(name){</p>
                        <p>return name.firstname === 'Jscodelover';</p>
                    <p>});</p>`,
		alternative_function: `<p>const getName = nameList.find(name => name === 'Jscodelover');</p>`,
		result: `console.log(getname);`
	},
	findIndex: {
		data: `<p>const floorOwners = [</p>
                <p>'Jaclyn',</p> 
                <p>'Magaly',</p> 
                <p>'Merle',</p> 
                <p>'Remona',</p> 
                <p>'Anabel',</p> 
                <p>'Evangelina',</p> 
                <p>'Jscodelover',</p> 
                <p>'Romelia',</p> 
                <p>'Trudi',</p> 
                <p>'Rosy'</p>
            <p>];</p>`,
		function: ` <p>const floorNo = floorOwners.findIndex(function(owner){</p>
                        <p>return owner === 'Jscodelover';</p>
                    <p>});</p>`,
		alternative_function: `<p>const floorNo = floorOwners.findIndex(owner => owner === 'Jscodelover');</p>`,
		result: `console.log(floorNo);`
	},
	reduce: {
		data: `<p>let peopleData = [</p>
                <p>{
                    country: 'China',
                    name: 'Hai Rong',
                },</p>
                <p>{
                    country: 'India',
                    name: 'Rohan',
                },</p>
                <p>{
                    country: 'USA',
                    name: 'Jack',
                },</p>
                <p>{
                    country: 'India',
                    name: 'Niti',
                },</p>
                <p>{
                    country: 'China',
                    name: 'Huang',
                },</p>
                <p>{
                    country: 'USA',
                    name: 'Harry',
                },</p>
            <p>];</p>`,
		function: ` <p>const indianCitizen = peopleData.reduce(function(acc, info){</p>
                        <p>if(info.country === 'India'){</p>
                            <p>&emsp;&emsp;return acc.concat(info.name);</p>
                            <p>}</p>
                        <p>return acc;</p>    
                    <p>}, []);</p>`,
		result: `console.log(indianCitizen);`
	},
	map: {
		data: `<p>const personWithLikes = [ </p> 
                <p>{ name: 'Jonathan', likes: 'Grilled Chicken' },</p>
                <p>{ name: 'Janes', likes: 'Cold Beer' },</p>
                <p>{ name: 'Camilla', likes: 'Fish' }</p>
                <p>{ name: 'Kiaan', likes: 'Burger' }</p>
                <p>{ name: 'Jaanvi', likes: 'Cake' }</p>
            <p>];</p>`,
		function: ` <p>const personByFood = personWithLikes.map(item => {</p>
                        <p>const container = {};</p>
                        <p>container[item.name] = item.likes;</p>
                        <p>return container;</p>
                    <p>});</p>
                `,
		result: `console.log(personByFood);`
	},
	filter: {
		data: `<p>const heroes = [</p>
                <p>{name: 'Batman', franchise: 'DC'},</p>
                <p>{name: 'Ironman', franchise: 'Marvel'},</p>
                <p>{name: 'Thor', franchise: 'Marvel'},</p>
                <p>{name: 'Superman', franchise: 'DC'}</p>
            <p>];</p>`,
		function: ` <p>const marvelHeroes =  heroes.filter(function(hero) {</p>
                        <p>return hero.franchise == 'Marvel';</p>
                    <p>}); </p>`,
		alternative_function: `<p>const marvelHeroes = heroes.filter(hero => hero.franchise === 'Marvel');</p>`,
		result: `console.log(marvelHeroes);`
	},
	some: {
		data: `<p>const employes = [</p>
                <p>{name: 'Sam', language: 'java'},</p>
                <p>{name: 'Simaran', language: 'php'},</p>
                <p>{name: 'Happy', language: 'reactjs'},</p>
                <p>{name: 'Sunny', language: 'vuejs'}<p>
            <p>];</p>`,
		function: ` <p>const haveReactEmployee =  employes.some(function(employee) {</p>
                        <p>return employee.language == 'reactjs';</p>
                    <p>}); </p>`,
		alternative_function: `<p>const haveReactEmployee = heroes.some(employee => employee.language === 'reactjs');</p>`,
		result: `console.log(haveReactEmployee);`
	},
	every: {
		data: `<p>const employes = [</p>
                <p>{name: 'Sam', language: 'java'},</p>
                <p>{name: 'Simaran', language: 'php'},</p>
                <p>{name: 'Happy', language: 'reactjs'},</p>
                <p>{name: 'Sunny', language: 'vuejs'}</p>
            <p>];</p>`,
		function: ` <p>const haveReactEmployee =  employes.every(function(employee) {</p>
                        <p>return employee.language == 'reactjs';</p>
                    <p>}); </p>`,
		alternative_function: `<employee.language>const haveReactEmployee = heroes.every(employee => employee.language === 'reactjs');</p>`,
		result: `console.log(haveReactEmployee);`
	},
	sortA: {
		data: `<p>const students = [</p>
                <p>'Akhil',</p>
                <p>'Rohan',</p>
                <p>'Vicky',</p>
                <p>'Niti',</p>
                <p>'Jack',</p>
                <p>'Huang'</p>
            <p>];</p>`,
		function: ` <p>const studentAsc =  students.sort(function(student1, student2) {</p>
                        <p>return student1 < student2? -1 : 1;</p>
                    <p>}); </p>`,
		alternative_function: `<p>const studentAsc = students.sort((student1, student2) => student1 < student2 ? -1 : 1);</p>`,
		result: `console.log(studentAsc);`
	},
	sortD: {
		data: `<p>const students = [</p>
                <p>'Akhil',</p>
                <p>'Rohan',</p>
                <p>'Vicky',</p>
                <p>'Niti',</p>
                <p>'Jack',</p>
                <p>'Huang'</p>
            <p>];</p>`,
		function: ` <p>const studentDesc =  students.sort(function(student1, student2) {</p>
                        <p>return student1 > student2? -1 : 1;</p>
                    <p>}); </p>`,
		alternative_function: `<p>const studentDesc = students.sort((student1, student2) => student1 > student2 ? -1 : 1);</p>`,
		result: `console.log(studentDesc);`
	},
	from: {
		data: `<p>const handler = '@jscodelover';</p>`,
		function: `<p>const handlerArray = Array.from(handler);</p>`,
		result: `<p>console.log(handlerArray);</p>`
	},
	forEach: {
		function: `<p>// for loop</p>
                 <br />
                <p>const array = [1,2,3];</p>
                <p>for (let i = 0; i < array.length; i++){</p>
                    <p>console.log(i);</p>
                <p>}</p>`,
		alternative_function: `<p>// Javascript .forEach() method is just a different way of doing this.</p>
                                <br />
                                <p>const array = [1,2,3];</p>
                                <p>array.forEach(function(i){</p>
                                    <p>console.log(i);</p>
                                <p>});</p>`
	}
};
