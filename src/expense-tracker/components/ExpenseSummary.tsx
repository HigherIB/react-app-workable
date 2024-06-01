import categories from "../categories";

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
                    { categories.map(category => <option key={category} value={category}>{category}</option>) }
                </select>
            </form>
        </>
    )
}

export default ExpenseSummary