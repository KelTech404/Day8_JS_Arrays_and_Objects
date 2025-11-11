//Day_8 Coding_Challenge
//1.Store multiple test users with active/inactive status
//2.Store environment details for different test stages.
//3.Display only active users and confirm which test environment is currently selected.
//4.Use arrays, objects, loops, and conditionals — skills from Days 1–8.

// 1.DEFINE TEST USERS
const testUsers = [
  {
    username: "qa_01tester1",
    userRole: "tester",
    isActive: true
  },
  {
    username: "qa_tester2",
    userRole: "uatTester",
    isActive: false
  },
  {
    username: "adminUser",
    userRole: "admin",
    isActive: true
  }
];

let testdata = { 
    testUsers: ['qa_tester1','t' ]
}


const baseURL = 'https://www.testshop.app'
let browsers  = ['chromium','safari','edge']
let environment = [`uatEnv`, `qaEnv`, `production`]
let defaultEnv = `qaEnv`

    
//2. Create a Test Configuration Object
 let testConfig = {
     baseURL: ['https://www.testshop.app'],
     browsers: ['chromium','safari','edge'],
     environment: [`staging`, `uat`, `production`],
     defaultEnv: `production`,
};
console.log(testConfig.browsers)

//3.forEach Loop to log active users
  testUsers.forEach((user) => {                         
   if (user.isActive === true) {                       
     console.log("Active User:", user.username,"Role:", user.userRole);
   }
 });


//4: Conditional Logic

if (testConfig.defaultEnv === 'production') {
console.log("⚠️ You are running tests in production!")
} else {
console.log("✅ Safe to run tests in staging or UAT environment.")
}

// Step 5: Loop through browsers
console.log("=== BROWSER TESTING ===");
for (let browser of testConfig.browsers) {
  console.log(`Running test on: ${browser}`);
}
// Step 6: Run Summary
const testConfigSummary = {
    configBaseURL: testConfig.baseURL,
    configEnv: testConfig.environment,
    activeUsers: testUsers.filter(u => u.isActive).map(u => u.username),
    };
console.log("===TEST SUMMARY===", testConfigSummary)


