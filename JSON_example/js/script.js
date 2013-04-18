// JavaScript Document
var myJSON = {"tools":[
		{"name" : "Circular Saw", "type" : "Power Tool", "price" : 120.99},
		{"name" : "Hammer", "type" : "Hand Tool", "price" : 35.86},
		{"name" : "Mitre Saw", "type" : "Power Tool", "price" : 489.75},
		{"name" : "Table Saw", "type" : "Power Tool", "price" : 520.93},
		{"name" : "Screwdriver", "type" : "Hand Tool", "price" : 12.49},
		{"name" : "Wrench", "type" : "Hand Tool", "price" : 9.99},
		{"name" : "Finish Nailer", "type" : "Air Tool", "price" : 89.99},
		{"name" : "Brad Nailer", "type" : "Air Tool", "price" : 56.24},
		{"name" : "Tape Measure", "type" : "Hand Tool", "price" : 29.76},
		{"name" : "4&#39; Level", "type" : "Hand Tool", "price" : 45.03}		
]	
}

onload=init;

function init(){	
	document.getElementsByTagName("section")[0].innerHTML = getJSON();
	createHeader();
} 

function getJSON(){
		var message = "";
		
		for(var i=0; i<myJSON.tools.length; i++){
		message += "<ul>";
		message += "<h2><li>"+myJSON.tools[i].name+"</li></h2>"	
		message += "<li class='list'>"+myJSON.tools[i].type+"</li>"
		message += "<li class='list'>"+"&#36;"+myJSON.tools[i].price+"</li>"
		message += "</ul>";
		}
		return message;
}

function createHeader(){
var header = document.createElement("h1"); 
	header.innerHTML = "CONSTRUCTION TOOLS";
var destination = document.getElementsByTagName("section")[0]; 
	destination.parentNode.insertBefore(header,destination); 
}





