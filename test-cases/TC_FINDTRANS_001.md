# Test Case: Find Transactions by Amount

**Test ID:** TC_FINDTRANS_001
**Title:** Verify user can find a transaction by amount
**Module:** Find Transactions

## Preconditions
User is logged in and has at least one transaction on the selected account.

## Test Steps
1. Click "Find Transactions"
2. Select an account
3. Enter an amount that matches an existing transaction
4. Click "Find Transactions" (Find by Amount)

## Expected Result
The matching transaction is displayed with correct date, description, and debit/credit amount.

## Actual Result
Result table displayed "NaN-NaN-NaN undefined" instead of the actual transaction details. No valid date, description, or amount shown.

## Status
Fail
