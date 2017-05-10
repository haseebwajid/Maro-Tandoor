
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	Name:String,
	phoneNumber: String,
	address:{streetAddress: String, colony: String, closestBranch: String},
	items:[{Item:String, Quantity: Number, Price:Number}],
	date:{type:Date, default: Date.now},
	promoCode:{type:String, default:""},
	totalAmount: Number,
	status: {type: String, default:'incomplete'}


});

// Feedback:{
//	name:String,
// 	phoneNumber:String,
// 	address:{streetAddress: String, colony: String, closestBranch: String},
// 	date:{type:Date, default: Date.now},
// 	feedback: String
// }

mongoose.model('Order', orderSchema)
var Order = mongoose.model('Order', orderSchema);


	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-25T12:00:00Z"),
	// 	totalAmount: 340,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-25T12:00:00Z"),
	// 	totalAmount: 340,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 3, Price:190},{Item:'Nutella Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-26T12:00:00Z"),
	// 	totalAmount: 1000,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 3, Price:190},{Item:'Nutella Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-26T12:00:00Z"),
	// 	totalAmount: 1000,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 1, Price:190},{Item:'Nutella Naan', Quantity: 1, Price:190},{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-27T12:00:00Z"),
	// 	totalAmount: 700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 1, Price:190},{Item:'Nutella Naan', Quantity: 1, Price:190},{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-27T12:00:00Z"),
	// 	totalAmount: 700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 5, Price:190},{Item:'Pizza Naan', Quantity: 5, Price:190}],
	// 	date:new Date("2015-03-28T12:00:00Z"),
	// 	totalAmount: 1700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 5, Price:190},{Item:'Pizza Naan', Quantity: 5, Price:190}],
	// 	date:new Date("2015-03-28T12:00:00Z"),
	// 	totalAmount: 1700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-29T12:00:00Z"),
	// 	totalAmount: 170,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Ausaf',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-29T12:00:00Z"),
	// 	totalAmount: 170,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})


	// 	Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-25T12:00:00Z"),
	// 	totalAmount: 340,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-25T12:00:00Z"),
	// 	totalAmount: 340,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 3, Price:190},{Item:'Nutella Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-26T12:00:00Z"),
	// 	totalAmount: 1000,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 3, Price:190},{Item:'Nutella Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-26T12:00:00Z"),
	// 	totalAmount: 1000,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 1, Price:190},{Item:'Nutella Naan', Quantity: 1, Price:190},{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-27T12:00:00Z"),
	// 	totalAmount: 700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 1, Price:190},{Item:'Nutella Naan', Quantity: 1, Price:190},{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-27T12:00:00Z"),
	// 	totalAmount: 700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 5, Price:190},{Item:'Pizza Naan', Quantity: 5, Price:190}],
	// 	date:new Date("2015-03-28T12:00:00Z"),
	// 	totalAmount: 1700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 5, Price:190},{Item:'Pizza Naan', Quantity: 5, Price:190}],
	// 	date:new Date("2015-03-28T12:00:00Z"),
	// 	totalAmount: 1700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-29T12:00:00Z"),
	// 	totalAmount: 170,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Umair',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-29T12:00:00Z"),
	// 	totalAmount: 170,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})

	

	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-25T12:00:00Z"),
	// 	totalAmount: 340,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-25T12:00:00Z"),
	// 	totalAmount: 340,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 3, Price:190},{Item:'Nutella Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-26T12:00:00Z"),
	// 	totalAmount: 1000,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 3, Price:190},{Item:'Nutella Naan', Quantity: 2, Price:190}],
	// 	date:new Date("2015-03-26T12:00:00Z"),
	// 	totalAmount: 1000,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 1, Price:190},{Item:'Nutella Naan', Quantity: 1, Price:190},{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-27T12:00:00Z"),
	// 	totalAmount: 700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 1, Price:190},{Item:'Nutella Naan', Quantity: 1, Price:190},{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-27T12:00:00Z"),
	// 	totalAmount: 700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Pizza Naan', Quantity: 5, Price:190},{Item:'Pizza Naan', Quantity: 5, Price:190}],
	// 	date:new Date("2015-03-28T12:00:00Z"),
	// 	totalAmount: 1700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Pizza Naan', Quantity: 5, Price:190},{Item:'Pizza Naan', Quantity: 5, Price:190}],
	// 	date:new Date("2015-03-28T12:00:00Z"),
	// 	totalAmount: 1700,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'ModelTown', closestBranch:'ModelTown'},
	// 	items:[{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-29T12:00:00Z"),
	// 	totalAmount: 170,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	// Order.create({
	// 	Name:'Haseeb',
	// 	phoneNumber: '03018474446',
	// 	address:{streetAddress: '367-L Johartown', colony:'DHA', closestBranch:'DHA'},
	// 	items:[{Item:'Cheese Naan', Quantity: 1, Price:190}],
	// 	date:new Date("2015-03-29T12:00:00Z"),
	// 	totalAmount: 170,
	// 	status:'incomplete'
	// },(err,order)=>{if(err){console.log('1. Couldnt save order')}else{console.log('1. Saved order: ')}})
	

module.exports = func=()=>{
	console.log('inside orders')
}

var getTotal=(menu)=>{
	total = 0
	menu.forEach(i => {
		console.log(i.price, i.Quantity)
		total = total + i.Price*i.Quantity
	})
	total = total+total*0.16
	return total
}

module.exports = addOrder =(add,menu)=>{
	mongoose.model('Order').create({
		Name:String(add.name),
		phoneNumber: String(add.phoneno),
		address:{streetAddress: add.address, colony: add.area, closestBranch: add.area.split(' ').join('')},
		items:menu.order,
		totalAmount: menu.totalAmt,
		status:'incomplete'
	},(err,order)=>{
		if(err){
			console.log('1. Couldnt save order')
		}else{
			console.log('1. Saved order: ')
		}
	})
}

module.exports = getAllOrders=()=>{
	return mongoose.model('Order').find({})
}
