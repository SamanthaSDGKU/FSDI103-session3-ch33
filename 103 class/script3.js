// let yourName = "Samantha";
// if(confirm("Are you "+ yourName + "?")){
// 	console.log("Hello " + yourName);
// }else{
// 	console.log("Then what is your name?");
// }

// let number = 199;
// if(number == 99){
// 	console.log("The number is correct");
// }else{
//     console.log("The number is not correct");
// }

// let num1 = 10;
// let num2 = 10;

// if(num1 < num2){
// 	console.log("num1 is smaller than num2");
// }else if(num2 <num1){
//     console.log("num2 is smaller than num1");
// }else{
//     console.log("the numbers are the equal");
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let valid = true;
// //AND -> &&
// if(num1<num2 && num3>num2){
// 	console.log("num1 is smaller than num2 AND num3 is larger than num2");
// }
// //OR -> ||
// if(num1 == 1 || num2 == 1 || num3 == 1){
// 	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }
// //NOT -> !
// if(valid){ //is valid == false? 
// 	console.log("hey your credentials are valid");
// }
let usernameDB ="ken@gmail.com";
let passwordDB ="test1234";
function login(){
    //getting username (prompt)
    let username = document.getElementById("txtUser").value;
    //getting password (prompt)
    let password = document.getElementById("txtPass").value;
    //compare the username and the password with previous credentials
    if(username == usernameDB && password == passwordDB){
        // display welcome to the system + username
        document.write(`
        <p class="alert-success"> Welcome to the system ${username} </p>
        `);
    }else{
        //display invalid creadentials
        document.getElementById("alertMsg").innerHTML=`
        <p class="alert-error"> Invalid credentials! </p>
        `;
    }      
}


