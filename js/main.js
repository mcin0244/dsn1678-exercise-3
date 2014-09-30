var theBox1 = $('.sales__details1');
var theBox2 = $('.sales__details2');
var theButton1 = $('.sales1');
var theButton2 = $('.sales2');

/*
	Functions are reusable pieces of code
	They're basically code stored inside varibales
*/

var buttonClickHandler = function () {
var isActive = theBox1.attr('data-state');

if (isActive =='active') {
	theBox1.attr('data-state', 'inactive');
} else {
 	theBox1.attr('data-state', 'active');
 }
};

theButton1.on('click', buttonClickHandler); 


var buttonClickHandler = function () {
var isActive = theBox2.attr('data-state');

if (isActive =='active') {
	theBox2.attr('data-state', 'inactive');
} else {
 	theBox2.attr('data-state', 'active');
 }
};

theButton2.on('click', buttonClickHandler); 