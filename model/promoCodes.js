
var mongoose=require('mongoose');

var promoCodeSchema = new mongoose.Schema({
	promoCode: String,
	discount: Number,
	Active: Boolean,
});

mongoose.model('Promo',promoCodeSchema)

var Promo = mongoose.model('Promo', promoCodeSchema);

// Promo.create({
// 	promoCode:'1234ABC',
// 	discount:'10',
// 	Active:true,
// })

// Promo.create({
// 	promoCode:'ABC1234',
// 	discount:'10',
// 	Active:true,
// })
