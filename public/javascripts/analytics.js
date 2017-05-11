let state= {}

const setState = (updates) => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}
	
const viewGraphs = () => {
	
	document.location.href ='/Graphs'
}
const viewReports= () => {
	document.location.href ='/Reports'
}

const Logout = () => {

	$.ajax({
		method:'GET',
		url:'/logout',
		contentType: "application/x-www-form-urlencoded",
		success:()=>{
			document.location.href ='/login'
		}
	})
}

const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", 'min-height':"100vh"}},null,
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
					React.createElement('table', {'border-spacing':'10px',className:'table',style:{'text-align':'center',marginTop:'70px'}},null,
						React.createElement('tbody', null,null,
							React.createElement('tr', null,null,
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewGraphs(),className:'btn btn-warning btn-lg'}, "View Graphs"))),
							React.createElement('tr', null,null,
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewReports(),className:'btn btn-warning btn-lg'}, "View Reports")))))))))

setState({})
