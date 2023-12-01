/*
Scenario:
Suppose we have an array of email 
addresses and we want to filter out only 
those that follow a simple email format pattern.

Example:
*/

let emails: string[] = [
  "alice@example.com",
  "bob@example.org",
  "kade@gmail",
  "carol@example.com",
  "dave@web.net",
  "eve@internet.com",
  "charles@yahoo"
];

// Simple regex pattern for email
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Filter the array
let validEmails = emails.filter(email => emailRegex.test(email));

console.log(validEmails);

// [
//     'alice@example.com',
//     'bob@example.org',
//     'carol@example.com',
//     'dave@web.net',
//     'eve@internet.com'
//   ]

/*

Explanation:
We define an array emails containing various strings.

We create a regex emailRegex to match a simple email 
pattern. This regex checks for a sequence of characters 
(including dots, underscores, etc.) followed by an @
symbol, then more characters, a dot, and finally a 
domain suffix (like .com). 

This regex is a basic example and might not cover 
all valid email formats.

We use the .filter() method of the array, 
combined with the .test() method of the RegExp 
object, to filter out only those strings in the array 
that match the email pattern.

The result is stored in validEmails, which will 
contain only those strings from emails that look 
like valid email addresses according to our regex.

This example demonstrates how you can use 
regular expressions to filter and process 
arrays of strings based on specific patterns. 

Keep in mind that this email regex is quite 
basic and might not be suitable for all email 
validation scenarios in real-world applications.

*/


