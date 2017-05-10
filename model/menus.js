var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
	category:String,
	cdesc:String,
	items:[{item:String,desc:String, price: Number,img: String}]
});

mongoose.model('Menu', menuSchema);

var Menu = mongoose.model('Menu', menuSchema);

// Menu.create({
// 	category:'Naan',
// 	cdesc:'A hearty filling of your choice in a naan',
// 	items:[	{item: 'Pizza Naan',desc: 'All the goodness of Pizza, packed inside a Naan', price: '200',img: '1.jpg'},
// 			{item: 'Cheese Naan',desc: 'The cheesiest kid round the block', price: '150',img: '2.jpg'},
// 			{item: 'Nutella Naan',desc: 'NUTELLA, need we say more?', price: '175',img: '3.jpg'},
// 			{item: 'Snickers Naan',desc: 'For the nutty lovers amongst us', price: '190',img: '4.jpg'},
// 			{item: 'Hotnut Naan',desc: 'Like walnut pie, but better', price: '190',img: '5.jpg'},
// 			{item: 'Chicken Teriyaki Naan',desc: 'Tangy barbeque sauce and crunchy onions, hungry yet?', price: '210',img: '6.jpg'},
// 			{item: 'Steak and Cheese Naan',desc: 'Premium Beef steak cuts in a cheesy sauce', price: '210',img: '7.jpg'},
// 			{item: 'Chicken Terragon',desc: 'Smoked Chicken in white sauce, for the Gourmet lovers', price: '210',img: '8.jpg'},
// 			{item: 'Chicken Achari',desc: 'For the desi inside us, a kick of achar', price: '200',img: '9.jpg'},
// 			{item: 'Madraasi Handi Naan',desc: 'From the Mughal era, the handi we adore', price: '195',img: '10.jpg'},
// 			{item: 'Chicken Qeema Naan',desc: 'The classic Chicken Qeema Naan', price: '160',img: '11.jpg'},
// 			{item: 'Beef Qeema Naan',desc: 'The classic Beef Qeema Naan', price: '180',img: '12.jpg'},
// 			{item: 'Mutton Qeema Naan',desc: 'The classic Mutton Qeema Naan', price: '290',img: '13.jpg'},
// 			{item: 'Spinach and Potato',desc: 'Burger name for the Aloo wala naan', price: '80',img: '14.jpg'}


// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'Welayti Beverages',
// 	cdesc:'To quench the thirst for the burger in us',
// 	items:[	{item: 'Mint Margarita',desc: 'The classic mint margarita', price: '150',img: '15.jpg'},
// 			{item: 'Spanish Margarita',desc: 'Cool red grape margarita with a kick of lime', price: '170',img: '16.jpg'},
// 			{item: 'Peach Delight',desc: 'Peach chiller with a smooth icy base', price: '210',img: '17.jpg'},
// 			{item: 'Pina Colada',desc: 'The classic pina colada', price: '190',img: '18.jpg'},
// 			{item: 'Blue Lagoon',desc: 'Just like the inventors made it', price: '210',img: '19.jpg'},
// 			{item: 'Fresh Lime',desc: 'Fountain soda served with lime', price: '120',img: '20.jpg'},
// 			{item: 'Coke/Sprite/Fanta',desc: 'Please specify choice in order details', price: '60',img: '21.jpg'},
// 			{item: 'Mineral Water Large',desc: '', price: '80',img: '22.jpg'},
// 			{item: 'Mineral Water Small',desc: '', price: '40',img: '23.jpg'},
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'Lassis',
// 	cdesc:'Sheraan di pyaas wastay changi Lassian',
// 	items:[	{item: 'Gurr wali Lassi',desc: 'The classic lassi made with a Gurr base', price: '150',img: '24.jpg'},
// 			{item: 'Meethi Lassi',desc: 'Classic Meethi lassi', price: '130',img: '25.jpg'},
// 			{item: 'Namkeen Lassi',desc: 'The Classic Chaati kee lassi', price: '90',img: '26.jpg'},
// 			{item: 'Mango Lassi',desc: 'Mango smoothie prepared by Sughraan', price: '210',img: '27.jpg'},
// 			{item: 'Strawberry Lassi',desc: 'Strawberry smoothie prepared by Sughraan', price: '210',img: '28.jpg'},
// 			{item: 'Nutella Lassi',desc: 'Nutella smoothie prepared by Sughraan', price: '290',img: '29.jpg'}
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'Naanzones',
// 	cdesc:'A hearty filling of your choice in a calzone made of naan dough',
// 	items:[	{item: 'Steak and Cheese',desc: 'Steak and cheese calzone with naan dough', price: '290',img: '30.jpg'},
// 			{item: 'Arabic Shawarma',desc: 'Slow grilled chicken calzone with tahini', price: '310',img: '31.jpg'},
// 			{item: 'Makhni Handi',desc: 'Makhni Haandi filling in naan dough', price: '290',img: '32.jpg'}
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Menu.create({
// 	category:'RolyPoly',
// 	cdesc:'A hearty filling of cheese in your choice of seekh kabab rolled in naan dough',
// 	items:[	{item: 'Beef RolyPoly',desc: 'Beef seekh kebab rolled in naan dough', price: '130',img: '33.jpg'},
// 			{item: 'Chicken RolyPoly',desc: 'Chicken seekh kebab rolled in naan dough', price: '110',img: '34.jpg'},
// 			{item: 'Mutton RolyPoly',desc: 'Mutton seekh kebab rolled in naan dough', price: '190',img: '35.jpg'}
// 		]
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });