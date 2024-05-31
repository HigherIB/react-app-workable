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
                    <option value="all categories">All categories</option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </form>
        </>
    )
}

export default ExpenseSummary