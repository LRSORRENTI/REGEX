let array: Array<string> = ["414-555-3212", "123-456-7890",
             "not a phone number", "999-888-7777"];

let phoneNumbers: string[] = array.filter(item => /\b\d{3}-\d{3}-\d{4}\b/.test(item));

console.log(phoneNumbers);

// [ '414-555-3212', '123-456-7890', '999-888-7777' ]

console.log(!phoneNumbers)

/*

Using regular expressions (regex) for 
filtering data like phone numbers in a JavaScript 
array has its own set of benefits and downsides 
compared to using other array methods or loops. 

Here's a breakdown:

Benefits:
- Conciseness and Readability: Regex allows for a very 
  concise and readable way to describe complex patterns. 
  This can make your code more compact and easier 
  to understand, provided that the reader is familiar 
  with regex syntax.

- Powerful Pattern Matching: Regex is incredibly powerful 
  for string pattern matching. It can easily handle 
  patterns that would be complex and lengthy to 
  implement with standard loop and conditional logic.

- Flexibility: Regex can be easily adjusted to 
  accommodate variations in the pattern. For instance, 
  if the phone number format changes slightly or if you 
  need to match different formats, adjusting the 
  regex might be simpler than rewriting loop-based logic.

Efficiency in Code: When using .filter() 
with a regex, the operation can be efficiently 
written in a single line of code, which may be 
more performant than a manually written loop, 
especially for simple pattern matching.

Downsides:

Readability for Non-Experts:

For those not familiar 
with regex, it can be cryptic and hard to read or debug. 
This can make maintaining the code difficult if the 
team is not comfortable with regex.

Limited Error Handling: 

With regex, you don't get 
much control over error handling. In contrast, using 
loops or other array methods allows you to add more c
omplex logic and error handling.

Performance Issues for Complex Patterns: 

While regex is efficient for simple patterns,
complex regex patterns can sometimes be slower 
and less efficient than a well-optimized loop or 
other array methods.

Over-matching or Under-matching: 

If the regex is not precisely crafted, it
might match strings that it shouldn't (over-matching) 
or fail to match strings it should (under-matching). 
This issue is particularly prevalent in more complex 
patterns.

Maintenance: 

Regex can be difficult to maintain, 
especially if the patterns become complex or if they 
need to be updated frequently to match new requirements.

In conclusion, the choice between using regex 
and other array methods or loops depends on the 
specific requirements of your task, the complexity 
of the pattern you're trying to match, 
the performance considerations, and the 
familiarity of your team with regex syntax and concepts.
*/