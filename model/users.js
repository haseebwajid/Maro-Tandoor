
var mongoose = require('mongoose');

var userSchema=new mongoose.Schema({
	name:String,
	phoneNumber:String,
	address:{streetAddress: String, colony: String, closestBranch: String},
	orderHistory:[{date:Date, items:[{Item:String, Quantity:Number, Price:Number}]}]
});

mongoose.model('User',userSchema);


module.exports = addOrder =(add,menu)=>{
	mongoose.model('Order').create({
		Name: String(add.name),
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
	console.log("HERE 2 ---------------------------")
}


module.exports = addUser =(add,order)=>{
	mongoose.model('User').create({
		name:String(add.name),
		phoneNumber:String(add.phoneno),
		address:{streetAddress: add.address, colony: add.area, closestBranch: add.area.split(' ').join('')},
		orderHistory:[{date:Date.now(), items:order.order}]
	},(err,order)=>{
		if (err){
			console.log('2. Couldnt add user'+err)
		}else{
			console.log('2. added user')
		}
	})
	console.log("HERE 1 ---------------------------")
}

module.exports = updateOrderToUser=(add,order)=>{
	var order = {date:Date.now(), items:order.order}
	mongoose.model('User').findOneAndUpdate({phoneNumber:add.phoneno},
		{$push:{orderHistory:order}},(err,user)=>{
			if(err){
				console.log('3. error updating user '+err)
			}else{
				console.log('3. update user: ')
			}
		})
	console.log("HERE 3 ---------------------------")
}

module.exports = getUser=(add)=>{
	return mongoose.model('User').findOne({phoneNumber:String(add.phoneno)})
}

module.exports = getUsers=()=>{
	return mongoose.model('User').find({})
}