interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseSummary = ({ onSelectCategory }: Props) => {
    return (
        <>
            <form className="mt-5">
                <select 
                    name="categories" 
                    id="category"
                    className="form-select"
                    onChange={(e) => onSelectCategory(e.target.value)}
                    >
                    <option value="">All categories</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </form>
        </>
    )
}

export default ExpenseSummary