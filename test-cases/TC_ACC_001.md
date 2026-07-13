# Test Case: Open New Account

**Test ID:** TC_ACC_001
**Title:** Verify user can open a new account funded from an existing account
**Module:** Account Management

## Preconditions
User is logged in and has at least one existing account with sufficient funds.

## Test Steps
1. Click "Open New Account"
2. Select account type (e.g., Savings)
3. Select an existing account to fund the new account (minimum $500 required)
4. Click Open New Account

## Expected Result
New account is created, confirmation message shown with new account number, and the new account appears in Accounts Overview.

## Actual Result
Matches expected. New savings account #16785 created with $500.00 balance, funded from account #13344.

## Status
Pass
