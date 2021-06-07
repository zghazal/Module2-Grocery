	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Yogurt",
		lactose: true,
		nuts: false,
		organic: true,
		price: 1.99
	},
	{
		name: "White Rice",
		lactose: false,
		nuts: false,
		organic: false,
		price: 2.99
	},
	{
		name: "Granola Bar",
		lactose: false,
		nuts: true,
		organic: true,
		price: 0.99
	},
	{
		name: "Lettuce",
		lactose: false,
		nuts: false,
		organic: true,
		price: 1.99
	},
	{
		name: "Ice Cream",
		lactose: true,
		nuts: false,
		organic: false,
		price: 3.99
	},
	{
		name: "Almond Milk",
		lactose: false,
		nuts: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Pumpkin Pie",
		lactose: false,
		nuts: false,
		organic: true,
		price: 5.99
	},
	{
		name: "Cheese",
		lactose: true,
		nuts: false,
		organic: false,
		price: 6.99
	},
	{
		name: "Chicken",
		lactose: false,
		nuts: false,
		organic: false,
		price: 7.99
	},
	{
		name: "Pasta",
		lactose: false,
		nuts: false,
		organic: false,
		price: 2.99
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactose, nuts, organic) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		if(lactose){
			if(nuts){
				if(organic){
					if(prods[i].lactose == false && prods[i].nuts == false && prods[i].organic == true){
						product_names.push(prods[i]);
						continue;
					}
				}
				else{
					if(prods[i].lactose == false && prods[i].nuts == false){
						product_names.push(prods[i]);
						continue;
					}
				}
			}
			else if(organic){
				if(prods[i].lactose == false && prods[i].organic == true){
					product_names.push(prods[i]);
					continue;
				}
			}
			else{
				if(prods[i].lactose == false){
					product_names.push(prods[i]);
					continue;
				}
			}
		}
		else if(nuts){
			if(organic){
				if(prods[i].lactose == false && prods[i].organic == true){
					product_names.push(prods[i]);
					continue;
				}
			}
			else{
				if(prods[i].nuts == false){
					product_names.push(prods[i]);
					continue;
				}
			}
		}
		else if(organic){
			if(prods[i].organic == true){
				product_names.push(prods[i]);
				continue;
			}
		}
		else{
			product_names.push(prods[i]);
		}
	}
	let sortedproducts = [];
	let min;
	let product;
	while(product_names.length > 0){
		min = 10000000
		product = 0;
		for(let j = 0; j <product_names.length; j+=1){

			if(product_names[j].price < min){
				min = product_names[j].price;
				product = j;
			}
		}
		sortedproducts.push(product_names[product]);
		product_names.splice(product, 1);
	}
	return sortedproducts;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function getProducts(){
	return products;
}