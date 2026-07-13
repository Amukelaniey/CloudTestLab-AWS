# Test Case: User Registration

**Test ID:** TC_REG_001
**Title:** Verify user can register a new account with valid details
**Module:** Registration

## Preconditions
User is on the ParaBank homepage and is not logged in.

## Test Steps
1. Click "Register"
2. Fill in all required fields with valid test data (First Name, Last Name, Address, City, State, Zip Code, Phone #, SSN, Username, Password, Confirm Password)
3. Click the Register/Submit button

## Expected Result
Account is created successfully, user is automatically logged in, and the Account Services menu is displayed.

## Actual Result
Matches expected result. Message displayed: "Your account was created successfully. You are now logged in."

## Status
Pass

## Notes
Use clearly fake data (not real personal details) when testing on this public demo site.
