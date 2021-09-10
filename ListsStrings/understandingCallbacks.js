// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    callback(fullName, gender);
    
}

function greetUser(customerName, sex)  {
    var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
   console.log("Hello, " + salutation + " " + customerName);
 }

 getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);

 // Pass the greetUser function as a callback to getUserInput
 getUserInput("Bill", "Gates", "Man", greetUser);
