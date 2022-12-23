// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialcharacters = ["!,@,#, $, %, ^,&,*,(,),_, +, -, ="];
const numbercharacter = ["0,1,2,3,4,5,6,7,8,9"];
const uppercase = ["Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M"];
const lowercase = ["q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,n,m"];
const emojis = ["😊,😂,🤣,❤️,😒,👌,💕,😁,👍,🙌,🤦‍♀️,🤦‍♂️,🤷‍♀️,🤷‍♂️,✌️,🤞,😉,😎,🎶,💖,😢,😜,😶‍🌫️,🥶,🥵,😱,😵‍💫,🥴,😠,😡"]
var options ="0,1,2,3,4,5,6,7,8,9";

//
var passw = " ";
function generatePassword() {
  passwordtxt = document.querySelector("#password")
  passwordtxt.value = " ";
  var passwordlength =  window.prompt("How long do you want your password? (8-128 characters long)"); 
  console.log(passwordlength);
// addEventListener("click", generateBtn);
// window.prompt("how long");

if (passwordlength < 8 || passwordlength > 128) {

  alert("Password has to be over 8 & under 128")
}
var hasSpecialCharacters = confirm(
  'Click OK to confirm including special characters.'
);
var hasNumericCharacters = confirm(
  'Click OK to confirm including numeric characters.'
);
var hasLowercaseCharacters = confirm(
  'Click OK to confirm including lowercase characters.'
);
var hasUppercaseCharacters = confirm(
  'Click OK to confirm including uppercase characters.'
);
var hasEmojiCharacters = confirm(
  'Click OK to confirm including emoji characters.'
);
var finalpass = [];
if (hasUppercaseCharacters) {
finalpass = finalpass.concat(uppercase);
}
if (hasSpecialCharacters) {
  finalpass = finalpass.concat(specialcharacters);
  }
  if (hasLowercaseCharacters) {
    finalpass = finalpass.concat(lowercase);
    }
    if (hasNumericCharacters) {
      finalpass = finalpass.concat(numbercharacter);
      }
};

 
 // for (let i = 0; i < length; i++) {
 
// return newPass(setpasswordlength(), makepassword());
// getPasswordOptions();



function setpasswordlength() {
  // var thlength = 0;

}
// console.log(passwordlength);
//variable to
// passwordText.addEventListener("click", passwordText)
// if(password < 8 || passwordlength > 128); {
// alert("The password needs to be longer than 8, and lower than 128")

  // var newPass = function(num, str) {
    
  //   };
  // return theword;
// getPasswordOptions();
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
