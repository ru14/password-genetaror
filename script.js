function myFunction() {
    var txt;
    if (confirm("Generat password")) {
        var inputLength = prompt("Please choose number between 8-128");

        // Validate inputLength is number
        var num = parseInt(inputLength, 10);
        if (isNaN(num)) {
            console.log("this is not an integer number.");
            return;
        }

        // Validate inputLength is between 8 and 128
        if (num < 8 || num > 128) {
            console.log("Lenght is not in range.");
            return;
        }

        console.log("Next step");
        // choose lowercase, uppercase, numeric, and/or special characters
    }
 var upperCase= confirm("Do you want Uppercase?");
 if (upperCase=== true){
     txt="you chose Uppercase"
 }
 var lowerCase= confirm("Do you want Lowercase?");
 if (lowerCase=== true){
     txt="you chose Lowercase"
 }
 var numeric= confirm("Do you want Numeric?");
 if (numeric=== true){
     txt="you chose Numeric"
 }
 var specialCharater= confirm("Do you want  SpecialCharater?");
 if (specialCharater=== true){
     txt="you chose  SpecialCharater"
 }
    document.getElementById("demo").innerHTML = txt;
}












//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
