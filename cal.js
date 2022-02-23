function add(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	var result=parseInt(x)+parseInt(y);
	document.getElementById('span').innerHTML=result;
}
	

function sub(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	var result=parseInt(x)-parseInt(y);
	document.getElementById('span').innerHTML=result;
}

function mul(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	var result=parseInt(x)*parseInt(y);
	document.getElementById('span').innerHTML=result;
}
function div(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	var result=parseInt(x)/parseInt(y);
	document.getElementById('span').innerHTML=result;
}
