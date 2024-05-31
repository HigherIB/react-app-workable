const ExpenseForm = () => {
    return (
        <form>
          <label htmlFor="description" className="form-label">Description</label>
          <input 
                id="description"
                type="text"
                className="form-control"
            />
          <label htmlFor="amount" className="form-label">Amount</label>
          <input 
                id="amount"
                type="number"
                className="form-control"
            />
            <label htmlFor="category" className="form-label">Category</label>
            <input 
                id="category"
                type="text"
                className="form-control"
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ExpenseForm