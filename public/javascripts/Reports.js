$('input[name="daterange"]').daterangepicker();

var sdate = new Date()
var edate = new Date()
dis = ['','','']
B1 = []
B2 = []
B3 = []
vis = 'hidden'
product = 'Pizza Naan'
data = []
showTab = []

branch = 'DHA'
branches = ['DHA','ModelTown']
let state = {}
const setState = (updates) => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}
const viewOrderPerProduct = (pos) => {

	B3 =[]
	B2 =[]
	B1 =[1]
	vis = 'visible'
	dis = [true,'','']
	showTab=[]
	setState({visi :vis, b1:B1, b2:B2,b3:B3,disable:dis,tab:showTab})
}
const viewOrderPerBranch= (pos) => {

	B3 =[]
	B2 =[1]
	B1 =[]
	vis = 'visible'
	dis = ['',true,'']
	showTab=[]
	setState({visi :vis, b1:B1, b2:B2,b3:B3,disable:dis,tab:showTab})
}


const viewOrderPerDate = (pos) => {

	B3 =[1]
	B2 =[]
	B1 =[]
	vis = 'visible'
	dis = ['','',true]
	showTab = []
	setState({visi :vis, b1:B1, b2:B2,b3:B3,disable:dis,tab:showTab})
}

const handleClick1 = () => {
	data = []
	allorders.forEach(i => {
		var x = new Date(i.date)
		if(x.getTime() >= sdate.getTime() && x.getTime() <= edate.getTime()){
			i.items.forEach(item => {
				if(item.Item == product){
					data = [...data,i]
				}
			})
		}
	})
	console.log(data)
	showTab = [1]
	setState({Data:data,tab:showTab})
}
const handleClick3 = () => {
	data = []
	allorders.forEach(i => {
		var x = new Date(i.date)
		if(x.getTime() >= sdate.getTime() && x.getTime() <= edate.getTime()){
			data = [...data,i]
		}
	})
	console.log(data)
	showTab = [1]
	setState({Data:data,tab:showTab})
}

const handleClick2 = () => {
	data = []
	console.log(branch)
	allorders.forEach(i => {
		var x = new Date(i.date)
		if(x.getTime() >= sdate.getTime() && x.getTime() <= edate.getTime()){
			console.log(i.address.closestBranch, ' ',branch)
			if(i.address.closestBranch === branch){
				data = [...data,i]
			}
		}
	})
	console.log(data)
	showTab = [1]
	setState({Data:data,tab:showTab})
}

const Logout = () =>{
	$.ajax({
		method:'GET',
		url:'/logout',
		contentType: "application/x-www-form-urlencoded"
	})
	document.location.href ='/login'
}
const goBack = () => {
		document.location.href ='/analytics'
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
						React.createElement('table', {'border-spacing':'10px',className:'table',style:{marginTop:'40px'}},null,
						React.createElement('tbody', null,null,
							React.createElement('tr', null,null,
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => goBack(),className:'btn btn-warning btn-md'}, "Go Back")),
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewOrderPerProduct(),className:'btn btn-warning btn-md',disabled:state.disable[0]}, "Number of Products per Date")),
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewOrderPerBranch(),className:'btn btn-warning btn-md',disabled:state.disable[1]}, "Number of Products per Date")),
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewOrderPerDate(),className:'btn btn-warning btn-md', disabled:state.disable[2]}, "Number of Orders per Date"))))),
						React.createElement('div', {id:'reportrange', className:'pull-left',style:{visibility:state.visi,'background':'#fff', cursor:'pointer', padding:'5px 10px', border:'1px solid #ccc',width:'30%'}},null,
							React.createElement('i', {className:'glyphicon glyphicon-calendar fa fa-calendar'},null),
							React.createElement('span',null,null),
							React.createElement('b',{className:'caret'},null)),
						state.b1.map(i=> React.createElement('div',null,null,
							React.createElement('select', {onChange: ev => product= ev.target.value, style:{marginLeft:'20px',height:'30px'}},null,
								menu.map(cat => React.createElement('optgroup', {label:cat.category},null,
								cat.items.map(item => React.createElement('option',null, item.item))))),
							React.createElement('button', {onClick: () =>handleClick1(), className:'btn btn-default', style:{marginLeft:'20px'}},"Generate Report"))),
						state.b2.map(i=> React.createElement('div',null,null,
							React.createElement('select', {onChange: ev => branch= ev.target.value, style:{marginLeft:'20px',height:'30px'}},null,
								branches.map(cat => React.createElement('option',null,cat))),
							React.createElement('button', {onClick: () =>handleClick2(),className:'btn btn-default',style:{marginLeft:'20px'}},"Generate Report"))),
						state.b3.map(i=> React.createElement('div',null,null,
							React.createElement('button', {onClick: () =>handleClick3(),className:'btn btn-default',style:{marginLeft:'20px'}},"Generate Report"))),
						state.tab.map(a=>React.createElement('table', {className:'table table-striped'}, null,
							React.createElement('thead',null,null,
								React.createElement('th',{style:{color:"white"}}, "Id"),
								React.createElement('th',{style:{color:"white"}}, "Branch"),
								React.createElement('th',{style:{color:"white"}}, "Address"),
								React.createElement('th',{style:{color:"white"}}, "Date (yyyy-mm-dd)"),
								React.createElement('th',{style:{color:"white"}}, "Items")),
							React.createElement('tbody', null,null,
								state.Data.map(i =>React.createElement('tr',null,null,
									React.createElement('td', null,null,
										React.createElement('h5',{style:{color:"white"}},i._id)),
									React.createElement('td', null,null,
										React.createElement('h5',{style:{color:"white"}},i.address.closestBranch)),
									React.createElement('td', null,null,
										React.createElement('h5',{style:{color:"white"}},i.address.streetAddress)),
									React.createElement('td', null,null,
										React.createElement('h5',{style:{color:"white"}},(i.date.substring(0,10)))),
									React.createElement('td', null,null,
										React.createElement('table',{className:"table pull-left",style:{backgroundColor:"transparent"}},null,
												React.createElement('thead',null,null,
													React.createElement('th',{style:{color:"white"}}, "Sr#"),
													React.createElement('th',{style:{color:"white"}}, "Item"),
													React.createElement('th',{style:{color:"white"}}, "Quantity"),
													React.createElement('th',{style:{color:"white"}}, "Price")),
												React.createElement('tbody',null,null,
													i.items.map((item,pos) => React.createElement('tr',null,null,
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
															React.createElement('h5', {style:{color:"white"}},"Total: ")),
														React.createElement('td', null,null,
															React.createElement('h5', {style:{color:"white"}},i.totalAmount)))))))))))))))

setState({disable:dis, b1:B1, b2:B2, b3:B3, visi:vis, Data:data, tab : showTab})


$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        sdate = new Date(start)
        edate = new Date(end)
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]

        }
    }, cb);
    cb(start, end);
});

