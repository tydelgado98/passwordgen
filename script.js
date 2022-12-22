// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialcharacters = ["!,@,#, $, %, ^,&,*,(,),_, +, -, ="];
const numbercharacter = ["0,1,2,3,4,5,6,7,8,9"];
const uppercase = ["Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M"];
const lowercase = ["q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,n,m"];
const emojis = ["😊,😂,🤣,❤️,😒,👌,💕,😁,👍,🙌,🤦‍♀️,🤦‍♂️,🤷‍♀️,🤷‍♂️,✌️,🤞,😉,😎,🎶,💖,😢,😜,😶‍🌫️,🥶,🥵,😱,😵‍💫,🥴,😠,😡"]
// Write password to the #password input,
 // Conditional statement to check if password length is a number.
 // Prompts end if this evaluates false

var passwordlength = prompt("how long do you want this password?");
console.log(passwordlength);
var theword = "";
function writePassword() {
//variable to
var passwordText = document.querySelector("#password");
passwordText.value = " ";
console.log(passwordlength);


if(password < 8 || passwordlength > 128); {
alert("The password needs to be longer than 8, and lower than 128")
}



// var hasSpecialCharacters = 

// var passwordOptions = 



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
