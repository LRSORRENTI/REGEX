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