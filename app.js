// // Chapter 21
// // 1
// var Input=prompt("plz Enter something")
// var developer=userInput.toLowerCase()

// // 2
// var a = "LOVE"
// a=a.toLowerCase();

// // 3
//  var a = "love"
// a=a.toUpperCase();

// // 4
// var a='LOVE'
// var b = a.toLowerCase()

// // 5
// var arr=["love","LOVE"]
// var arr1=arr[1].toLowerCase();

// // 6
//  alert(z);

// // 7
// var cityName="kaRachi"
// var cityName1=cityName.slice(0,1)
// var cityName2=cityName.slice(1)
// var cityName=cityName1.toUpperCase()+cityName2.toLowerCase();
// console.log(cityName)

// // Chapter 22-25
// // 1
// var name="shahid"
// var m1=sameWords.slice(1,3)

// // 2
// var lengthOfString=sameWords.length.toString()

// // 3
// var animal="lion"
// var seg=animal.slice(2,6)

// // 4
// var length=animal.length
// console.log(length)

// // 5
// var animal="cheeta"
// var length1=animal.length
// var segment=animal.slice(1,5)

// // 6
// var text="yes  or not "
// var indx=text.indexOf("or")
// console.log(indx)

// // 7
// var text="To be or not to be"
// var index=text.lastIndexOf("be")
// console.log(index)

// // 8
// var word='HI'
// var index=word.indexOf("H")

// // 9
// if(word[ndex]=="G"){
//     console.log("word found")
// }

// // 10
// var string="abcde"
// var b=string.charAt(2)

// // 11
// var text="Be the Best to not br fail "
// var cha=text.charAt(9)


// // 13
// var something=prompt("Enter plz")
// var cha=text[4]

// // 14
// if (str[3]==t){
//     console.log("word found")
// }

// // 15
// var arr=[]
// for(var i=0;i=str.length;i++){
//      arr[i]=str[i]
// }
// console.log(arr)

// // 16
// var str="1,2,3,4,5"
// var newStr=str.replace("1","one")

// // 17
//  var str="Be the one and only"
//  var newStr=str.replaceAll("o","1")

// // Chapter 26
// // 1
// var a=12.8735
// var b=Math.round(a)

// // 2
// var a=12.4245
// var b=Math.round(a)

// // 3
// var a=12.8735
// var b=Math.floor(a)

// // 4
// var origNum=prompt("Enter a decimal number")
// var x=Math.round(origNum)

// // 5
// var a=0.5
// var b=Math.floor(a)

// // Chapter 27
// // 1
// var a=Math.random()
// var b=Math.ceil(a*50)

// // 2
// var num=Math.random()

// // 3
// var a=Math.random()
// var b=Math.ceil(a*6)

// // 4
// var a = Math.random();
// var b = Math.round(a)
// if (b == 1) {
// console.log("head")
// }
// else {
//    console.log("tail")
// }

// // Chapter 28-29
// // 2
// var str="123"
// var num=Number(str)

// // 3
// var str="123"
// var num=parseFloat(str)

// // 4
// By applying function typeOf() or by checking its colour in console box

// // 5
// By applying toString() function

// // 6
// var num1=42
// var num2=toString(num1)

// // 7
// var num3="3.14"
// var num4=Number(num3)

// // Chapter 30
// // 1
// var num5=Math.random()
// var num6=num5.toFixed(4)

// // 2
// var num7=Math.random()
// var num8=Number(num7.toFixed(2))

// // 3
// var num9=12.35
// var num10=toString(num9)

// var a=typeof(num10)
// if(num10.indexOf<5){
//     console.log("Word consists of 4 digits")
// }

// // 4
// var num11=Math.random()
// var num12=toString(num11.toFixed(2))

// // Chapter 31-34
// // 1
// var dObj = new Date();

// // 2
// var dStr = new Date().toString();

// // 3
// var d=

// // 5

// // 6
// var later = new Date(2020, 11, 0);

// // 7
// var myDate = new Date(1992, 1, 2);

// // 8
// alert(new Date('1980-01-01').getTime());

// // 9
// var myDate = new Date();
// myDate.setFullYear(2023)

// // 11
// function setDayOfWeek(2011, 11, 3, 5) {
//      var targetDate = new Date(2011, 11 - 1, 3);
//     var dayDifference = 5 - targetDate.getDay();
//     targetDate.setDate(targetDate.getDate() + dayDifference);
//     return targetDate;
// }

// // Chapter 35-37
// // 1
// function displayAlert() {}

// // 2
// function askName(){
//    var userName=prompt("Enter our name")
// }

// // 3
// function combination(){
//    displayAlert()
//    askName()
// }

// // 4
// function call(){
// var userName=prompt("Enter your name")
// alert(userName)}
// call()

// // 5
// function concat(a, b, c, variable, str, num) {
// }
// var myVariable = "abc";
// var myString = "def";
// var myNumber = 123;
// concat('a', 'b', 'c', myVariable, myString, myNumber);

// // 6
// var concatenatedValue = concatenateAndAssign("Hello, ", "world!");
// console.log(concatenatedValue);

// // 7
// var multiplicationResult = multiplyAndAssign(2, 3, 4);
// console.log(multiplicationResult);

// // 8,10,11
// function calculateAverage(numbers) {
   // if (numbers.length === 0) {
     //   return 0; 
   // }
   // var sum = numbers.reduce(function (a,b) {
   //     return a + b;
   // }, 0);
   // var average = sum / numbers.length;
  //  return average;
// }

// // 9
// function addNumbers(a, b) {
   // var sum = a + b;
   // return sum;
// }

// // 12
// function letterCounts(word) {
   // var counts = {};
   // var lowerCaseWord = word.toLowerCase();
   // for (var i = 0; i < lowerCaseWord.length; i++) {
       // var letter = lowerCaseWord[i];
       // if (letter.match(/[a-z]/)) {
       //     counts[letter] = (counts[letter] || 0) + 1;
     //   }
   // }
   // return counts;
// }

    // // 14
  //  var birthdate = new Date("2005-11-14");
// var currentDate=new Date()
   // var age = currentDate.getFullYear() - birthdate.getFullYear();

    // // 15
   // function isWordInArray(word, array) {
       // var lowercaseWord = word.toLowerCase();
       // var lowercaseArray = array.map(function (element) {
         //   return element.toLowerCase();
       // });
     //   return lowercaseArray.includes(lowercaseWord);
   // }

// // 16
// function repeatLetter(letter) {
  //  return letter.repeat(10);
// }

// // 17
// function reverseArray(arr) {
  //  return arr.reverse();
// }

// // Chapter 39-40
// // 1
// var status = "success";

// switch (status) {
//     case "success":
//         console.log("Operation was successful.");
//         break;
//     case "warning":
//         console.log("There is a warning.");
//         break;
//     case "error":
//         console.log("An error occurred.");
//         break;
//     default:
//         console.log("Unknown status.");
// }

// // 2
// var cityName = prompt("Enter the city name:");
// switch (cityName.toLowerCase()) {
//     case "new york":
//         console.log("You entered New York.");
//         break;
//     case "los angeles":
//         console.log("You entered Los Angeles.");
//         break;
//     case "london":
//         console.log("You entered London.");
//         break;
//     default:
//         console.log("Sorry, we don't have information for the entered city.");
// }