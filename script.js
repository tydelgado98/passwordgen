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
 console.log(generateBtn)
 
//Made a variable for gen pass//
function generatePassword() {



var newPass = function(num, str) {
  var theword = "";
  for (var i = 0; i < num; i++) {
theword += str[Math.floor(Math.random() * str.length)];
  };
return theword;
};
return newPass(setpasswordlength(), makepassword());
};

function writePassword() {
var passwordText = document.querySelector("#password");
var thepass = 
// passwordText.value = " ";
// console.log(passwordlength);
//variable to


passwordText.addEventListener("click", passwordText)
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
generateBtn.addEventListener("click", writePassword);
