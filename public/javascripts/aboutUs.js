let state= {}

const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
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
			React.createElement('div',{className:'row'},null,
				React.createElement('div',{className:'col-md-12'},null,
					React.createElement('h2', {style:{color:'white'}},'Our Story'),
					React.createElement('p',{style:{color:'white'}},'Ever thought you could make an entire meal of Nutella without your mother criticizing your poor health choices? Now you can, as MARO is home to the item spurring the city’s freshest food frenzy – the never-before-seen Nutella Naan! With an exquisite dollop of chocolate sauce in the centre of bread baked to perfection, it wouldn’t be an understatement to say that the Nutella Naan is a solid manifestation of all your culinary fantasies. If the idea of a chocolate Naan weren’t tempting enough, MARO is ready to tantalize your taste buds even more with its array of extremely affordable and inventive food items, including the Pizza Naan, Cheese Naan and Qeema Naan. Exciting the palate as well as the imagination, it is no surprise that this centrally located Tandoor has been attracting customers from every corner of Lahore to witness and be part of the Naan revolution. Other than its exceptional menu and quality control, what else makes MARO Tandoors stand out in a city crammed with Naan selling shops? Well, if this business reinvents flavor, it simultaneously revamps established grounds of entrepreneurship, as the story behind this booming venture is one worth taking inspiration from. Set up entirely by four young students from the Lahore University of Management Sciences (LUMS), MARO Tandoors started off as a simple thought, with no financial backing or formal direction. Not entirely different from a cinematic portrayal of underdogs rising to fame, the only arsenal these boys had at the start of their journey was an unfaltering conviction, naturally subjecting them to their fair share of struggles convincing the LUMS Centre for Entrepreneurship (LCE) to give their proposal serious thought.')),
				React.createElement('div',{className:'row'},null,
						React.createElement('div',{className:'col-md-6'},null,
							React.createElement('table',{className:'table'}, null,
								React.createElement('tbody',null,null,
									React.createElement('tr',null,null,
										React.createElement('td', null,null,
											React.createElement('p',{style:{color:'white'}},'DHA Branch'),
											React.createElement('h5',{style:{color:'white'}},'77-T, Phase II, DHA (Next to lalik chowk)'),
											React.createElement('h5',{style:{color:'white'}},'0423-5845734-7')))))),
							React.createElement('tr',null,null,
										React.createElement('td', null,null,
											React.createElement('p',{style:{color:'white'}},'Model Town Branch'),
											React.createElement('h5',{style:{color:'white'}},'82-M, Model Town Extension, Lahore'),
											React.createElement('h5',{style:{color:'white'}},'0423-5863712-5'))))),
			React.createElement('footer',{style:{marginTop:'30px',marginBottom:'-80px'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))


setState({})