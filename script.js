// Assignment Code

const specialcharacters = "!@# $ % ^&*()_ + - =";
const numbercharacter = "0123456789";
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercase = "qwertyuiopasdfghjklzxcvbnnm";
const emojis = "😊😂🤣❤️👌💕🤞😉😎🎶💖😜😶‍🌫️😱😵‍💫🥴"
const textforDay = ["Have a Great Day!","Happy Hacking !"]


function generatePassword() {
  
  var passwordlength = parseInt(window.prompt("How long do you want your password? (8-128 characters long)"));
  console.log(passwordlength);
  
  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {

    return "Password has to be over 8 & under 128🤷‍♀️🤷‍♂️😠😡"
  }
  else {
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
    // var hasEmojiCharacters = confirm(
    //   'Click OK to confirm including emoji characters.'
    // );
    var endpass = "";
    if (hasUppercaseCharacters) {
      endpass += uppercase
    }
    if (hasSpecialCharacters) {
      endpass+= specialcharacters;
    }
    if (hasLowercaseCharacters) {
      endpass += lowercase;
    }
    if (hasNumericCharacters) {
      endpass += numbercharacter;
    }
    // if (hasEmojiCharacters) {
    //   endpass += emojis;
    // }
    if(endpass.length === 0){
      return "Please choose a character type 🤦‍♀️🤦‍♂️😒😢"
    }
    console.log(endpass.length);
    console.log(passwordlength);
    var passw =""
    for (var index = 0; index < passwordlength; index++){
       var rnd = Math.floor(Math.random()*endpass.length)
       passw += endpass[rnd]
      
    }
    var emoji = textforDay[Math.floor(Math.random() * textforDay.length)] + "😁👍🙌✌️"
    // for(let i=0;i<5;i++){
    //   emoji += emojis[Math.floor(Math.random()*emojis.length)]
    // }

    console.log(passw,"PASS -1")
    return passw +"\n\n" + emoji
  }
}

var generateBtn = document.querySelector('#generate');


function writepassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
   console.log(password,"Pass -2")
  passwordText.value = password;
}
generateBtn.addEventListener("click", writepassword);
