console.log(local_data[0].items)
let amount = []
local_data[0].items.forEach(x => amount = [...amount,0])
let state= {}
// $(document).ready(()=>{

// 	var serverResponse = JSON.parse($('#serverResponse').val())
// 	var menuCategory=serverResponse[0].category
// 	console.log(menuCategory)

	
// 	$("#addToCartBtn").click(()=>{
// 		var orderData=JSON.parse(sessionStorage.getItem('order'))
// 		var formData = JSON.parse(JSON.stringify($("#categoryMenu").serializeArray()))

// 		if (orderData){
// 			orderData[menuCategory]=formData
// 			sessionStorage.setItem('order',JSON.stringify(orderData))		
// 		}else{
// 			var dict={}
// 			dict[menuCategory]=formData
// 			sessionStorage.setItem('order',JSON.stringify(dict))
// 		}

// 		console.log((sessionStorage.getItem('order')))

// 	});

// });

const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const clickNeg = pos => {
	console.log(pos)
	if(amount[pos]>0)
		amount[pos] = amount[pos] - 1
	console.log(amount)

	setState({amt:amount})
}

const clickPos = pos => {
	console.log(pos)
	if(amount[pos]>=0)
		amount[pos] = amount[pos] + 1

	setState({amt:amount})
}

const Root = state => 
	React.createElement('div',{className: "jumbotron", style : {backgroundColor:"black"}},null,
		React.createElement('div', {className: 'container-fluid'}, null,
			React.createElement('div', {className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"},null,
				React.createElement('img',{className: "img-responsive",src: "../images/logo.png", style : {width:"300", padding:"0px 0px 0px 5px"}},null )),
			React.createElement('div', {className: 'col-lg-2 col-md-2 col-sm-2 col-xs-12'},null,
				React.createElement('button', {className: "btn btn-warning btn-lg", style: {marginTop:"25px"}}, "Contact Us"))),
		React.createElement('div',{className: "container-fluid", style: {display: 'table'}}, null,
			React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-3"},null,
				React.createElement('button',{className: "btn btn-warning btn-lg text-center", style:{marginTop:'50px'}}, 'Order')),
			React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-3"},null,
				React.createElement('button',{className: "btn btn-warning btn-lg text-center", style:{marginTop:'50px'}}, 'Menu')),
			React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-3"},null,
				React.createElement('button',{className: "btn btn-warning btn-lg text-center", style:{marginTop:'50px'}}, 'Deals')),
			React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-3"},null,
				React.createElement('button',{className: "btn btn-warning btn-lg text-center", style:{marginTop:'50px'}}, 'About Us'))),
		React.createElement('div',{id : 'myslider', className:"carousel slide", 'data-ride':'carousel',style: {margin:"20px auto"}},null,
			React.createElement('ol',{className: "carousel-indicators"},null,
				React.createElement('li', {className:"active", 'data-target' : '#myslider', 'data-slide-to':'0'},null),
				React.createElement('li', {'data-target' : '#myslider', 'data-slide-to':'1'},null),
				React.createElement('li', {'data-target' : '#myslider', 'data-slide-to':'2'},null)),
				React.createElement('div',{className:"carousel-inner"},null,
					React.createElement('div',{className: "item active"},null,
						React.createElement('img', {src:"../images/1.jpg"},null),
						React.createElement('div',{className: "slide1"},null)),
					React.createElement('div',{className: "item"},null,
						React.createElement('img', {src:"../images/2.jpg"},null),
						React.createElement('div',{className: "slide2"},null)),
					React.createElement('div',{className: "item"},null,
						React.createElement('img', {src:"../images/3.jpg"},null),
						React.createElement('div',{className: "slide3"},null))),
				React.createElement('a', {className:'left carousel-control', href:'#myslider', 'data-slide':'prev', 'role' :'button'},null,
					React.createElement('span',{className:"glyphicon glyphicon-chevron-left",'aria-hidden':'true'},null)),
				React.createElement('a', {className:'right carousel-control', href:'#myslider', 'data-slide':'next','role':'button'},null,
					React.createElement('span',{className:"glyphicon glyphicon-chevron-right",'aria-hidden':'true'},null))))
			

	// React.createElement('div', {className: "container"},null,
	// 	React.createElement('div',{class: "row"}, null,
	// 		React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-6 col-xs-12"},null,
	// 			React.createElement('h4', null, 'Column 1'),"Hello World, My name Is Umair Shahzad.I am a good boy. How are akjshflsdjnfjaklhj"),
	// 		React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-6 col-xs-12"},null,
	// 			React.createElement('h4', null, 'Column 2'),"Hello World, My name Is Umair Shahzad."),
	// 		React.createElement('div', {className: "clearfix visible-sm"},null),
	// 		React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-6 col-xs-12"},null,
	// 			React.createElement('h4', null, 'Column 3'),"Hello World, My name Is Umair Shahzad."),
	// 		React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-6 col-xs-12"},null,
	// 			React.createElement('h4', null, 'Column4 '),"Hello World, My name Is Umair Shahzad.")))
	
	// React.createElement('div', {className: "container"}, null,
	// 	React.createElement('div',{className: "page-header"},null,
	// 		React.createElement('h1', null, "Main Menu")),
	// 	React.createElement('div', {className: "jumbotron"}, null,
	// 		React.createElement('p', null,'This is my website')),
	// 	React.createElement("button", {className: "btn btn-warning btn-xs"}, "+"))

	// React.createElement('div',{class:"page-header"},"Main Menu",
	// 	React.createElement('div',null, state.text,
	// 		state.items.map(((x,pos)=> React.createElement('div',null, x.item,
	// 			React.createElement('button',{onClick: () => clickNeg(pos)}, '-'),
	// 			React.createElement('b', null, state.amt[pos]),
	// 			React.createElement('button',{onClick: () => clickPos(pos)},'+'))))),
	// 	React.createElement('button', null, 'Add to cart'),
	// 	React.createElement('button',null,'Checkout'))

setState({text:local_data[0].category, items: local_data[0].items, amt:amount})