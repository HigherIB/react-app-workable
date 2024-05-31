
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    descrption: z.string().min(3, {message: 'Description must be atleast 3 characters'}),
    amount: z.number({ invalid_type_error: 'Amount is required' }).min(1),
    category: z.string().min(3)
})


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
            <select 
                name="categories" 
                id="category"
                className="form-select" 
            >
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
            </select>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    )
}

export default ExpenseForm