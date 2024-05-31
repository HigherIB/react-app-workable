const ExpenseForm = () => {
    return (
        <form>
          <label htmlFor="description">Description</label>
          <input 
                id="description"
                type="text"
            />
          <label htmlFor="amount">Amount</label>
          <input 
                id="amount"
                type="number"
            />
            <label htmlFor="category">Category</label>
            <input 
                id="category"
                type="text"
            />
        </form>
    )
}

export default ExpenseForm