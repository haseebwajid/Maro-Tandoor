$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

let state= {}
console.log(local_data)

let cart = JSON.parse(sessionStorage.getItem('order'))
if(cart===null){
	cart = []
}
let total =0

cart.forEach(i=> total += i[0]*i[2])

const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const handleMinus = pos => {
	cart[pos][0]--
	total = total - cart[pos][2]
	if(cart[pos][0] == 0){
		cart.splice(pos,1)
	}
	setState({TotalAmt:total,Basket:cart})
}

const handlePlus = (item, price) => {
	flag = 0
	cart.forEach(i => {
		if(i[1] == item){
			flag = 1
			i[0]++
		}
	})
	if(flag == 0){
		cart = [...cart, [1,item,price]]
	}

	sessionStorage.setItem('order', JSON.stringify(cart))
	total = total + price

	setState({TotalAmt: total, Basket:cart})
}


const checkOut = (ev) => {
	ev.preventDefault()
	sessionStorage.setItem('order', JSON.stringify(cart))
	var orderData=sessionStorage.getItem('order')

	console.log(orderData)

	document.location.href='/checkout'
}

const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", 'min-height':'100vh'}},null,
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
				React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-3"},null,
					React.createElement('form', {action: "/mainMenu", method:"get"},null,
						React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"orange", 'border-bottom-width': '10px','border-color':"orange",'border-bottom-left-radius':'0','border-bottom-right-radius':'0'},value:'Order'}))),
				React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/menu", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Menu'}))),
				React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/deals", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Deals'}))),
				React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/aboutUs", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'About Us'})))),
			React.createElement('div', {className: "container table", style: {backgroundColor:"orange", 'border-radius':'20'}},null,
				React.createElement('div',{className: "container-fluid"},null,
					local_data.map((i,pos) => React.createElement('div',{className: "btn-group"},null,
						React.createElement('a',{href:"#"+i.category.split(' ')[0], className: "btn btn-md", style:{color:"white",backgroundColor:"orange", "border-color":"orange", marginLeft:"80px"}}, i.category))))),
				React.createElement('div', {className:"row", style: {transform: "none", marginTop: "20px"}},null,
					React.createElement('div',{className: "col-md-9"},null,
						local_data.map(data => React.createElement('div',{id:data.category.split(' ')[0]},null,
							React.createElement('h2',{style:{color:"white"}},data.category),
							React.createElement('i',{style:{color:"white"}},data.cdesc),
							React.createElement('table', {className:"table table-striped", "border-color":"black",style: {marginTop:"20px"}},null,
								React.createElement('thead',null,null,
									React.createElement('th',{style:{color:"white"}}, "Item"),
									React.createElement('th',{style:{color:"white"}}, "Price"),
									React.createElement('th',{style:{color:"white"}}, "Order")),
								React.createElement('tbody',null,null,
									data.items.map((i,pos) => React.createElement('tr',null,null,
										React.createElement('td',null,null,
											React.createElement('figure',{className:"thumb_menu_list"},null,
											React.createElement('img',{src: "../images/"+i.img},null)),
											React.createElement('h5',{style:{color:"white"}},i.item),
											React.createElement('i', {style:{color:"white", "font-size":"10px"}}, i.desc)),
										React.createElement('td',{'vertical-align':'middle'},null,
											React.createElement('strong',{style:{color:"white"}},"rs. "+i.price)),
										React.createElement('td',{'vertical-align':'middle'},null,
											React.createElement('button', {className:"btn btn-warning btn-sm", onClick: () => handlePlus(i.item,i.price)},"+")))))),
							React.createElement('hr',null,null)))),
					React.createElement('nav', {className:"col-md-3"},null,
						React.createElement('div',{id:'nav-wrapper'},null,
						React.createElement('div', {className:"nav nav-pills nav-stacked","data-spy":"affix","data-offset-top":"290", "data-offset-bottom":"0", style:{"min-width":"235px", "max-width":"235px"}},null,
							React.createElement('div', {id:'cart_box'}, null,
								React.createElement('p',null,"Your Order",
									React.createElement('span', {className:"glyphicon glyphicon-shopping-cart pull-right"},null)),
								React.createElement('div', {style:{overflow:"auto", "max-height":"400px"}},null,
								React.createElement("table",{className:"table"},null,
									React.createElement('thead',null,null,
										React.createElement('th',null, "Items"),
										React.createElement('th',{className:"pull-right"}, "Price(rs.)")),
									React.createElement('tbody',null,null,
										cart.map((item,pos) => React.createElement('tr',null,null,
											React.createElement('td', null,null,
												React.createElement('button', {className:"btn btn-default btn-xs", style:{marginRight:"5px",marginLeft:"-8px"}, onClick: () => handleMinus(pos)},"-"),
												React.createElement('strong', null, item[0]+" x "),item[1]),
											React.createElement('td',null,null,
												React.createElement("strong",{className:"pull-right"},item[2]))))))),
								// React.createElement('hr',null,null),
								React.createElement('table',{className:"table"},null,
									React.createElement('tbody',null,null,
										React.createElement('tr',null,null,
											React.createElement('td',null,null, "Subtotal",
												React.createElement('span',{className:"pull-right"},"rs. "+state.TotalAmt))),
										React.createElement('tr',null,null,
											React.createElement('td',null,null, "Tax",
												React.createElement('span',{className:"pull-right"},"rs. "+((state.TotalAmt*0.16).toFixed(0))))),
										React.createElement('tr',null,null,
											React.createElement('td',{style:{"font-size":"18px"}},null, "Total",
												React.createElement('span',{className:"pull-right"},"rs. "+((state.TotalAmt+state.TotalAmt*0.16).toFixed(0))))))),
								React.createElement('hr',null,null),
								React.createElement('form', {onSubmit:checkOut},null,
									React.createElement('input', {type:"submit", className:"btn btn-warning btn-lg center-block", value:"Check Out"}))))))),
React.createElement('footer',{style:{marginTop:'30px',marginBottom:'-80px'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))


setState({TotalAmt: total, Basket: cart})