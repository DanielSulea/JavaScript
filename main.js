console.log("Hello World!");
var x = 3;
//  x = 2;
 console.log(x);
 var name = 'John Doe';
 console.log(name);
 var templateNme = "John Doe[${x}]";
 console.log(templateNme);

 var stringName = "John Doe[" + x + "]";
 console.log(stringName);

 var paragraph = 'Line 1 \nLine 2';
 console.log(paragraph);

 var isTrue = "true";
 console.log(isTrue);

 var thisIsNothing = null;
 console.log(thisIsNothing);

 var thisIsNotDefined;
 console.log(thisIsNotDefined);

//  console.log(notYetDefined);

console.log(72 % 10);

// var identityCheck = 2 === 2;
var identityCheck = 2 === 2;
console.log(identityCheck);

var numberExpression = 2 > 0 && 0 > 2;
console.log("numberExpression:" + numberExpression);
console.log(typeof numberExpression)

var age = 18;
// var checkIfLegalAge = age < 18 ? "belowLegalAge" : "legalAge";
var checkIfLegalAge = age >= 18 ? "LegalAge" : "belowLegalAge";
console.log ("age = " + age);
console.log(checkIfLegalAge);

var isOdd = x % 2 === 1 // false (x = 2)
console.log(isOdd);
