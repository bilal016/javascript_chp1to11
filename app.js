// //---------------chap#1------------
// //#1
// alert("Hello");

// //#2
// alert("Error! please enter a valid password.");

// //#3
// alert("Welcome to js land....\n Happy Coding!");

// //#4
// alert("Welcome to js land...");
// alert("Happy Coding!");

// //#5
// alert("Hello..i can run JS through my web browser's console");

// //#6--use of js with html/css.

// //#7--placement of script tag on different locations.

// //--------------chap#2----------------------
// //#1
// var username;

// //#2
// var myName = "Bilal Shah";

// //#3
// var message;
// message = "Hello World";
// alert(message);

// //#4
// var userName = alert("Jhone Doe");
// var age = alert("15 year old");
// var course = alert("Certified Mobile Application Development");

// //#5
// var pizza = alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// //#6
// var email = "example@example.com";
// alert("my email address is" + " " + email);

// //#7
// var book = "A smarter way learn Javascript";
// alert("I am trying to learn from book" + " " + book);

// //#8--js to display on browser
//document.write("Yah! I can write HTML content through javascript");

// //#9
// var end = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(end);


// //----------------chap#3----------------------
// //#1
//var age = "24";
//alert("I am" + " " + age + " " + "years old");

// //#2--track the visit

// //#3
// var birthYear = "2000";
// document.write("My birth year is" , " " ,birthYear,"<br> Data type of my declared number is");

// //#4
//var name = prompt("Enter your name ", "John Doe");
//var product = prompt("Product Title ", "T-Shirt");
//var quantity = prompt("Quantity ", "5");
//document.write(name," ", "ordered"," ",quantity," ",product,"(s) ","on XYZ Clothing Store")


// //-----------------chap4-------------------------
// //#1
//var fullname , age , gender;

// //#2--legal-variable-declare
//var firstName,lastName,age, $price, your_identity;

// //#2--illegal-variable-declare
//var 1firstName, last-name, 222, @price, YOUR-IDENTITY;

// //#3
// var data1 = " numbers, $ and _. ";
//var data2 = " letter, $ or _.";
//var data3 = " sensitive";
//var data4 = " Keywords";
//document.write("Rules for naming JS variables\n");
//document.write("<br> Variable names can only contain", data1 , "For example $my_1stVariable");
//document.write("<br> Variables must begin with a", data2 , "For example $name, _name or name");
//document.write("<br> Variables names are case", data3);
//document.write("<br> Variable names should not be JS", data4);

// //-------------------chap5--------------------------
// //#1
//var firstNum = +prompt("Enter Number", "3");
//var secondNum = +prompt("Enter Number", "5");
//var result = firstNum + secondNum;
//document.write("<br> Sum of ",firstNum," and " ,secondNum," is ",result);

// //#2
// var firstNum = +prompt("Enter Number", "3");
// var secondNum = +prompt("Enter Number", "5");
// var result = firstNum - secondNum;
// document.write("<br> Subtract of ",firstNum," and " ,secondNum," is ",result);

// var firstNum = +prompt("Enter Number", "3");
// var secondNum = +prompt("Enter Number", "5");
// var result = firstNum * secondNum;
// document.write("<br> Multiply of ",firstNum," and " ,secondNum," is ",result);

// var firstNum = +prompt("Enter Number", "3");
// var secondNum = +prompt("Enter Number", "5");
// var result = firstNum / secondNum;
// document.write("<br> Divide of ",firstNum," and " ,secondNum," is ",result);

// var firstNum = +prompt("Enter Number", "3");
// var secondNum = +prompt("Enter Number", "5");
// var result = firstNum % secondNum;
// document.write("<br> Modulus of ",firstNum," and " ,secondNum," is ",result);

// //#3
// var value;
// document.write("Value after variable declaration is: ", value);
// value = 5;
// document.write("<br> Initial value: ", value);
// ++value;
// document.write("<br> value after increment is: ", value);
// value = value + 7;
// document.write("<br> value after addition is: ", value);
// --value;
// document.write("<br> value after decrement is: ", value);
// value = value % 3;
// document.write("<br> The reminder is: ", value);

// //#4
// var ticket = 600;
// var howMany = +prompt("How many Ticket?","5");
// var result = ticket * howMany;
// document.write("Total cost to buy ", howMany, " tickets to a movie is ",result,"PKR");

// //#5
// var i = 1;
// var num = +prompt("Enter any Num", "5");
// document.write("<br> Table of ", num)

// var result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// //#6
// var num = +prompt("Enter value", "25");
// var temp = prompt("Which Scale?", "F or C");
// var res;

// if (temp == "c") {
//     res = (num - 32) * 5 / 9;
//     document.write("Temperature in Celsius: " + res + "<sup>O</sup>C");
// } else if (temp == "f") {
//     res = (num * 9 / 5) + 32;
//     document.write("Temperature in Fahrenheit: " + res + "<sup>O</sup>F");
// } else {
//     document.write("Invalid temperature scale");
// }


// //#7
// var p1 = 650;
// var p2 = 100;
// var q1 = 3;
// var q2 = 7;
// var s = 100;
// var t;
// t = p1*q1 + p2*q2 + s;

// document.write("<h1>Shopping Cart</h1>");
// document.write("<br>Price of item 1 is " + p1);
// document.write("<br>Quantity of item 1 is " + q1);
// document.write("<br>Price of item 2 is " + p2);
// document.write("<br>Quantity of item 2 is " + q1);
// document.write("<br>Shipping charges " + s);
// document.write("<br><br>Total cost of your order is " + t);


// //#8
// var tm;
// var om;
// var p;
// document.write("<h1>Marks Sheet</h1>");
// om = +prompt("Enter Obtained Marks", "804");
// tm = +prompt("Enter Total Marks", "980");
// p = om/tm*100;
// document.write("<br>Tatal Marks: " + tm);
// document.write("<br>Obtained Marks: " + om);
// document.write("<br>Percentage: " + p + "%");


// //#9
// document.write("<h1>Currency in PKR</h1>");
// var num = prompt("Enter the value" , "25");
// var curr = prompt("In which Currency" , "D(US_Dollar) or R(Saudi_Riyal)");
// var conv;
// if(curr == "d"){
// conv = num*104.80;
// document.write("Total Currency in PKR: ", conv);
// }
// else if(curr == "r"){
//     conv = num*28;
//     document.write("Total Currency in PKR: ", conv);
// }
// else{
//     document.write("Invalid Value");
// }


// //#10
// var num;
// num = 10;
// var res = (num+5)*10/2;
// document.write("Mathematical Expression value is: ", res);


// //#11
// document.write("<h1>Age Calculator</h1>");
// var cyear = 2024;
// document.write("<br>Current Year: ", cyear);
// var byear = +prompt("Enter your Birth Year","2000");
// document.write("<br>Birth Year: ", byear);
// var res = cyear-byear;
// document.write("<br>Your Age is: ", res);


// //#12
// var num = +prompt("Enter value oof Radius", "20");
// var res;
// res = (2*3.142)*num;
// document.write("<br>Circumference of a circle is: ", res);
// res = 3.142*(num*num);
// document.write("<br>Area of a circle is: ", res);


// //#13
// document.write("<h1>Life Time supply calculator</h1>")
// var favs = prompt("Enter your favourite snack","Chocolate Chip");
// var cage = +prompt("Enter your Current age", "15");
// var mage = +prompt("Enter Estimated max age", "65");
// var perday = +prompt("Enter Amount of snack per day", "3");
// var res = (mage-cage)*perday;
// document.write("<br>You will need ", res," ", favs, " to last you until the ripe old age of ",mage);


// //------------------------chap6-9--------------------------
// //#1
// var a = +prompt("Enter any number","10");
// document.write("Result:");
// document.write("<br>The value of a is: ",a);
// document.write("<hr>")
// ++a;
// document.write("<br><br>The value of ++a is: ",a);
// document.write("<br>Now the value of a is: ",a);

// document.write("<br><br>The value of a++ is: ",a);
// a++;
// document.write("<br>Now the value of a is: ",a);

// --a;
// document.write("<br><br>The value of --a is: ",a);
// document.write("<br>Now the value of a is: ",a);

// document.write("<br><br>The value of a-- is: ",a);
// a--;
// document.write("<br>Now the value of a is: ",a);


// //#2
// var a = 2, b = 1; //a=1/0/-1/-2/-3, b=1/0/1/0/-1/-2/-1/-2/-1/-2,
// var result = --a - --b + ++b + b--;
// //            1  -   0 +   1 + 1    ==3

// --a;
// //0
// --a - --b;
// //-1 - -1 
// --a - --b + ++b;
// //-2 - -2 + -1 
// --a - --b + ++b + b--;
// //-3 - -2 + -1  +  -1 
// document.write("<br>a is: ", a); //-3
// document.write("<br>b is: ", b); // -2
// document.write("<br>Result is: ", result); //3


// //#3
// var name = prompt("Enter your name","Bilal Shah");
// document.write("Hello " , name);


// //#5
// var i = 1;
// var num = +prompt("Enter any Num", "5");
// document.write("<br> Table of ", num)

// var result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;

// result = num * i;
// document.write("<br>", num, " * ", i, " = ", result);
// ++i;


// //#6
var sub1, sub2, sub3;
var tnum = 100;
var onum1, onum2, onum3;
var per1, per2, per3;
sub1 = prompt("Enter First subject name", "English");
sub2 = prompt("Enter 2nd subject name", "Math");
sub3 = prompt("Enter 3rd subject name", "Urdu");
onum1 = +prompt("Enter First subject Obtained Number", "54");
onum2 = +prompt("Enter 2nd subject Obtained Number", "54");
onum3 = +prompt("Enter 3rd subject Obtained Number", "48");
per1 = onum1/tnum*100;
per2 = onum2/tnum*100;
per3 = onum3/tnum*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></table>");
document.write(sub1,"                ",tnum,"                       ", onum1,"                         ", per1, "%");
document.write("<br>",sub2,"                ",tnum,"                       ", onum2,"                         ", per2, "%");
document.write("<br>",sub3,"                ",tnum,"                       ", onum3,"                         ", per3, "%");