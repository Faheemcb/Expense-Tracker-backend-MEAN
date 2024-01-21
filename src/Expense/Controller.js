import asyncHandler from "../Utils/asyncHandler";
import expenseService from "./Service.js"

// Adding Expenses
const addExpense = asyncHandler ( async (req , res) => {
    const expense = req.body;
    const result = await expenseService.addExpenses(expense)
    res.json({result})

})

// Fetching Expense
const fetchExpense = asyncHandler (async (req , res) => {
    const myExpense = await expenseService.getExpenses()
    res.json({myExpense})
})

// Deleting Expense
const deleteExpense = asyncHandler( async (req , res) => {
    const id = req.params.expenseId;
    const removeExp = await expenseService.removeExpense(id)
    res.json({removeExp})
})

export default {addExpense , fetchExpense , deleteExpense}