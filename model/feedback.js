
var mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
	name:String,
	phoneNumber:String,
	date:{type:Date, default: Date.now},
	feedback: String
});


mongoose.model('Feedback', feedbackSchema)

module.exports = addFeedback =(Name,PhoneNumber,Feedback)=>{
	mongoose.model('Feedback').create({
		name:Name,
		phoneNumber:PhoneNumber,
		feedback:Feedback
	},(err,data)=>{
		if (err)
			console.log('couldnt add feedback')
		else
			console.log('added feedback')
	})
}