import { FieldValues, useForm } from 'react-hook-form';

const ExpenseForm = () => {

    const { register, handleSubmit, getValues } = useForm();

    const categories = ['Groceries', 'Utilities', 'Entertainment'];

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form className="width-full" onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-floating mb-3">
                <input { ...register('description') } type="text" id="description" className="form-control" />
                <label htmlFor="description">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input { ...register('amount') } type="text" id="amount" className="form-control" />
                <label htmlFor="amount">Amount</label>
            </div>
            <div className="form-floating mb-3">
                <select { ...register('category') } id="category" className="form-select" defaultValue={""}>
                    <option value="" disabled hidden />
                    <option value="empty" disabled label="Choose A Category" />
                    { categories.map( (category, index) => (
                        <option key={ index } value={ category }>
                            { category }
                        </option>
                    ))}
                </select>
                <label htmlFor="category">Category</label>
            </div>
            <button className="btn btn-dark btn-lg w-100" type="submit">Submit</button>
        </form>
    );
}

export default ExpenseForm;