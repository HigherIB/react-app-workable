
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories  from "../categories";
import errorMap from "zod/lib/locales/en";
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES } from "react";

const schema = z.object({
    description: z.string().min(3, {message: 'Description must be atleast 3 characters'}),
    amount: z.number({ invalid_type_error: 'Amount is required' }).min(3, {message: 'Amount is required'}),
    category: z.enum(categories, { errorMap: () => ({ message: 'Category is required' }) })
})

type FormData = z.infer<typeof schema>

interface Props {
    onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })
    // const onSubmit = (data : FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(data => {  onSubmit(data);
            reset();
        })}>
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
                    { ...register('amount', { valueAsNumber: true }) }
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
                    <option value=""></option>
                    { categories.map(category => <option key={category} value={category}>{category}</option>) }
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