/*
=======================================================

** Week 2 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

EXAMPLE:
1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

// 1. Create an object called "me" that describes you with your name, city, and job title.
var me = {
   name:"Christina",
   city: "Seattle",
   jobTitle: "Graphic Designer",
};
console.log("Question 1");


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

var me = {
   name:"Christina",
   city: "Seattle",
   jobTitle: "Graphic Designer",
   family: ["Liz", "Daddy", "John"]
};
console.log("Question 2");


// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city.

var me = {
   name:"Christina",
   city: "Boston",
   jobTitle: "Graphic Designer",
   family: ["Liz", "Daddy", "John"]
};
console.log("Question 3");
console.log(me.city);

var me = {
   10:"Christina",
   1000: "Boston",
   10000: "Graphic Designer",
   100000: ["Liz", "Daddy", "John"]
};
   console.log("Question 3");
   console.log(me["1000"]);

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)

console.log("Question 4");
console.log("Penny's dinner choice is " + invitees.adults[0].dinnerChoice[1]);

// 5. Access Pablo's table number.

console.log("Question 5");
console.log("Pablo's table number is " + invitees.children[1].table);

// 6. Access Lauren's seating specialConsideration.

console.log("Question 6");
console.log("Lauren's special seating request is " + invitees.adults[2].specialConsiderations.seating);

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)

console.log("Question 7");
console.log("Billy's dessert choice is " + invitees.adults[1].dinnerChoice[2]);

// 8. Access Ada's allergies.

console.log("Question 8");
console.log("Ada's allergies " + invitees.children[2].allergies[0]);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Question 9");
console.log("Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + ". " + "She will be eating " + invitees.adults[2].dinnerChoice[1] + " " + "for dinner and has selected " + invitees.adults[2].dinnerChoice[2] + " " + "as her dessert." );

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

var jsWorkshop = new Object();


// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

var jsWorkshop = new Object();
jsWorkshop.classmates = ["Tim" , "John", "Alexis", "Kate","Joshua"];

// 12. Get the length of the fourth classmate's name.

console.log("Question 12");
console.log(jsWorkshop.classmates[3].length);

// 13. Clear the classmates value.

console.log("Question 13");
console.log(jsWorkshop.classmates.length=0);


// ADVANCED TRACK
// 14. Create an empty object called "books".

var books = new Object();
var books = {}

// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

var books = { ISBN123456789: {
                          title: "Dark Forest",
                          author:"T Walker",
                          pages: 150
                        },
             ISBN987654321:  {
                          title: "Black Genie",
                          author:"John Wayward",
                          pages: 300
                        },
             ISBN246810124:  {
                          title: "Tidal Sands",
                          author:"Fox Garvey",
                          pages: 450
                        },
              }
// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }

// 16. Access the author of the first book.

console.log("Question 15");
console.log(books.ISBN123456789.author);

// 17. Get the length of the author the the third book.

console.log("Question 1l");
console.log(books.ISBN246810124.author.length);

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

var books = { ISBN123456789: {
                          title: "Dark Forest",
                          author:"T Walker",
                          pages: 150
                          dateRead: 1988
                        },
             ISBN987654321:  {
                          title: "Black Genie",
                          author:"John Wayward",
                          pages: 300
                          dateRead:2001
                        },
             ISBN246810124:  {
                          title: "Tidal Sands",
                          author:"Fox Garvey",
                          pages: 450
                          dateRead: 1996
                        },
              }


// 19. Remove the second book from the books object.

console.log("Question 19");
delete books.ISBN987654321;
console.log(books);

// 20. Explain, in your own words, the difference between Literal Notation and Constructor Notation.

console.log("Question 20");
console.log("From my research Literal Notation is best to use if the objects are simple. Constructor Notation is better if you are going to add a function to the object.");
