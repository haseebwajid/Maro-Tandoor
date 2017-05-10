let state= {}

const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}
err = ''
const handleSubmit = () => {



	if ((/^[a-zA-Z()]+$/.test(state.name)) && (state.phoneno.toString().length===11) && state.feedback!==''){
		info = {name : state.name, phoneno:state.phoneno, feedback:state.feedback}

			req={feedback: JSON.stringify(info)}


			$.ajax({
				method: 'POST',
				url: '/submitFeedback',
				data:req,
				dataType:'json',
				contentType: "application/x-www-form-urlencoded"
			})
			document.location.href='/submitFeedback'
	}else{
			err = 'Oops, looks like you made a mistake in one of the required fields(*)'
			setState({error:err})
		}

}
const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", 'min-height':"auto"}},null,
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
							React.createElement('p',{style:{color:"white"}},"Feedback*")),
									React.createElement('td',null,null,
								React.createElement('input',{type:'text',className:"form-control pull-left",style:{width:"400px"}, onChange: ev => setState({feedback:ev.target.value}),value:state.feedback}, null)))))),
						React.createElement('p', {style:{color:'red'}},state.error),
						React.createElement('button',{onClick:() => handleSubmit(), className:"btn btn-warning btn-lg"}, "Check Out"),
						React.createElement('footer',{style:{marginTop:'300px'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))

setState({name:'', phoneno:'', feedback:'',error:err })