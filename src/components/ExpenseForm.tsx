
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    description: z.string().min(3, {message: 'Description must be atleast 3 characters'}),
    amount: z.number({ invalid_type_error: 'Amount is required' }).min(1, {message: 'Amount is required'}),
    category: z.string({ invalid_type_error: 'Category is required' }).min(3, {message: 'Category is required'})
})

type FormData = z.infer<typeof schema>

const ExpenseForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })
    const onSubmit = (data : FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3">
             <label htmlFor="description" className="form-label">Description</label>
              <input
                    { ...register('description') } 
                    id="description"
                    type="text"
                    className="form-control"
                />
                { errors.description && (
                    <p className="text-danger">{ errors.description.message }</p>
                ) }
         </div>
         <div className="mb-3">
             <label htmlFor="amount" className="form-label">Amount</label>
              <input
                    { ...register('amount') }
                    id="amount"
                    type="number"
                    className="form-control"
                />
                { errors.amount && (
                    <p className="text-danger">{ errors.amount.message }</p>
                ) }
         </div>
         <div className="mb-3">
             <label htmlFor="category" className="form-label">Category</label>
                <select
                    { ...register('category') }
                    name="categories" 
                    id="category"
                    className="form-select" 
                >
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                { errors.category && (
                    <p className="text-danger">{ errors.category.message }</p>
                ) }
         </div>
         <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    )
}

export default ExpenseForm