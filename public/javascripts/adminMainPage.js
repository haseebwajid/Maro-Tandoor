let state= {}
console.log(local_data)
console.log(user_data)

disp = [1]
dispDetail= []
const interval = 2000

var orderConfirmed = []

window.setInterval(()=>{
	var arr=window.location.href.split('/')

	$.get('/adminMainPage/data', (orders)=>{
		var newOrderIds=[]
		local_data = orders.orders
		console.log(local_data)
		setState({data:local_data})
	})
},interval)

const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const handleClick = (item) => {
	console.log(item)
	disp=[]
	dispDetail = [1]

	setState({detail:item, showall : disp, showdetail: dispDetail})
}

const goBack = () => {
	disp = [1]
	dispDetail = []
	setState({showall : disp, showdetail: dispDetail})
}

const confirmOrder = order =>{

	console.log(order)
	$.ajax({
			method:'POST',
			url:'/confirmOrder',
			data: {orderId: order._id},
			dataType:'json',
			contentType: "application/x-www-form-urlencoded"
		})
		orderConfirmed = [...orderConfirmed,order._id]

	disp = [1]
	dispDetail = []
	setState({showall : disp, showdetail: dispDetail})
}

const cancelOrder = order =>{

	console.log(order)
	$.ajax({
			method:'POST',
			url:'/cancelOrder',
			data: {orderId: order._id},
			dataType:'json',
			contentType: "application/x-www-form-urlencoded"
		})
	disp = [1]
	dispDetail = []
	setState({showall : disp, showdetail: dispDetail})

}

const orderComplete= order =>{
	$.ajax({
			method:'POST',
			url:'/orderComplete',
			data: {orderId: order._id},
			dataType:'json',
			contentType: "application/x-www-form-urlencoded"
		})
	disp = [1]
	dispDetail = []
	setState({showall : disp, showdetail: dispDetail})

	console.log(order)
}
const sendMessage = order =>{
	console.log(order)

	$.ajax({
		method:'POST',
		url:'/sendMsg',
		data: {phoneNumber : order.phoneNumber},
		dataType:'json',
		contentType: "application/x-www-form-urlencoded"
	})
	disp = [1]
	dispDetail = []
	setState({showall : disp, showdetail: dispDetail})
}

const Logout = () => {

	$.ajax({
		method:'GET',
		url:'/logout',
		contentType: "application/x-www-form-urlencoded"
	})
	document.location.href ='/login'
}

const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", 'min-height':'100vh'}},null,
		React.createElement('div', {className: 'container-fluid'}, null,
				React.createElement('div', {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"},null,
		React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black",width: '70%', margin:'0 auto 0 auto', marginTop:"-50px"}},null,
			React.createElement('div', {className: 'container-fluid'}, null,
				React.createElement('div', {className: "col-md-6"},null,
					React.createElement('img',{className: "img-responsive",src: "../images/logo.png", style : {width:"300", padding:"0px 0px 0px 5px"}},null )),
				React.createElement('div', {className: 'col-md-3'},null,
					React.createElement('p', {style:{'color':'orange', marginTop:"30px"}}, "Welcome, "+ user_data.username+" ("+user_data.branch+')')),
				React.createElement('div', {className: 'col-md-3'},null,
					React.createElement('button', {onClick: () => Logout(), className: "btn btn-warning btn-lg", style: {marginTop:"25px", backgroundColor:"black", 'border-color':'orange'}}, "Logout"))),
			state.showdetail.map(p => React.createElement('div',null,null,
				React.createElement('table', {className:"table", "border-color":"black",style: {marginTop:"20px"}},null,
								React.createElement('thead',null,null,
									React.createElement('th',{style:{color:"white"}}, "Order Id"),
									React.createElement('th',{style:{color:"white"}}, "Details")),
								React.createElement('tbody',null,null,
									React.createElement('tr',null,null,
										React.createElement('td',null,null,
											React.createElement('p',{style:{color:"white"}},state.detail._id)),
										React.createElement('td',null,null,
											React.createElement('table',{className:"table pull-left",style:{backgroundColor:"black"}},null,
												React.createElement('thead',null,null,
													React.createElement('th',{style:{color:"white"}}, "Sr#"),
													React.createElement('th',{style:{color:"white"}}, "Item"),
													React.createElement('th',{style:{color:"white"}}, "Quantity"),
													React.createElement('th',{style:{color:"white"}}, "Price")),
												React.createElement('tbody',null,null,
													state.detail.items.map((item,pos) => React.createElement('tr',null,null,
														React.createElement('td',null,null,
															React.createElement('h5',{style:{color:"white"}},pos+1)),
														React.createElement('td',null,null,
															React.createElement('h5',{style:{color:"white"}},item.Item)),
														React.createElement('td',null,null,
															React.createElement('h5',{style:{color:"white"}},item.Quantity)),
														React.createElement('td',null,null,
															React.createElement('h5',{style:{color:"white"}},item.Price)),
														React.createElement('hr',null,null))),
													React.createElement('tr',null,null,
														React.createElement('td', null,null),
														React.createElement('td', null,null),
														React.createElement('td', null,null,
															React.createElement('p', {style:{color:"white"}},"Total: ")),
														React.createElement('td', null,null,
															React.createElement('p', {style:{color:"white"}},state.detail.totalAmount))))))))),
							React.createElement('table', {className:"table", "border-color":"black",style: {marginTop:"20px"}},null,
								React.createElement('tbody',null,null,
									React.createElement('tr',null,null,
										React.createElement('td',null,null,
											React.createElement('button', {className: "btn btn-warning btn-lg", onClick : () => goBack()}, "Go Back")),
										React.createElement('td',null,null,
											React.createElement('button', {className: "btn btn-warning btn-lg", onClick : () => confirmOrder(state.detail)}, "Confirm Order")),
										React.createElement('td',null,null,
											React.createElement('button', {className: "btn btn-warning btn-lg", onClick : () => cancelOrder(state.detail)}, "Cancel Order")),
										React.createElement('td',null,null,
											React.createElement('button', {className: "btn btn-warning btn-lg", onClick : () => orderComplete(state.detail)}, "Order Complete")),
										React.createElement('td',null,null,
											React.createElement('button', {className: "btn btn-warning btn-lg", onClick : () => sendMessage(state.detail)}, "Send Message"))))))),
			state.showall.map(v => React.createElement('table', {className:"table table-striped", "border-color":"black",style: {marginTop:"20px"}},null,
								React.createElement('thead',null,null,
									React.createElement('th',{style:{color:"white"}}, "OrderID"),
									React.createElement('th',{style:{color:"white"}}, "Name"),
									React.createElement('th',{style:{color:"white"}}, "Phone No."),
									React.createElement('th',{style:{color:"white"}}, "Branch"),
									React.createElement('th',{style:{color:"white"}}, "Status"),
									React.createElement('th',{style:{color:"white"}}, "Details")),
								React.createElement('tbody',null,null,
									state.data.map((i,pos) => React.createElement('tr',null,null,
										React.createElement('td',null,null,
											React.createElement('p',{style:{color:"white"}},i._id)),
										React.createElement('td',null,null,
											React.createElement('strong',{style:{color:"white"}},i.Name)),
										React.createElement('td',null,null,
											React.createElement('strong',{style:{color:"white"}},i.phoneNumber)),
										React.createElement('td',null,null,
											React.createElement('strong',{style:{color:"white"}},i.address.closestBranch)),
										React.createElement('td',null,null,
											React.createElement('strong',{style:{color:"white"}},i.status)),
										React.createElement('td',null,null,
											React.createElement('button', {className:"btn btn-warning btn-sm", onClick: () => handleClick(i)},"Details")))))))))))


setState({data:local_data, detail: [], showall:disp, showdetail:dispDetail})