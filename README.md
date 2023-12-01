# Intro to Regular Expressions

## The Basics 

**Regular Expressions, or Regex for short, are special text strings which are used to find and match patterns within text.  Regex syntax is almost uniform across all programming languages, so once you learn the basics you can utilize it in any language (with some minor tweaks).**

### A Simple Problem: 

**Imagine we needed to write code that can determine whether a given string contained a 24 hour time within it**

> "Let's meet at 11:45"

or 

> "I ran a 03:30 marathon"

**How would we go about checking for the presence of a time in the string and extracting it?  We could do it manually, using loops and a bunch of complex logic, but it's not that easy! It's not as simple for checking for a pattern of two numbers and then a colon and then two more numbers.  We need to make sure the times are actually valid rather than any two digit numbers.  What if we wanted to also allow the option to add in seconds?**

> "I ran a 03:30:19 marathon"

**This could be frustrating to write but fortunately we can use REGEX!**

### When are regular expressions useful? 

**Regular Expressions are commonly used for validating data, performing advanced searches, replacing/updating text, and a whole bunch more.  Let's focus on validating user data for now.   Regex are incredibly useful when you need to verify that information is formatted correctly.  Here are a few of the extremely common formats we might need data to follow:**

- Email Addresses 

- Phone Numbers (414) 555-3455 or 414-555-3455 or 414 555 3455 or 4145553455 

- Strong Passwords - At least 6 chars, 1 or more uppercase letter, 1 or more lowercase letter, 1 or more number, and 1 or more special character

- Usernames - 3 to 16 chars, must only consist of numbers, letters and underscores

**Trying to verify these patterns without the use of Regular Expressions is a nightmare 😭.  It's possible, but it means writing tons of loops and complex logic.**

### Testing and playing with REGEX:

```
I highly recommend using an online editor like https://regexr.com to test out your Regular Expressions. I'll be using it throughout this video.
```


### REGEX Syntax

### Standard REGEX format

**When we write regular expressions in most programming languages we wrap them in single forward slashes:**

```
/ your regex goes inbetween forward slashes /
```

```
let array = ["414-555-3212", "123-456-7890", "not a phone number", "999-888-7777"];

let phoneNumbers = array.filter(item => /\b\d{3}-\d{3}-\d{4}\b/.test(item));
```

### Putting it all together:

**The goal is to create a regular expression that matches a 24-hour time format. Valid times can include hours and minutes, and optionally seconds. Hours can be with or without a leading zero (e.g., 02:45 or 2:45). The regex should ensure that the times are valid (e.g., 25:80 should not be considered valid).**

## Regular Expression Explanation

**([01]?[0-9]|2[0-3]): This part matches the hour. It allows for hours 00-19 ([01]?[0-9]) and 20-23 (2[0-3]).**
**:([0-5][0-9]): This matches the minutes, ensuring they are in the range 00-59.**

**(?::([0-5][0-9]))?: This is an optional non-capturing group for seconds.**

**It matches : followed by a two-digit number in the range 00-59.**

**The ? at the end makes this group optional.**

**\b at the beginning and end ensures the match occurs at word boundaries, preventing the regex from matching invalid times like 55:45.**

```TypeScript Example
// Here's how you can use this regex in TypeScript:

const timeRegex = /\b([01]?[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?\b/;

// Example array of strings
let times: string[] = ["23:50:32", "14:00", "23:00", "02:45", "2:45", "9:30:01", "19:30", "25:80", "invalid"];

// Filtering the array to get only valid times
let validTimes = times.filter(time => timeRegex.test(time));

console.log(validTimes); // This will log only the valid times

```
**In this TypeScript code, an array of strings (times) is filtered using the regular expression timeRegex**

**The .filter() method tests each string against the regex, and only those that match (valid times) are included in the validTimes array. The resulting array is then logged to the console.**