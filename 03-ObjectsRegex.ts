interface Person {
    name: string;
    phoneNumber: string;
  }
  
  let arrayOfObjects: Person[] = [
    { name: "Alice", phoneNumber: "123-456-7890" },
    { name: "Bob", phoneNumber: "987-654-3210" },
    { name: "Dale", phoneNumber: "unknown"},
    { name: "Jennifer", phoneNumber: "414-555-8800"}
    // ... more objects
  ];
  
  let regex = /\d{3}-\d{3}-\d{4}/; // Regex for a phone number pattern
  let filteredObjects = arrayOfObjects.filter(obj => regex.test(obj.phoneNumber));
  
  console.log(filteredObjects);

  /*

  [
  { name: 'Alice', phoneNumber: '123-456-7890' },
  { name: 'Bob', phoneNumber: '987-654-3210' },
  { name: 'Jennifer', phoneNumber: '414-555-8800' }
]

  /*

/*
An interface Person is defined with two properties: 
name and phoneNumber, both of which are of type string.

The arrayOfObjects is typed as an array of 
Person objects, ensuring that each object in 
the array conforms to the structure defined by 
the Person interface.

The filter method is used as before, 
with the regex testing the phoneNumber property 
of each object.

This code will filter the arrayOfObjects to 
include only those objects where the phoneNumber 
property matches the specified regex pattern. 

*/