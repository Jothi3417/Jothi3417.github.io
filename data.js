var employeeData;

function employeeInfo(flag){

//var details="";
var strEmployeeTable="";
strEmployeeTable = '<table class="table table-hover table-bordered">';
strEmployeeTable = strEmployeeTable + '<thead>';
strEmployeeTable=strEmployeeTable+ '<tr><th scope="col">Employee Number</th><th scope="col">First</th><th scope="col">Place</th><th scope="col">State</th></tr>';
strEmployeeTable=strEmployeeTable+ '</thead>';

strEmployeeTable=strEmployeeTable+'<tbody>';
if(flag==3){
var empNo=parseInt(document.getElementById('form1').value);
empNo=empNo-101;
strEmployeeTable=strEmployeeTable+'<tr><th scope="row">'+[empNo+101]+'</th><td>'+employeeData[empNo].first+'</td><td>'+employeeData[empNo].place+'</td><td>'+employeeData[empNo].state+'</td></tr>';
}
else{
for(i=0;i<employeeData.length;i++){
	if(flag==0){
		strEmployeeTable=strEmployeeTable+'<tr><th scope="row">'+[i+101]+'</th><td>'+employeeData[i].first+'</td><td>'+employeeData[i].place+'</td><td>'+employeeData[i].state+'</td></tr>';
	}
	else if(flag==1){
		if(i%2!=0){
					strEmployeeTable=strEmployeeTable+'<tr><th scope="row">'+[i+101]+'</th><td>'+employeeData[i].first+'</td><td>'+employeeData[i].place+'</td><td>'+employeeData[i].state+'</td></tr>';
		}
	}
	else if(flag==2){
		if(i%2==0){
					strEmployeeTable=strEmployeeTable+'<tr><th scope="row">'+[i+101]+'</th><td>'+employeeData[i].first+'</td><td>'+employeeData[i].place+'</td><td>'+employeeData[i].state+'</td></tr>';
		}
	}
}
}
strEmployeeTable=strEmployeeTable+'</tbody>';
strEmployeeTable=strEmployeeTable+'</table>';

//for(var i=0;i<employeeData.length;i++){
//details=details+[i+1]+"."+employeeData[i].first+" , "+employeeData[i].place+"<br>"
//}
document.getElementById("place").innerHTML=strEmployeeTable;
}
let str= 'Jothi'
let firstChar = str.charAt(0) 
console.log(firstChar);
function clearData(){
	document.getElementById("place").innerHTML="";
}

employeeData=[
{
  "first":"Ankit",
  "last":"Gupta",
  "place":"Firojabaj",
  "state":"UP"
},
{
  "first":"Jothi",
  "last":"lakshmi",
  "place":"Rajapalayam",
  "state":"TamilNadu"
},
{
  "first":"Bhavani",
  "last":"Konderu",
  "place":"Hyderabad",
  "state":"Telungana"
},
{
  "first":"Udhay",
  "last":"Kumar",
  "place":"Bangalore",
  "state":"Karnataka"
},
{
  "first":"Ghanshyam",
  "last":"Bhatt",
  "place":"Lucknow",
  "state":"UP"
},
{
  "first":"Guru",
  "last":"Moorthy",
  "place":"Ahmedabad",
  "state":"Gujarat"
},
{
  "first":"Malar",
  "last":"Malar",
  "place":"Theni",
  "state":"TamilNadu"
},
{
  "first":"Ram",
  "last":"Prasanna",
  "place":"Theni",
  "state":"TamilNadu"
},
{
  "first":"Vellaidurai",
  "last":"K",
  "place":"Rajapalayam",
  "state":"TamilNadu"
},
{
  "first":"Shanthi",
  "last":"V",
  "place":"Rajapalayam",
  "state":"TamilNadu"
}
]