// STEP 1 Convert identifiers to Camel Case notation
let someMonth
//function theMonth()
let currentMonth
let summerMonth
let myLibraryfunction

// STEP 2 Provide an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
/*
Numeric Literal: 4.5
String Literal: 'Hello Class!'
Boolean Literal: true
Null Litleral: null
*/

// STEP 3 Give me two examples of complex / variable expressions.
//let complexExpression1 = 5 + 4 * 10
let setp3Var1 = 10
let step2Var2 = 5
let complexExpression2 = setp3Var1 + step2Var2

// STEP 4 Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
let strfirstName
let strlastName
let straddress 
let strcity 
let strstate 
let intzipCode
let intyourAge
let strreferralSource
let blnmayWeContactYou

// STEP 5 Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
strcity = 'San Diego'
blnmayWeContactYou= true
intzipCode= 92101

// STEP 6 Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
console.log("***Step 6***")
let step6Var1 = "Days" 
let step6Var2 = 350
console.log(`${step6Var1}`)
console.log(`${step6Var2}`)


// STEP 7 Create two variables.
console.log("***Step 7***")
let strguessName = Juan
let intguessAge = 35

//For the first variable, add a Boolean and a string and display the coerced result.
// **See Console for Log results
console.log(strguessName == "Juan")

// For the second variable, add a number and a Boolean and display the coerced result.
// **See Console for Log results
console.log(intguessAge <= 30)

// STEP 8 Is the following string literal valid? If not, how would you fix it?
console.log("***Step 8***")
let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`
console.log(someString)

// STEP 9 Create a variable that produces a null value in the console window.
//Then, create a variable that produces an undefined value in the console window.
console.log("***Step 9***")
let varNull=null
let varUndef
console.log(varNull)
console.log(varUndef)

//STEP 10 Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
console.log("***Step 10***")
console.log(typeof "Hello Class")
console.log(typeof 30)
console.log(typeof 50<=20)
console.log(typeof newVar)


// STEP 11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//Hello Zak Ruvalcaba, welcome to the JavaScript class!
//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
window.alert("Alert box from Step 11 - Hello" + " " + "Juan P" + ", Welcome to JavaScript calss!")

// STEP 12 Declare a variable called name and set it equal to your name.
//Substitute your name in the previous alert string with the variable instead.
let strname = "Juan Pimentel"
window.alert(`Alert box from Step 12 - Hello ${strname}, Welcome to JavaScript calss!`)

// STEP 13 Declare a variable called course and set it equal to “JavaScript”.
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
let strcourse = "JavaScript"
window.alert(`Alert box from Step 13 - Hello ${strname}, Welcome to ${strcourse} class!`)

// STEP 14 Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//Hello Zak Ruvalcaba.
//Welcome to the JavaScript class!
window.alert(`Alert box from Step 14 - Hello ${strname}
Welcome to ${strcourse} class!`)

// STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name.The prompt’s response will now be captured in the name variable.
strname= prompt("Enter your Name *Step 15*")

// STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
strcourse=prompt("Enter class name")    
window.alert(`Alert box from Step 16 - Hello ${strname}
Welcome to ${strcourse} class!`)

// STEP 17 Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.
console.log("***Step 17***")
let x=10
let y=20
console.log(x+y)

// STEP 18 Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
console.log("***Step 18***")
x=20
console.log(x+y)

// STEP 19 Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window.
//The result should be 100.
console.log("***Step 19***")
x=20
console.log(x*5)


// STEP 20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.
console.log("***Step 20***")
x=20%3
console.log(x)

// STEP 21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
console.log("***Step 21***")
let varA= 50
let varB= 70
console.log ( varA <= varB)

// STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
console.log("***Step 22***")
let varC= "Juan"
let varD= "Pedro"
console.log ( varC == varD)
