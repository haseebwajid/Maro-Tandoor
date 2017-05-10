var mongoose = require('mongoose');

var dealsSchema = new mongoose.Schema({
	Name:String,
	cdesc:String,
	price:Number,
	options:[[{Category:String,item:String}]]
});

mongoose.model('Deals', dealsSchema);

var Deals = mongoose.model('Deals', dealsSchema);

Deals.create({
	Name:'Bhook Maro',
	cdesc:'3 savory Naans of your choics\n 2 drinks of your choice',
	price:'725',
	options:[[{Category:'Naan',item:'Chicken Qeema Naan'},{Category:'Naan',item:'Cheese Naan'},{Category:'Naan',item:'Steak and Cheese Naan'},{Category:'Naan',item:'Chicken Terragon'}],
			[{Category:'Naan',item:'Chicken Qeema Naan'},{Category:'Naan',item:'Cheese Naan'},{Category:'Naan',item:'Steak and Cheese Naan'},{Category:'Naan',item:'Chicken Terragon'}],
			[{Category:'Naan',item:'Chicken Qeema Naan'},{Category:'Naan',item:'Cheese Naan'},{Category:'Naan',item:'Steak and Cheese Naan'},{Category:'Naan',item:'Chicken Terragon'}],
		   [{Category:'Drink',item: 'Blue Lagoon'},{Category:'Drink',item: 'Spanish Margarita'},{Category:'Drink',item: 'Peach Delight'}],
		   [{Category:'Drink',item: 'Blue Lagoon'},{Category:'Drink',item: 'Spanish Margarita'},{Category:'Drink',item: 'Peach Delight'}]],

},(err)=>{
	if(err){
		return handleError(err);
	}
});

Deals.create({
	Name:'Family Deal',
	cdesc:'Perfect for a family of four',
	price:'1250',
	options:[[{Category:'Naan',item:'Chicken Qeema Naan'},{Category:'Naan',item:'Cheese Naan'}],
			[{Category:'Naan',item:'Chicken Qeema Naan'},{Category:'Naan',item:'Cheese Naan'}],
		   [{Category:'Drink',item: 'Blue Lagoon'},{Category:'Drink',item: 'Spanish Margarita'}],
		   [{Category:'Drink',item: 'Blue Lagoon'},{Category:'Drink',item: 'Spanish Margarita'}]],

},(err)=>{
	if(err){
		return handleError(err);
	}
});

