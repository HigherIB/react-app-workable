const ExpenseSummary = () => {
    return (
        <>
            <form className="mt-5">
                <select 
                    name="categories" 
                    id="category"
                    className="form-select"
                    >
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </form>
        </>
    )
}

export default ExpenseSummary