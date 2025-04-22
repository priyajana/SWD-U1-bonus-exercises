/*****************************/
/******** OBJECT OPS *********/
/*****************************/

/*
	In JavaScript, objects hold key/value pairs and are useful for structuring multiple properties that belong together. Here are a few examples of how to loop through properties.  
*/


/**** ALL THINGS OBJECT-RELATED ****/

/* 
	Because objects are organized not by index but by keys, JavaScript has a different (and very simple!) way to loop through an object's properties. It's called a "for...in loop".

 Note: you can't use dot notation with a for...in loop, just bracket notation.
*/

// EXAMPLE: Let's loop through the object below and print the value for each key.

let sunsetDiner = {
	name: "The Sunset Diner",
	location: "Pleasant Pines, AZ",
	cuisine: "Classic American",
	knownFor: ["Betty's Best Burger", "Hot Cakes & Tots", "Strawberry Oreo Milkshake"],
	priceRating: "$"
}; // Reminder: objects require semicolons after them

// Give the iterator any variable name you want, then use that inside the loop to refer to each new key.
for (let someKey in sunsetDiner) {
	console.log(sunsetDiner[someKey]);
}

// Did you notice that the value for knownFor is an array? What if we need to loop through that as well? Let's put a regular for loop (for arrays) inside the for...in loop (for objects).

// Let's say we don't know which keys have arrays, but we need to print only the elements in any arrays found. We'll use a conditional with the helpful Array method .isArray() to see if the key holds an array in the first place, then loop to print the array's contents if that evaluates to true.
for (let aKey in sunsetDiner) {
	if (Array.isArray(sunsetDiner[aKey])) {
		for (el of sunsetDiner[aKey]) {
			console.log(el);
		}
	}
}

// Okay we know now what all the keys and data structures are. Let's use all its information to print a cohesive and useful statement in a template literal. Pay attention to the syntax of all the references in the placeholders.
console.log(`\nNext time you take a road trip through the Southwest, don't miss ${sunsetDiner.name} in ${sunsetDiner.location}, best in class for its ${sunsetDiner.cuisine} fare. Signature dishes include the mouth-watering ${sunsetDiner.knownFor[0]}, ${sunsetDiner.knownFor[1]}, and the delicious ${sunsetDiner.knownFor[2]}. \nPrice rating: ${sunsetDiner.priceRating}\n`);

// That's all well and good, but we've made it very specific to the Sunset Diner with the variable name for the object. This template literal could be really useful for multiple restaurants. Let's create a couple more restaurants.

let maggiesPizza = {
	name: "Maggie's Pizza",
	location: "Glass Lake, NY",
	cuisine: "Casual Italian",
	knownFor: ["Chicken Parm Panini", "Sicilian Salad", "Ten-Layer Tiramisu"],
	priceRating: "$$"
};

let parthenon = {
	name: "The Parthenon",
	location: "San Jose, CA",
	cuisine: "Traditional Greek",
	knownFor: ["Slow-Roasted Leg of Lamb", "Farro Dolmas Salad", "Galaktoboureko"],
	priceRating: "$$$"
};

// Great. Now we just need to put them all in one place. Let's create an array to hold all our restaurants.

let restaurants = [sunsetDiner, maggiesPizza, parthenon];

// Ready to print statements for all three restaurants? Let's loop through our new array of objects and change the references in our template literal to handle the object at each index in the array.
for (let restaurant of restaurants) {
	console.log(`\nNext time you take a road trip through the Southwest, don't miss ${restaurant.name} in ${restaurant.location}, best in class for its ${restaurant.cuisine} fare. Signature dishes include the mouth-watering ${restaurant.knownFor[0]}, ${restaurant.knownFor[1]}, and the delicious ${restaurant.knownFor[2]}. \nPrice rating: ${restaurant.priceRating}\n`);
}


/**** YOUR TURN! ****/

/*
	You are going to accomplish the following (details further down):
		- Create two objects with identical keys but unique values.
		- Place the objects in an array.
		- Practice nesting for loops and for...in loops.
		- Loop back through, this time printing a template literal that uses the values for each object.
*/
let obj1 = 
{
	name:'Peter Parker',
	address:'20 Ingram Street,Forest Hills, Queens, New York',
	mobile: '9093424344',
	department:'Finance',
};
let obj2 = 
{
	name:'Bruce Wayne',
	address:'1007 Mountain Drive, Gotham',
	mobile: '32432434232',
	department:'HR',
};

let all_objs = [obj1,obj2];

for(let i=0; i<all_objs.length;i++)
	{
		console.log(`Printing details of Object ${i+1}`);
		for(let key in all_objs[i])
			{
				console.log(`${key}: ${all_objs[i][key]}`);
			}
		console.log('\n');
	}
/*
	Create two objects representing different local attractions (zoo, gardens, museums, etc), each with the following properties: name, location, adultTicketPrice, childTicketPrice, and famousFeatures (array of three strings). Be creative! Place the objects in an array.
*/
let attraction1 = {
	name :'City Museum',
	location: '750 N 16th St, St. Louis, MO 63103', 
	description:'City Museum is a museum whose exhibits consist largely of repurposed architectural and industrial objects',
	adultTicketPrice: '$20', 
	childTicketPrice: '$20', 
	famousFeatures:['MonstroCity','Enchanted Caves','Slides','Ferris wheel'],

};

let attraction2 = {
	name :'Gateway Arch',
	location: '100 Washington Avenue, St. Louis, Missouri 63102', 
	description:"Clad in stainless steel and built in the form of a weighted catenary arch, it is the world's tallest arch and Missouri's tallest accessible structure",
	adultTicketPrice: '$15-19', 
	childTicketPrice: '$11-15', 
	famousFeatures:['Tram Ride to the Top','Documentary Movie','Museum at the Gateway Arch','Virtual Reality Theater','St. Louis Riverfront Cruise'],

};
// TODO: create objects and put them in an array
let all_attractions = [attraction1,attraction2];
/*
	Loop through the array, then within that for loop, use a for...in loop to grab values from each key and print them to the console. If you come across a key storing an array, print each element in the array instead of the array itself.
	 Remember that you need a new index variable with each nested FOR loop (i, j are common).

	NOTE: This is a tough one to think through when you're new at this. If you get completely stuck, reference the solution that accompanies this starter code. But make an effort to figure it out yourself first!
*/
for(let i=0;i<all_attractions.length;i++)
{
	console.log(`Printing details of Attraction ${i+1}\n`);
	for(detail in all_attractions[i])
		{
			if(Array.isArray(all_attractions[i][detail]))
			{
					console.log(`${detail}:`);
					for(let j=0;j<all_attractions[i][detail].length;j++)
					{
						console.log(`${all_attractions[i][detail][j]}`);
					}
				}
			else
			{
				console.log(`${detail} :${all_attractions[i][detail]}`);
			}
		}
	console.log("\n");
}


// TODO: use nested loops to print values inside objects

/*
	Last task: loop through the outer array and print a single template literal for each attraction using placeholders referencing the object at each index. Here's an example:

	**********************************************
	Kendrick-Lampton Art Museum - Cedar Pointe, ID
	**********************************************
	A favorite with the locals, the Kendrick-Lampton Art Museum boasts over a dozen features, including the Manet Gallery, Renaissance Wing, and Tiffany Collection.
	Admission is $26 for adults, $14 for children ages 5-12, 
	and free for children 4 and under.
*/
for(let i=0;i<all_attractions.length;i++)
	{
		console.log(`${'*'.repeat(all_attractions[i]["name"].length)}`);
		console.log(`${all_attractions[i]["name"]} - ${all_attractions[i]["location"]}`);
		console.log(`${'*'.repeat(all_attractions[i]["name"].length)}`);
		
		console.log(`${all_attractions[i]["description"]} boasts over many features, including the ${all_attractions[i]["famousFeatures"]}. Admission is ${all_attractions[i]["adultTicketPrice"]} for adults and ${all_attractions[i]["childTicketPrice"]} for children.\n`);
		
	}

// TODO: Print a template literal

