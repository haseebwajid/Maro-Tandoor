let state= {}
console.log(local_data)
var cart = JSON.parse(sessionStorage.getItem('order'))
if(cart===null){
	cart = []
}
var branch = ''
err = ''
tot = 0
	cart.forEach(i => {
		tot += i[2]*i[0]
})

discount = 1


const promoC = () => {
	req = {code : JSON.stringify(state.promo)}

	$.ajax({
				method: 'POST',
				url: '/checkPromo',
				data:req,
				dataType:'json',
				contentType: "application/x-www-form-urlencoded",
				success:(res)=>{
					console.log(res.response)
					if(res.response ==='invalid'){
						err = 'Invalid promocode'
						setState({error:err})
					}else{
						err = 'You get a discount of '+ res.response+'%'
						discount = (100-res.response)/100
						setState({error:err, total: (tot*discount)})
					}
				}
			})
}
const setState = updates => {
	
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const handleSubmit = () => {
	if(cart.length === 0){
		err = 'You cannot check out with an empty cart'
			setState({error:err})
	}else{
		if ((/^[ a-zA-Z()]+$/.test(state.name)) && (state.phoneno.toString().length===11) && branch!=='' && state.address!==''){
			info = {name : state.name, phoneno:state.phoneno, address:state.address, area: branch, promo:state.promo}

			req={userInfo: JSON.stringify(info), order:JSON.stringify(cart)}

			$.ajax({
				method: 'POST',
				url: '/checkout',
				data:req,
				dataType:'json',
				contentType: "application/x-www-form-urlencoded",
				success:(res)=>{
					console.log(res.response)
					if(res.response=='valid'){
						sessionStorage.setItem('num',JSON.stringify(state.phoneno))
						document.location.href='/orderPlacedSuccessfully'
					}else if(res.response == 'invalid'){
						$('#errorMsg').append('Invalid phone number')
					}
				}
			})
		}else{
			err = 'Oops, looks like you made a mistake in one of the required fields(*)'
			setState({error:err})
		}
	}	
}

const goBack = () => {
	document.location.href='/mainMenu'
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
					React.createElement('div',{className: "col-md-9"},null,
						React.createElement('form',{onSubmit:handleSubmit},null,
							React.createElement('table',{className:"table",style:{marginTop:"30px"}},null,
								React.createElement('tbody',null,null,
									React.createElement('tr',null,null,
										React.createElement('td',{style:{width:"200px"}},null,
							React.createElement('p',{style:{color:"white"}},"Name*")),
										React.createElement('td',null,null,
								React.createElement('input',{type:'text',className:"form-control pull-left", style:{width:"400px"}, onChange: ev => setState({name:ev.target.value}),value:state.name}, null))),
									React.createElement('tr', null,null,
										React.createElement('td',null,null,
							React.createElement('p',{style:{color:"white"}},"Phone Number*")),
										React.createElement('td',null,null,
								React.createElement('input',{type:'number',className:"form-control pull-left",style:{width:"400px"}, onChange: ev => setState({phoneno:ev.target.value}),value:state.phoneno}, null))),
								React.createElement('tr',null,null,
									React.createElement('td',null,null,
							React.createElement('p',{style:{color:"white"}},"Address*")),
									React.createElement('td',null,null,
								React.createElement('input',{type:'text',className:"form-control pull-left",style:{width:"400px"}, onChange: ev => setState({address:ev.target.value}),value:state.address}, null))),
								React.createElement('tr',null,null,
									React.createElement('td',null,null,
							React.createElement('p',{style:{color:"white"}},"Branch*")),
									React.createElement('td',null,null,
								React.createElement('div', {className:"form-group"},null,
									React.createElement('select',{className:"form-control pull-left",style:{width:"400px"}, onChange: ev => branch = ev.target.value},null,
										React.createElement('option',null,''),
										React.createElement('option',null,"DHA"),
										React.createElement('option', null,"Model Town"))))),
								React.createElement('tr',null,null,
									React.createElement('td',null,null,
							React.createElement('p',{style:{color:"white"}},"Promo Code")),
									React.createElement('td',null,null,
								React.createElement('input',{type:'text',className:"form-control pull-left",style:{width:"400px"}, onChange: ev => setState({promo:ev.target.value}),value:state.promo}, null)))))),
						React.createElement('p', {style:{color:'red'}},state.error),
						React.createElement('button', {onClick: () => promoC(), className:'btn btn-warning btn-md pull-right',style:{marginLeft:'10px'}}, "Apply Discount"),
						React.createElement('div',{className:"btn-toolbar"}, null,
							React.createElement('button', {onClick: () => goBack(),className:"btn btn-warning btn-lg" } ,"Add more items"),
						React.createElement('button',{onClick:() => handleSubmit(), className:"btn btn-warning btn-lg"}, "Check Out"))),
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
												React.createElement('span',{className:"pull-right"},"rs. "+state.total))),
										React.createElement('tr',null,null,
											React.createElement('td',null,null, "Tax",
												React.createElement('span',{className:"pull-right"},"rs. "+((state.total*0.16).toFixed(0))))),
										React.createElement('tr',null,null,
											React.createElement('td',{style:{"font-size":"18px"}},null, "Total",
												React.createElement('span',{className:"pull-right"},"rs. "+(state.total+state.total*0.16).toFixed(0)))))),
								React.createElement('hr',null,null)))))),
React.createElement('footer',{style:{marginTop:'110px'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))

setState({Basket:cart, name:'', phoneno:'', address:'',area:'', promo:'',error:err, total : tot})

