const leoName = "Leo Musvaire";
const leoSurname = "Smith";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line

const leo = {
  name: leoName + " " + leoSurname,
  balance: leoBalance,
  accessId: "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    "postal-code": leoPostal
  }
};

const sarah = {
  name: sarahName + " " + sarahSurname,
  age: 62,
  accessId: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  balance: sarahBalance,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    "postal-code": sarahPostal
  }
};

console.log(leo, leo.address["postal-code"]);
console.log(sarah, sarah.address["postal-code"]);

// In the first exercise, I identified the syntax errors by looking for missing semicolons, incorrect variable names, and undefined objects. Once I fixed the syntax errors, I checked the output to ensure that it matched the expected output.

// In the second exercise, I identified the missing equal signs in the object literals and the duplicated variable names. I also noted that some of the properties used hyphens instead of underscores, which caused an error. Once I fixed these errors, I checked the output to ensure that the objects were created correctly and could be logged to the console.
