
var mongoose=require('mongoose');

var promoCodeSchema = new mongoose.Schema({
	promoCode: String,
	discount: Number,
	validity: {type: Date, default: Date.now}
});

mongoose.model('Promo',promoCodeSchema)

module.exports = addPromoCode = (promoCodeStr, discountPer, validityDate)=>{
	mongoose.model('Promo').create({
		promoCode:promoCodeStr,
		discount:discountPer,
		validity:validityDate
	},(err,promo)=>{
		if(err){
			console.log("Couldn't add promo code")
		}else{
			console.log("Successfully added promocode")
		}
	})
}