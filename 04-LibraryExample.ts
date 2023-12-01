/*
Example Scenario:

Imagine we have a nested array of objects representing a book library. 
Each book object has a title and an array of comments, and each comment is a string. 

We want to use regex to filter books based on a pattern 
in their titles and also process the comments to extract certain information.
*/
interface BookComment {
    user: string;
    comment: string;
  }
  
  interface Book {
    title: string;
    comments: BookComment[];
  }
  

// Sample nested array of objects
let library: Book[] = [
  {
    title: "Introduction to TypeScript",
    comments: [
      { user: "Alice", comment: "Loved the chapter on interfaces!" },
      { user: "Bob", comment: "The section on types was quite challenging." },
    ],
  },
  {
    title: "Mastering JavaScript",
    comments: [
      { user: "Charlie", comment: "JavaScript basics are well explained." },
      { user: "Dave", comment: "Excellent examples on closures." },
    ],
  },
  {
    title: "Summa Theologica",
    comments: [
      { user: "James", comment: "Excellent book!" },
      { user: "Dan", comment: "Loved reading through this book." },
      { user: "Jennifer", comment: "I had a great time reading this type of book"},
    ],
  },
  {
    title: "JavaScript in depth",
    comments: [
      { user: "Charlie", comment: "JavaScript basics are well explained." },
      { user: "Timothy", comment: "Excellent examples on closures." },
    ],
  },
  {
    title: "Learn TypeScript",
    comments: [
      { user: "Kara", comment: "TypeScript interfaces are well explained." },
      { user: "Dave", comment: "Excellent examples on types." },
    ],
  },
  // ... more books
];

// Regex to filter books by title pattern
let titleRegex = /TypeScript/;
let filteredLibrary = library.filter(book => titleRegex.test(book.title));

// Regex to extract parts of comments
let commentRegex = /(\w+) on (\w+)/;

// Process comments in the filtered library
filteredLibrary.forEach(book => {
  book.comments.forEach(comment => {
    let matches = comment.comment.match(commentRegex);
    if (matches) {
      console.log(`User: ${comment.user}, Topic: ${matches[1]}, Keyword: ${matches[2]}`);
    }
  });
});

/*

Explanation:
We define two interfaces: Comment and Book. 
Each Book has a title and an array of Comment objects.

Our sample library is an array of Book objects.

We use titleRegex to filter books by a pattern in their title.
In this case, we're looking for books related to TypeScript.

Then, we use commentRegex to extract specific information
from the comments. This regex is designed to match phrases
like "X on Y" and capture X and Y.

Finally, we iterate over the filtered books and their comments,
apply the commentRegex, and log the extracted information.

In this example, regex is used to perform pattern matching within the
string properties of the objects. It demonstrates how regex can be a
powerful tool when combined with JavaScript's array and
object manipulation capabilities, even though it doesn't 
directly interact with the non-string elements of the data structure.

*/





