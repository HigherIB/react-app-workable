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

  const [selectedCategory, setSelectedCategory] = useState('');
  const visibleCategory = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

  return (
    <div>
      <ExpenseForm />
      <ExpenseSummary onSelectCategory={ category => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleCategory} onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}  />
    </div>
  ) 
}

export default App 