//Define a function called multiplyThree which accepts a number and returns that number multiplied by 3. 

function multiplyThree(x){
    let result=x*3;
    return result;
}

console.log(multiplyThree(5));//expected: 15
console.log(multiplyThree(3));//expected: 9

//bad 

document.write("<p> The result of multiplyThree * 5 + multiplyThree(5) + </p><p> The result of multiplyThree * 3 " + multiplyThree(3) + "</p>");

let user = "Lea";
user='Lea';
user=`Lea`;

//good
//template string `` grave acent backtick 
document.write(`
    <p> The result of multiplyThree * 5 ${multiplyThree(5)} </p>
    <p> The result of multiplyThree * 3 ${multiplyThree(3)} </p>
    `);
