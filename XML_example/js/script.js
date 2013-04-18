// JavaScript Document
onload = init;
 
function init(){
	loadXML();
	outputXML();
	createHeader();
}
	
function loadXML(){
	//core of AJAX
	if(window.XMLHttpRequest){
 xhttp= new XMLHttpRequest()
}else{
 xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}


xhttp.open("GET", "data/data.xml", false);
xhttp.send("");
xmlDoc=xhttp.responseXML;
//end of AJAX
}

function createHeader(){
var header = document.createElement("h1"); 
	header.innerHTML = "Type-Face Origins";
var destination = document.getElementsByTagName("section")[0]; 
	destination.parentNode.insertBefore(header,destination); 
}

function outputXML(){

var message = "";
	
	message +="<ul>";
	
for(var i=0; i<xmlDoc.getElementsByTagName("name").length; i++){
	message += "<h2><li>Name: "+xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue+"</li></h2>";
	message += "<li>Designer: "+xmlDoc.getElementsByTagName("designer")[i].childNodes[0].nodeValue+"</li>";
	message += "<li>Year: "+xmlDoc.getElementsByTagName("year")[i].childNodes[0].nodeValue+"</li>";
	message += "<li>Type: "+xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue+"</li>";
	message += "<hr />";
	}
	message +="<ul>";
	
	document.getElementsByTagName("section")[0].innerHTML = message;

//childNodes[0].nodeValue is used to remove tags from xml file//	

}