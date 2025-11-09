//Day8_testdata ARRAYS and OBJECTS - Noticed roughly a 10-15% improvement in structuring code and a about a 40% decrease in errors. Outcome: Improvements = writing faster scripts and trouble-shooting errors in code.
//After fixing a handful of errors, code run was successful on the first attempt!
//Required for tests: Test Data: test multiple users 
// Test Config: browser types, and application configurations
// Storing test data as variables using Arrays to list data
console.log("DAY8_TESTDATA_ARRAYS_AND_OJECTS")
const baseURL = 'http://shopapp.com';
let credentials = 'users, '
let testUsers = ["qaUser1", "qaUser2", "adminUser"];
let browsers = ["chromium", "firefox", "webkit"];
let environments = ["staging", "uat", "production"];
console.log(testUsers)

// let testData = ["testUsers", "browsers", "environments"];
// console.log(testData)

// //2.
// // .Push - Add item at the end of an Array using .push method.
// //.unshift
// //.slice:
// //.includes:
testUsers.push('guestUser');
browsers.push('safari');
environments.push('dev');
console.log(testUsers)
console.log(browsers)
console.log(environments)
    

//Finding the lenth of an array  : There are 4 variables stored in each array for testUsers, browsers, and environments
console.log(testUsers.length)
console.log(browsers.length)
console.log(environments.length)

// //Indices - All indices start at. A good edge case is to test the index minus 1 (-1) as many bugs can be found in that boundary range
// console.log(testUsers [0])
// console.log(browsers [0])
// console.log(environments[0])

console.log["Browsers:", "chromium", "firefox", "webkit"];
console.log["Environments:", "staging", "uat", "production"];

// // // 3.Combine Arrays into One Object
// let testData = {
//     testUsers: 'testUsers',
//     browsers: 'browsers', 
//     environments: 'environments'
// };
    // console.log("TestData:", testData)

    let users = ["user1", "user2", "user3","user4"]

let user1 = {
    userName: 'Maria',
    password: 'qa1Pass123',
    role: 'tester1',
    isActive: true,
};
let user2 = {
    userName: 'John',
    password: 'qa2Pass123',
    role: 'tester2',
    isActive: true,
};

let user3 = {
    userName: 'Kenzie',
    password: 'admin123',
    role: 'admin',
    isActive: true,
};
let user4 = {
    userName: 'Robert',
    password: 'guest123',
    role: 'tempQA',
    isActive: false,
};

// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)

// console.log(user2.role)
// console.log(user3.role)
// console.log(user4.role)

console.log(("User1:"), user1.userName)
console.log(("Role:"), user1.role)
console.log(("Status:"), user1.isActive)


console.log(("User2:"), user2.userName)
console.log(("Role:"), user2.role)
console.log(("Status:"), user2.isActive)

console.log(("User3:"), user3.userName)
console.log(("Role:"), user3.role)
console.log(("Status:"), user3.isActive)

console.log(("User4:"), user4.userName)
console.log(("Role:"), user4.role)
console.log(("Status:"), user4.isActive);

let testConfig = {   //Object
    baseURL: 'https://shopapp.com',  //String
    environment: ["chromium", "firefox", "webkit", "safari"], //Array
    credentials: {
        admin: {userName: 'adminUser', password: 'admin123'}, //Nested object of key value pairs within an object (testConfig)
        standardUsers: ['testuser1', 'testuser2', 'guestuser3'],
    },
};
console.log(testConfig.credentials.admin);
console.log(testConfig.credentials.standardUsers);

console.log(testConfig.environment [1])
console.log(testConfig.credentials.admin.userName)
console.log(testConfig.credentials.standardUsers[0])

//Bonus

if (testConfig.environment.includes("safari")) 
  console.log("Safari testing enabled!")