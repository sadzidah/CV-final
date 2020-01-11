/*  Name:  Sadžida Halvadžić
    Course:  CS412  Web Applications Developmnet
    Assignment:  Lab 3
    Due Date:  15.12.2019
    Purpose:  The purpose of this .js is to add manipulation with HTML and CSS properties */

function nameClick()
{
	var myName = document.getElementById('myName');
    myName.setAttribute("class", "nameStyle");
	myName.innerHTML = "Hello, visitor!";

	document.getElementById('me').setAttribute("class", "meStyle");
}
