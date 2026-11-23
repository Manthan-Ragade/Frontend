// // Conditional statement 
// console.log("before my if statement");
// let age = 14;
// if(age >= 18){
//     console.log("You can vote");
//     console.log("You can drive");
// }
// if (age < 18){
//     console.log("you can't vote");
// }
// console.log("After my if statement");

// let firstName = "Manthan";
// let lastName = "Ragade";
// if (firstName == "Manthan"){
//     console.log(`Welcome to ${firstName}`);
// }
// let colour  = "red";
// if(colour == "red"){
//     console.log("YOU CAN STOP!..");
// }
// if(colour == "green"){
//     console.log("you can goooo...!");
// }
// if(colour == "yellow"){
//     console.log("go slow down");
// }

// let size = 'L'
// if(size === 'XL'){
//     console.log("Price is RS.250");
// }else if(size === 'L'){
//     console.log("Price is RS.250");   
// }


// let num = 21;
// if(num % 10 == 0){
//     console.log("Good");
// }else{
//     console.log("Bad");
// }

// let username = prompt("Enter your username");
// let age = prompt("Enter your age");

// let msg = alert(`${username} is ${age} years old`);
// console.log(msg);

// let months = "Quarter 5";

// switch(months){
//     case "Quarter 1":
//         console.log("January, February, March");
//         break;
//     case "Quarter 2":
//         console.log("April, May, June");
//         break;
//     case "Quarter 3":
//         console.log("July, August, September");
//         break;
//     case "Quarter 4":
//         console.log("October, November, December")
//         break;
//     default:
//         console.log("Undefine months");             
// }

// let str = "apple";
// if((str[0] ==="A" || str[0] === "a") && (str.length >= 5)){
//     console.log("STRING IS Golden");
// }else{
//     console.log("String is not golden");
//}

// let num = 379;
// let num2 = 47852;
// if((num %10) == (num2 %10)){
//     console.log("both number have last digit same");
// }else{
//     console.log("not same");
// }

// let msg = "       help!     ";
// console.log(msg.trim().toUpperCase());

//Colle;
//2
//OurCollege


// let name = "ApnaCollege";
// console.log(name.slice(4).replace('l','t'))

// let arr = ['january','july','march','august'];
// arr.shift();
// arr.shift();
// arr.unshift('june');
// arr.unshift('july');
// console.log(arr);

// let arr = ['january','july','march','august'];
// arr.splice(0,2,'july','june');
// console.log(arr);

// let pencile = 10;
// let errase = 5;
// let output = `the pencile price is ${pencile} and errare price is ${errase}`;
// console.log(output);

// let str = "apple";
// if((str[0] === 'a') && (str.length > 3)){
//     console.log('Good string')
// }else{
//     console.log('not good string')
// }

// let color = 'red';
// switch(color){
//     case 'red':
//         console.log('you can stop')
//         break
//     case 'green':
//         console.log('you can go')
//         break
//     case 'yellow':
//         console.log('go slow down')
//         break;
//     default :
//         console.log('Gooo with breaking rules')            
// }


let day  = 2;
switch (day){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thurday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default :
        console.log('Not a day')    
}

alert('somethings is wrong')