$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

let state= {}
console.log(local_data)
ele = []
err = ''
gpos = 0

let cart = JSON.parse(sessionStorage.getItem('order'))
if(cart===null){
	cart = []
}
det  = [1]
view = [1]
view2 =[1]
view3=[]
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

const handlePlus = (pos) => {
	view = []
	view2 = []
	view3 = [1]
	ele = []
	gpos = pos

	setState({TotalAmt: total, Basket: cart,detail:local_data[pos].options,disp:view,disp2:view2,disp3:view3})
}


const checkOut = (ev) => {
	ev.preventDefault()
	sessionStorage.setItem('order', JSON.stringify(cart))
	var orderData=sessionStorage.getItem('order')

	console.log(orderData)

	document.location.href='/checkout'
}

const goBack = () => {
	view = [1]
	view2 = [1]
	view3 = []
	setState({TotalAmt: total, Basket: cart,disp:view,disp2:view2,disp3:view3})
}

const addToCart = (item) => {
	if(ele.length === item.length){
		view = [1]
		view2 = [1]
		view3 = []
		str = local_data[gpos].Name+'('
		ele.forEach(i => str = str+i+',  ')
		str = str + ')'
		cart  = [...cart,[1,str,local_data[gpos].price]]
		sessionStorage.setItem('order', JSON.stringify(cart))
		total = total + local_data[gpos].price
		setState({TotalAmt: total, Basket: cart,disp:view,disp2:view2,disp3:view3})
	}
	else{
		console.log(ele)
		err = 'Please select 1 from all the categories'
		setState({error:err})
	}
}
const Options = (pos,item) => {
	console.log(item)
	ele = [...ele,item]
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
					React.createElement('div',{className: "col-md-9"},null,
						state.disp3.map(C => React.createElement('div',null,null,
							state.detail.map((i,pos)=> React.createElement('div',null,null,
							React.createElement('p', {style:{color:'white'}}, 'Select '+i[0].Category),
							React.createElement('fieldset', {id:pos},null,
							i.map(items => React.createElement('div', {className:'col-md-12'},null,
								React.createElement('input', {onClick:()=>Options(pos,items.item),style:{marginLeft:'5px'},type:'radio',value:items.item, name:pos},null),
								React.createElement('label', {style:{marginLeft:'10px',color:'white'}},null,items.item)))))),
							React.createElement('p', {style:{color:'red'}}, state.error),
							React.createElement('button', {onClick: () => goBack(),className:'btn btn-warning btn-lg',style:{marginLeft:'20px'}}, "Go back"),
							React.createElement('button', {onClick: () => addToCart(state.detail), className:'btn btn-warning btn-lg',style:{marginLeft:'20px'}}, "Add to Cart"))),
						state.disp2.map(A => React.createElement('table', {className:"table table-striped", "border-color":"black",style: {marginTop:"20px"}},null,
								React.createElement('thead',null,null,
									React.createElement('th',{style:{color:"white"}}, "Deal"),
									React.createElement('th',{style:{color:"white"}}, "Price"),
									React.createElement('th',{style:{color:"white"}}, "Order")),
						state.disp.map(B =>local_data.map((data,pos) =>
								React.createElement('tbody',null,null,
									React.createElement('tr',null,null,
										React.createElement('td',null,null,
											React.createElement('figure',{className:"thumb_menu_list"},null,
											React.createElement('img',{src: "../images/thumb.jpeg"},null)),
											React.createElement('h5',{style:{color:"white"}},data.Name),
											React.createElement('i', {style:{color:"white", "font-size":"10px"}}, data.cdesc)),
										React.createElement('td',{'vertical-align':'middle'},null,
											React.createElement('strong',{style:{color:"white"}},"rs. "+data.price)),
										React.createElement('td',{'vertical-align':'middle'},null,
											React.createElement('button', {className:"btn btn-warning btn-sm", onClick: () => handlePlus(pos)},"+"))))),
							React.createElement('hr',null,null))))),
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
React.createElement('footer',{style:{'min-height':'30vh'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))


setState({TotalAmt: total, Basket: cart,detail:[], disp:view,disp2:view2,disp3:view3,error:err})