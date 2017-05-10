var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
	category:String,
	cdesc:String,
	items:[{item:String,desc:String, price: Number, img: ''}],
});

mongoose.model('Menu', menuSchema);

var Menu = mongoose.model('Menu', menuSchema);

// Menu.create({
// 	category:'Naan',
// 	cdesc:'A hearty filling of your choice in a naan',
// 	items:[	{item: 'Pizza Naan',desc: 'All the goodness of Pizza, packed inside a Naan', price: '200'},
// 			{item: 'Cheese Naan',desc: 'The cheesiest kid round the block', price: '150'},
// 			{item: 'Nutella Naan',desc: 'NUTELLA, need we say more?', price: '175'},
// 			{item: 'Snickers Naan',desc: 'For the nutty lovers amongst us', price: '190'},
// 			{item: 'Hotnut Naan',desc: 'Like walnut pie, but better', price: '190'},
// 			{item: 'Chicken Teriyaki Naan',desc: 'Tangy barbeque sauce and crunchy onions, hungry yet?', price: '210'},
// 			{item: 'Steak and Cheese Naan',desc: 'Premium Beef steak cuts in a cheesy sauce', price: '210'},
// 			{item: 'Chicken Terragon',desc: 'Smoked Chicken in white sauce, for the Gourmet lovers', price: '210'},
// 			{item: 'Chicken Achari',desc: 'For the desi inside us, a kick of achar', price: '200'},
// 			{item: 'Madraasi Handi Naan',desc: 'From the Mughal era, the handi we adore', price: '195'},
// 			{item: 'Chicken Qeema Naan',desc: 'The classic Chicken Qeema Naan', price: '160'},
// 			{item: 'Beef Qeema Naan',desc: 'The classic Beef Qeema Naan', price: '180'},
// 			{item: 'Mutton Qeema Naan',desc: 'The classic Mutton Qeema Naan', price: '290'},
// 			{item: 'Spinach and Potato',desc: 'Burger name for the Aloo wala naan', price: '80'}


// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'Welayti Beverages',
// 	cdesc:'To quench the thirst for the burger in us',
// 	items:[	{item: 'Mint Margarita',desc: 'The classic mint margarita', price: '150'},
// 			{item: 'Spanish Margarita',desc: 'Cool red grape margarita with a kick of lime', price: '170'},
// 			{item: 'Peach Delight',desc: 'Peach chiller with a smooth icy base', price: '210'},
// 			{item: 'Pina Colada',desc: 'The classic pina colada', price: '190'},
// 			{item: 'Blue Lagoon',desc: 'Just like the inventors made it', price: '210'},
// 			{item: 'Fresh Lime',desc: 'Fountain soda served with lime', price: '120'},
// 			{item: 'Coke/Sprite/Fanta',desc: 'Please specify choice in order details', price: '60'},
// 			{item: 'Mineral Water Large',desc: '', price: '80'},
// 			{item: 'Mineral Water Small',desc: '', price: '40'},
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'Lassis',
// 	cdesc:'Sheraan di pyaar wastay changi Lassian',
// 	items:[	{item: 'Gurr wali Lassi',desc: 'The classic lassi made with a Gurr base', price: '150'},
// 			{item: 'Meethi Lassi',desc: 'Classic Meethi lassi', price: '130'},
// 			{item: 'Namkeen Lassi',desc: 'The Classic Chaati kee lassi', price: '90'},
// 			{item: 'Mango Lassi',desc: 'Mango smoothie prepared by Sughraan', price: '210'},
// 			{item: 'Strawberry Lassi',desc: 'Strawberry smoothie prepared by Sughraan', price: '210'},
// 			{item: 'Nutella Lassi',desc: 'Nutella smoothie prepared by Sughraan', price: '290'}
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'Naanzones',
// 	cdesc:'A hearty filling of your choice in a calzone made of naan dough',
// 	items:[	{item: 'Steak and Cheese',desc: 'Steak and cheese calzone with naan dough', price: '290'},
// 			{item: 'Arabic Shawarma',desc: 'Slow grilled chicken calzone with tahini', price: '310'},
// 			{item: 'Makhni Handi',desc: 'Makhni Haandi filling in naan dough', price: '290'}
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'RolyPoly',
// 	cdesc:'A hearty filling of cheese in your choice of seekh kabab rolled in naan dough',
// 	items:[	{item: 'Beef RolyPoly',desc: 'Beef seekh kebab rolled in naan dough', price: '130'},
// 			{item: 'Chicken RolyPoly',desc: 'Chicken seekh kebab rolled in naan dough', price: '110'},
// 			{item: 'Mutton RolyPoly',desc: 'Mutton seekh kebab rolled in naan dough', price: '190'}
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });