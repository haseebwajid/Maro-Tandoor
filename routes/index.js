var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


passport.use(new Strategy(
  function(username, password, done) {
    mongoose.model('Login').findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username/password.' });
      }
      if (user.password!=password) {
        return done(null, false, { message: 'Incorrect username/password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(Uid, cb) {
  mongoose.model('Login').findOne({id:Uid}, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


var app = express();
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 },
  rolling: true,
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

router.get('/logout', function (req, res){
  req.logOut()
  req.session.destroy(function (err) {
  		res.send()
  		if(err){
  			return console.log(err)
  		}
  });
});

//========================================
// GET home page. 
//=======================================
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login',(req,res) =>{

	if(!req.user){
		res.render('login')
	}else{
		if(req.user.role == 'Marketing'){
			res.redirect('/analytics')
		}else{
			res.redirect('/adminMainPage/'+req.user.branch)
		}
	}
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login'}),
  function(req, res) {
  	if(req.user.role =='Marketing' )
    	res.redirect('/analytics');
    else{
	    if(req.user.role == "Order"){
			res.redirect('/adminMainPage/'+req.user.branch)
		}
	}
});
//=====================================
//GET menu page
//=====================================
router.get('/mainMenu',(req,res)=>{
	//get menu from db

	mongoose.model('Menu').find({},(err,data)=>{
		if (err){
			return console.log(err);
		}else{
			res.render('mainMenu',{title:'Menu',"data":data});
		}
	});
});
router.get('/menu',(req,res)=>{
	//get menu from db

	mongoose.model('Menu').find({},(err,data)=>{
		if (err){
			return console.log(err);
		}else{
			res.render('menu',{title:'Menu',"data":data});
		}
	});
});
router.get('/aboutUs',(req,res)=>{
	//get menu from db
		res.render('aboutUs');
});

router.get('/contactUs',(req,res)=>{
	//get menu from db
		res.render('contactUs');
});

router.get('/Deals',(req,res)=>{
	//get menu from db

	mongoose.model('Deals').find({},(err,data)=>{
		if (err){
			return console.log(err);
		}else{
			res.render('Deals',{"data":data});
		}
	});
});

//=========================================
//Get category menu (pizza, beverages, etc)
//============================================
router.get('/mainMenu/:category',(req,res)=>{
	console.log('Want: '+ req.params.category);
	mongoose.model('Menu').find({'category':req.params.category}, (err,menu)=>{
		if (err){
			return console.log(err)
		}else{
			res.render('categoryMenu',{title:'Title', 'menu':menu, 'category':req.params.category});
			console.log(menu)
		}
	});
});

router.get('/checkout',(req,res)=>{

	mongoose.model('Promo').find({}, (err,data)=>{
		if (err){
			return console.log(err)
		}else{
			res.render('checkout',{'data':data});

		}
	});
});

router.get('/orderPlacedSuccessfully',(req,res)=>{
	var allOrders=getAllOrders()
	allOrders.then(orders=>
	mongoose.model('User').find({}, (err,data)=>{
		if (err){
			return console.log(err)
		}else{
			res.render('orderPlacedSuccessfully',{'users':data,'orders':orders});

		}
	}));
	
});

router.post('/checkPromo',(req,res)=>{
	var code = JSON.parse(req.body.code)
	console.log(code)

	mongoose.model('Promo').find({}, (err,data)=>{
		if (err){
			return console.log(err)
		}else{
			flag = 0
			dsicount = 0
			data.forEach(i => {
				if(i.promoCode === code && i.Active){
					discount = i.discount
					flag = 1
				}
			})
			if(flag === 1){
				mongoose.model('Promo').findOneAndUpdate({promoCode:code},{Active:false},(err,data)=>{
					if (err){
							return console.log(err)
					}else{
						console.log('success')
					}
				})

			res.send({response:discount})
			}
			else{
				res.send({response:'invalid'})
			}

		}
	});


})

router.post('/checkout',(req,res)=>{
	//=====================================
	//gets Clients address and ordered menu
	//=====================================
	var order = JSON.parse(req.body.order)
	var info = JSON.parse(req.body.userInfo)

	arr = []
	total = 0
	order.forEach(i=> {
		temp = {Item: i[1], Quantity: i[0], Price:i[2]}
		total += i[0]*i[2]
		arr = [...arr, temp]
	})

	total = total+total*0.16

	menu = {order : arr, totalAmt:total}
	console.log(menu.order,menu.totalAmt)

	//======TODO=========
	//validate input      (just check if phone number is correct)

//=======================================================
	if (String(info.phoneno).length == 11){
		console.log(String(info.promo))

		var userPromise=getUser(info)

		userPromise.then((user)=>{
			if (user){
				console.log('User already exixts')
				updateOrderToUser(info,menu)
			}else{
				console.log('Adding new user')
				addUser(info,menu)
			}
		})
		//==========================
		//===>Add order to order DB. 
		//============================

		addOrder(info,menu)

		res.send({response:'valid'})
	}else{
		console.log('invalid input')
		res.send({response:'invalid'})
		//res.render('error',{title:'Error',message:'Invalid Phone Number'})
	}
	console.log('-------------------------')
});


//===========================
//Admin's main page
//==============================

router.get('/adminMainPage/data',(req,res)=>{
	//get incomplete orders from d
	console.log(req.user.branch, '---------------------------------------------------------------------')
	mongoose.model('Order').find({$and:[
										{$or:[{'status':'incomplete'},{'status':'processing'}]}, 
										{'address.closestBranch':req.user.branch}]},
	(err,orders)=>{
		if(err){
			console.log(err)
		}else{
			res.send({'orders':orders})
		}
	})
})


//===========================
//Branch's main page
//==============================
router.get('/adminMainPage/:branch',(req,res)=>{
	//get incomplete orders from db
	data = req.params.branch.split(' ').join('')
	
	if(req.user){
			if(req.user.role == 'Order'){
					mongoose.model('Order').find({$and:[
													{$or:[{'status':'incomplete'},{'status':'processing'}]}, 
													{'address.closestBranch':req.user.branch}]},
				(err,orders)=>{
					if(err){
						console.log(err)
					}else{
							res.render('adminMainPage',{'orders':orders,'user':req.user})
						}
					})
			}else{
				res.redirect('/login')
			}
	}else{
		res.redirect('/login')
	}
})


router.get('/adminMainPageUpdate/:branch',(req,res)=>{
	//get incomplete orders from db

	mongoose.model('Order').find({$and:[
										{$or:[{'status':'incomplete'},{'status':'processing'}]}, 
										{'address.closestBranch':req.params.branch}]},
	(err,orders)=>{
		if(err){
			console.log(err)
		}else{
			res.send('adminMainPage',{'orders':orders,'user':req.user})
		}
	})
})

//================================
//When admin presses Confirm order button
//=================================
router.post('/confirmOrder',(req,res)=>{

	mongoose.model('Order').findOneAndUpdate({_id:req.body.orderId},
		{status:'processing'},(err,user)=>{
			if(err){
				console.log('Order not confirmed, id: '+req.body.orderId)
			}else{
				console.log('Order confirmed, id: '+req.body.orderId)
			}
		})

})

//================================
//When admin presses Order Complete Button
//=================================
router.post('/orderComplete',(req,res)=>{

	mongoose.model('Order').findOneAndUpdate({$and:[{_id:req.body.orderId},
													{status:'processing'}]},
		{status:'complete'},(err,user)=>{
			if(err){
				console.log('Couldnt update db, id: '+req.body.orderId)
			}else{
				console.log('Order complete, id: '+req.body.orderId)
			}
		})
})

//================================
//When admin presses Cancel Order Button
//=================================
router.post('/cancelOrder',(req,res)=>{

	mongoose.model('Order').findOneAndUpdate({_id:req.body.orderId}, {status:'cancelled'},(err,user)=>{
			if(err){
				console.log('Couldnt update db, id: '+req.body.orderId)
			}else{
				console.log('Order cancelled, id: '+req.body.orderId)
			}
		})

})

router.post('/sendMsg',(req,res)=>{

	console.log("Message sent to,", req.body.phoneNumber)

})

//=================================
//Get the analytics page
//(only giving data to front end right now)
//=================================
router.get('/analytics',(req,res)=>{
	if(req.user){
		if(req.user.role === 'Marketing')
			res.render('analytics',{'user':req.user})
		else
			res.redirect('/login')
	}else{
		res.redirect('/login')
	}
})

router.get('/Graphs',(req,res)=>{

	if(req.user){
		if(req.user.role === 'Marketing'){
			var allUsers=getUsers()
			var allOrders=getAllOrders()
			allUsers.then((users)=>{
				if (users){
					allOrders.then((orders)=>{
						mongoose.model('Menu').find({},(err,data)=>{
							if (err){
								return console.log(err);
							}else{
								res.render('Graphs',{'allUsers':users,'allOrders':orders,'user':req.user,'menu':data})
							}
						});
					})
				}
				console.log('Error fetching data for /analytics')
			})
		}else{
			res.redirect('login')
		}
	}else{
		res.redirect('/login')
	}
})

router.get('/Reports',(req,res)=>{
	if(req.user){
		if(req.user.role === 'Marketing'){
			var allUsers=getUsers()
			var allOrders=getAllOrders()
			allUsers.then((users)=>{
				if (users){
					allOrders.then((orders)=>{
						mongoose.model('Menu').find({},(err,data)=>{
							if (err){
								return console.log(err);
							}else{
								res.render('Reports',{'allUsers':users,'allOrders':orders,'user':req.user,'menu':data})
							}
						});
					})
				}
				console.log('Error fetching data for /analytics')
			})
		}else{
			res.redirect('login')
		}
	}else{
		res.redirect('/login')
	}
})


//=================================
//Get feedback page
//=================================
router.get('/feedback',(req,res)=>{
	res.render('feedback')
})

router.post('/submitFeedback',(req,res)=>{

	fb = JSON.parse(req.body.feedback)
	console.log(fb)

	addFeedback(fb.name, fb.phoneno, fb.feedback)

})
router.get('/submitFeedback',(req,res)=>{

	res.render('submitFeedback')

})

module.exports = router;
