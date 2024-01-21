import asyncHandler from "../Utils/asyncHandler";
import incomeService from "./Service.js"

// Adding Income
const addIncome = asyncHandler ( async(req , res) => {
    const income = req.body;
    const result = await incomeService.addIncome(income)
    res.json({result})

})

// Fetching Income
const fecthIncome = asyncHandler (async (req , res) => {
    const myIncome = await incomeService.getIncome()
    res.json({myIncome})
})

// Deleting Income
const deleteIncome = asyncHandler( async (req , res) => {
    const id = req.params.incomeId;
    const removeInc = await incomeService.removeIncome(id)
    res.json({removeInc})
})

export default {addIncome , fecthIncome , deleteIncome}