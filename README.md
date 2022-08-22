## This is telnyx.com test project ver. 1.0
1. Documentation for project (test cases) is located in the root directory in the "Docs" folder;
2. To run auto tests manually on local machine with Cypress test runner make such steps:
- type ***"npm run cypress:open"*** in termainal and press ***enter***;
- choose ***"E2E testing"*** and after ***"Chrome"***;
- click ***"Start E2E testing in Chrome"***;
- click on ***"telnyx.cy.js"*** in opened window with specs and wait for auto test execution;
3. To run auto tests manually on local machine with command line make such steps:
- type ***"npm run cy:run"*** and prees ***enter***, wait for auto test execution.
4. Project included .yml file, which run auto tests from redmine project in GitHub actions after every push on main branch of repository.
