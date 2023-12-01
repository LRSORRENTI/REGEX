# Intro to Regular Expressions

## The Basics 

**Regular Expressions, or Regex for short, are special text strings which are used to find and match patterns within text.  Regex syntax is almost uniform across all programming languages, so once you learn the basics you can utilize it in any language (with some minor tweaks).**

### A Simple Problem: 

**Imagine we needed to write code that can determine whether a given string contained a 24 hour time within it**

> "Let's meet at 11:45"

or 

> "I ran a 3:30 marathon"

**How would we go about checking for the presence of a time in the string and extracting it?  We could do it manually, using loops and a bunch of complex logic, but it's not that easy! It's not as simple for checking for a pattern of two numbers and then a colon and then two more numbers.  We need to make sure the times are actually valid rather than any two digit numbers.  What if we wanted to also allow the option to add in seconds?**