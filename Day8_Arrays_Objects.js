//Arrays uses [] and "quotes",and "commas"
// DAY 8 LESSON LEARNED: LEARNING TO USE ARRAYS AND OBJECTS TO SET UP USER TEST DATA TO MAKE TESTS SCALABLE. USING OBJECT LITERALS TO STORE KEY VALUE PAIRS MAKES IT FASTER TO RUN TEST SCRIPTS, ESPECIALLY WHEN TESTING MULTIPLE ACCOUNTS.


// // let groceryList = ["eggs","bread","milk"]
//     // console.log(groceryList[2])
//     // console.log(groceryList.length)

//     // Automated test
//     let testUser = ['Jane Doe', 'John Doe', 'Admin User'];
//     console.log(testUser);
//     let testPassword = ['Password123','TestPassword231', 'Userpassword'];
//     console.log(testPassword)
// //push - adds an item to the end of your array
// //Unshift - adds an item to the beginning of your array
// //Slice - gives you a subset of your array
// //include - checks to see if some thing exists

// //push - adds an item to the end of your array
//     testUser.push('new_tester');
//     console.log(testUser);


//OBJECTS
//An object stores data as key–value pairs. 

// //Oject Literal
// let contactCard = {
//     fullName:("Alison Bradley"),
//     email: ("alison@job.com"),
// };
//     console.log(contactCard)

// //Access data in two-ways
// console.log(contactCard.fullName);
// console.log(contactCard["email"]);

// //TEST_USER DATA
// let testUser1 = {
//     username: "SallyJ",
//     userPassword: "Password1",
//     email: "SallyJ@job.com",
//     role: "Admin",
//     isActive: "true"
// };
// console.log(testUser1.username);
// console.log(testUser1.email);


//USING NESTED ARRAYS AND OBJECTS FOR TEST CONFIGURATION FOR CROSS-BROWSER TESTING

let testConfig = {
    baseURL: "https://www.testapp.com",
    browsers: ["Chrome", "FireFox", "Edge"],
    credentials: {
        admin: {
            userName: "uAdmin",
            userPassword: "Admin123",
        } // Missing closing curly brace was added here
    }
}; // Missing semicolon was added here

console.log(testConfig.browsers[1]);
console.log(testConfig.credentials.admin.userName);

    




