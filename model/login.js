var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
	id:Number,
	username: String,
	password: String,
	role: String,
	branch: String
});

mongoose.model('Login', loginSchema);

var Login = mongoose.model('Login', loginSchema);

// Login.create({
// 	id:1,
// 	username:'Umair',
// 	password:'abc',
// 	role:'Marketing',
// 	branch:'DHA'

// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Login.create({
// 	id:2,
// 	username:'Ausaf',
// 	password:'abc',
// 	role:"Order",
// 	branch:'DHA'
	
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });

// Login.create({
// 	id:3,
// 	username:'Haseeb',
// 	password:'abc',
// 	role:"Order",
// 	branch:'ModelTown'
	
// },(err)=>{
// 	if(err){
// 		return handleError(err);
// 	}
// });