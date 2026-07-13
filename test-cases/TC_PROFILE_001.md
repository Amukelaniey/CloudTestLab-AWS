# Test Case: Update Contact Info

**Test ID:** TC_PROFILE_001
**Title:** Verify user can update profile contact information
**Module:** Profile Management

## Preconditions
User is logged in.

## Test Steps
1. Click "Update Contact Info"
2. Modify one or more fields (e.g., State, Phone #)
3. Click Update

## Expected Result
Profile updates successfully with correct values reflected, confirmation message shown.

## Actual Result
Confirmation shown: "Your updated address and phone number have been added to the system." However, State field displayed as "CATamilNadu" - appears to be two values concatenated instead of one clean value.

## Status
Fail (confirmation succeeded, but data displayed incorrectly)
