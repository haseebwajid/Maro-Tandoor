let state= {}
$('input[name="daterange"]').daterangepicker();

// console.log(allusers)
// console.log(allorders)
// console.log(user_data)
console.log(menu)

vis = 'hidden'
B1 = []
B2 = []
B3 = []
dis = ['','','']
product='Pizza Naan'

let arrx = []
arrx = ['DHA', 'ModelTown']
var countx = 0
var county =0

var sdate= new Date()
var edate= new Date()

const setState = (updates) => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}

const viewOrderPerProduct = (pos) => {
	Plotly.purge('myDiv')
	B3 =[]
	B2 =[]
	B1 =[1]
	vis = 'visible'
	dis = [true,'','']
	setState({visi :vis, b1:B1, b2:B2,b3:B3,disable:dis})
}
const viewOrderPerBranch= (pos) => {
	Plotly.purge('myDiv')
	B3 =[]
	B2 =[1]
	B1 =[]
	vis = 'visible'
	dis = ['',true,'']
	setState({visi :vis, b1:B1, b2:B2,b3:B3,disable:dis})
}


const viewOrderPerDate = (pos) => {
	Plotly.purge('myDiv')
	B3 =[1]
	B2 =[]
	B1 =[]
	vis = 'visible'
	dis = ['','',true]
	setState({visi :vis, b1:B1, b2:B2,b3:B3,disable:dis})
}
const handleClick1 = () => {
	dict = {}
	var xaxis=[]
	var yaxis =[]
	allorders.forEach(i => {
	var x = new Date(i.date)
	if(x.getTime() >= sdate.getTime() && x.getTime() <= edate.getTime()){

		i.items.forEach(item => {
			if(item.Item == product){
				if(dict[i.date] == null){
					dict[i.date] = 1*item.Quantity
				}else{
					dict[i.date] = dict[i.date] + 1*item.Quantity
				}
			}
		})
	}
})

	xaxis = Object.keys(dict)
	yaxis = Object.values(dict)
	console.log(xaxis,yaxis)

var data = [
  {
    x: xaxis,
    y: yaxis,
    type: 'line',
    marker: {         
            color: 'orange'
        }
  }
];
var layout = {
  title: 'Number of Orders per Date',
  paper_bgcolor: '#000',
  plot_bgcolor: '#000',
  font:{
    family: 'Raleway, snas-serif',
    size:18,
    color:'white'
  },
  showlegend: false,
  xaxis: {
  	autotick:false,
  	tickcolor : 'white',
    linecolor:'white',
  	title:'Branch',
  	color:'white'
  },
  yaxis: {
  	tickcolor : 'white',
  	linecolor:'white',
  	title:'Number of Orders',
    zeroline: false,
    gridwidth: 2,
    color:'white'
  },
 }

 Plotly.newPlot('myDiv', data,layout);
}

const handleClick3 = () =>{
dict = {}
var xaxis=[]
var yaxis =[]
allorders.forEach(i => {
	var x = new Date(i.date)
	console.log(x,sdate,edate)
	if(x.getTime() >= sdate.getTime() && x.getTime() <= edate.getTime()){
		if(dict[i.date]== null){
			dict[i.date] = 1
		}else{
			dict[i.date] = dict[i.date] + 1
		}
	}
})
	xaxis = Object.keys(dict)
	yaxis = Object.values(dict)
	console.log(xaxis,yaxis)

	var data = [
  {
    x: xaxis,
    y: yaxis,
    type: 'line',
    marker: {        
            color: 'orange'
        }
  }
];
var layout = {
  title: 'Number of Orders per Date',
  paper_bgcolor: '#000',
  plot_bgcolor: '#000',
  font:{
    family: 'Raleway, snas-serif',
    size:18,
    color:'white'
  },
  showlegend: false,
  xaxis: {
  	autotick:false,
  	tickcolor : 'white',
    linecolor:'white',
  	title:'Branch',
  	color:'white'
  },
  yaxis: {
  	tickcolor : 'white',
  	linecolor:'white',
  	title:'Number of Orders',
    zeroline: false,
    gridwidth: 2,
    color:'white'
  },
 }

 Plotly.newPlot('myDiv', data,layout);
}

const handleClick2 = () =>{

countx=0
county =0

allorders.forEach(i => {
	var x = new Date(i.date)
	if(x.getTime() >= sdate.getTime() && x.getTime() <= edate.getTime()){
		if(i.address.closestBranch == 'DHA')
			countx++
		else
			county++
	}
})

let arry = [countx,county]

var data = [
  {
    x: arrx,
    y: arry,
    type: 'bar',
    marker: {         
            color: 'orange'
        }
  }
];


var layout = {
  title: 'Number of Orders per Branch',
  paper_bgcolor: '#000',
  plot_bgcolor: '#000',
  font:{
    family: 'Raleway, snas-serif',
    size:18,
    color:'white'
  },
  showlegend: false,
  xaxis: {
  	tickcolor : 'white',
    linecolor:'white',
  	title:'Branch',
  	color:'white'
  },
  yaxis: {
  	tickcolor : 'white',
  	linecolor:'white',
  	title:'Number of Orders',
    zeroline: false,
    gridwidth: 2,
    color:'white'
  },
 }
 Plotly.newPlot('myDiv', data,layout);

}

const goBack = () => {
		document.location.href ='/analytics'
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
						React.createElement('table', {'border-spacing':'10px',className:'table',style:{marginTop:'40px'}},null,
						React.createElement('tbody', null,null,
							React.createElement('tr', null,null,
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => goBack(),className:'btn btn-warning btn-md'}, "Go Back")),
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewOrderPerProduct(),className:'btn btn-warning btn-md',disabled:state.disable[0]}, "Number of Products per Date")),
								React.createElement('td',null,null,
								React.createElement('button', {onClick:() => viewOrderPerBranch(),className:'btn btn-warning btn-md',disabled:state.disable[1]}, "Number of Orders per Branch")),
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
							React.createElement('button', {onClick: () =>handleClick1(), className:'btn btn-default', style:{marginLeft:'20px'}},"Generate Graph"))),
						state.b2.map(i=> React.createElement('div',null,null,
							React.createElement('button', {onClick: () =>handleClick2(),className:'btn btn-default',style:{marginLeft:'20px'}},"Generate Graph"))),
						state.b3.map(i=> React.createElement('div',null,null,
							React.createElement('button', {onClick: () =>handleClick3(),className:'btn btn-default',style:{marginLeft:'20px'}},"Generate Graph"))),
						React.createElement('div', {id:'myDiv', style:{marginTop:'100px',width:'100%',height:'400px'}},null)))))

setState({visi :vis, b1:B1, b2:B2,b3:B3, disable:dis})

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