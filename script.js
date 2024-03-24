//Set Varibles
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


//Check if input is a valid US phone number
const numberValidator = (input) => {
    const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
  results.innerHTML = phoneRegex.test(input) ? `Valid US number: ${input}` : `Invalid US number: ${input}`
}

//Set Buttons
checkBtn.addEventListener("click", () => {
  const input = userInput.value;
  
  //Verify input exists
  if (input.length === 0) {
    alert("Please provide a phone number");
    return;
  } else {
    numberValidator(input);
    userInput.value = '';
  }
});

// Enable enter as a submit option
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    numberValidator(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  results.innerHTML = "";
});