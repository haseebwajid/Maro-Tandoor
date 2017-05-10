let state= {}
console.log(local_data)
sessionStorage.setItem('success',JSON.stringify(JSON.parse(sessionStorage.getItem('order'))))
var cart = JSON.parse(sessionStorage.getItem('success'))
sessionStorage.setItem('order', JSON.stringify([]))

phoneno = JSON.parse(sessionStorage.getItem('num'))


if(cart===null){
	cart = []
}
var total = 0
var branch = ''

err = ''

local_data.forEach(i => {
	if(i.phoneNumber === phoneno){
		if((i.orderHistory.length+1)%6 === 0){
			if(cart.length !== 0){
				cart = [...cart, [1,'Nutella Naan', 0]]
				err = 'You get a free nutella Naan for being an awesome customer'
			}
		}
	}
})



const setState = updates => {
	total = 0
	cart.forEach(i => {
		total += i[2]*i[0]
	})
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", height:"auto"}},null,
		React.createElement('div', {className: 'container-fluid'}, null,
				React.createElement('div', {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"},null,
					React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black",width: '70%', margin:'0 auto 0 auto', marginTop:"-50px"}},null,
						React.createElement('div', {className: 'container-fluid'}, null,
							React.createElement('div', {className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"},null,
								React.createElement('img',{className: "img-responsive",src: "../images/logo.png", style : {width:"300", padding:"0px 0px 0px 5px"}},null )),
							React.createElement('div',{className: "col-lg-2 col-md-2 col-sm-2 col-xs-2"},null,
								React.createElement('form', {action: "/contactUs", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black",'border-color':'green'},value:'Contact Us'})))),
						React.createElement('div',{className: "container-fluid", style: {display: 'table'}}, null,
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/mainMenu", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Order'}))),
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/menu", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Menu'}))),
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/deals", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Deals'}))),
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/aboutUs", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'About Us'})))),
						React.createElement('div', {className:"row", style: {transform: "none", marginTop: "20px"}},null,
						React.createElement('div',{className: "col-md-3"},null),
					React.createElement('div',{className: "col-md-6"},null,
						React.createElement('p', {style:{color:'white'}}, state.error),
						React.createElement('h1', {id:'demo', style:{color:"white",marginTop:"150px"}},null)),
					React.createElement('nav', {className:"col-md-3"},null,
						React.createElement('div',{id:'nav-wrapper'},null,
						React.createElement('div', {className:"nav nav-pills nav-stacked","data-spy":"affix","data-offset-top":"290", "data-offset-bottom":"0", style:{"min-width":"235px", "max-width":"235px"}},null,
							React.createElement('div', {id:'cart_box'}, null,
								React.createElement('p',null,"Your Order",
									React.createElement('span', {className:"glyphicon glyphicon-shopping-cart pull-right"},null)),
								React.createElement('div', {style:{overflow:"auto", "max-height":"250px"}},null,
								React.createElement("table",{className:"table"},null,
									React.createElement('thead',null,null,
										React.createElement('th',null, "Items"),
										React.createElement('th',{className:"pull-right"}, "Price(rs.)")),
									React.createElement('tbody',null,null,
										state.Basket.map((item,pos) => React.createElement('tr',null,null,
											React.createElement('td', null,null,
												React.createElement('strong', null, item[0]+" x "),item[1]),
											React.createElement('td',null,null,
												React.createElement("strong",{className:"pull-right"},item[2]))))))),
								// React.createElement('hr',null,null),
								React.createElement('table',{className:"table"},null,
									React.createElement('tbody',null,null,
										React.createElement('tr',null,null,
											React.createElement('td',null,null, "Subtotal",
												React.createElement('span',{className:"pull-right"},"rs. "+total))),
										React.createElement('tr',null,null,
											React.createElement('td',null,null, "Tax",
												React.createElement('span',{className:"pull-right"},"rs. "+total*0.16))),
										React.createElement('tr',null,null,
											React.createElement('td',{style:{"font-size":"18px"}},null, "Total",
												React.createElement('span',{className:"pull-right"},"rs. "+(total+total*0.16)))))),
								React.createElement('hr',null,null)))))),
						React.createElement('footer',{style:{marginTop:'250px'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))

setState({Basket:cart, name:'', phoneno:'', address:'',area:'', promo:'', error:err })

// Set the date we're counting down to
var countDownDate

if(cart.length === 0){
	countDownDate = new Date().getTime()
}else{
	countDownDate = new Date().getTime() + 2700000;
}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();


  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Cart Empty";
  	sessionStorage.setItem('time',null)
  }
}, 1000);
