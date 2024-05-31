import React, { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"
import ExpenseSummary from "./expense-tracker/components/ExpenseSummary"


function App(){
  const [expenses, setExpenses] = useState( [
    {id: 1, description: 'aaa', amount: 100, category: 'Groceries'},
    {id: 2, description: 'sss', amount: 100, category: 'Utilities'},
    {id: 3, description: 'kkk', amount: 100, category: 'Groceries'},
    {id: 4, description: 'jjj', amount: 100, category: 'Entertainment'},
    {id: 5, description: 'zzz', amount: 100, category: 'Groceries'},
  ])


  return (
    <div>
      <ExpenseForm />
      <ExpenseSummary />
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}  />
    </div>
  ) 
}

export default App 