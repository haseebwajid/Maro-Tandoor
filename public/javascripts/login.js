let state= {}
var branch = ''


const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const lost = () => {
	document.location.href ='/'
}

const onLogin = () => {
	console.log(state.username,state.password,branch)
}

const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", height:"100vh"}},null,
		React.createElement('div', {className: 'container-fluid'}, null,
				React.createElement('div', {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"},null,
					React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black",width: '70%', margin:'0 auto 0 auto', marginTop:"-50px"}},null,
						React.createElement('div', {className: 'container-fluid'}, null,
							React.createElement('div', {className: "col-md-6"},null,
								React.createElement('img',{className: "img-responsive",src: "../images/logo.png", style : {width:"300", padding:"0px 0px 0px 5px"}},null )),
							React.createElement('div', {className: 'col-md-6'},null,
								React.createElement('h2',{style:{color:"white", marginTop:"50px"}}, "Online Branch Portal")),
							React.createElement('div', {className:"row"}, null,
									React.createElement('div',{className: "col-md-12",style:{marginTop:"50px"}},null,
						React.createElement('form',{action:'/login',method:'post'},null,
							React.createElement('table',{className:"table",style:{marginTop:"30px"}},null,
								React.createElement('tbody',null,null,
									React.createElement('tr',null,null,
										React.createElement('td',{style:{width:"200px"}},null,
							React.createElement('p',{style:{color:"white"}},"Username")),
										React.createElement('td',null,null,
								React.createElement('input',{type:'text',className:"form-control pull-left", style:{width:"400px"}, name:"username",onChange: ev => setState({username:ev.target.value}),value:state.name}, null))),
									React.createElement('tr', null,null,
										React.createElement('td',null,null,
							React.createElement('p',{style:{color:"white"}},"Password")),
										React.createElement('td',null,null,
								React.createElement('input',{type:'password',className:"form-control pull-left",style:{width:"400px"},name:"password", onChange: ev => setState({password:ev.target.value}),value:state.password}, null))))),
							React.createElement('div',{className:'btn-toolbar', style:{marginLeft:"350px"}}, null,
							React.createElement('input', {type:'submit',className:"btn btn-warning btn-lg",value:'Login'},null))))))))))

setState({username:'', password:''})