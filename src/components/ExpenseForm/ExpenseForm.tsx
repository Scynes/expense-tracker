import { useForm } from 'react-hook-form';
import { ExpenseItem } from '@common/types';

interface Properties {
    onSubmit: ([]: ExpenseItem) => void,
}

const ExpenseForm = ({ onSubmit }: Properties) => {

    const { register, handleSubmit, formState: { isValid } } = useForm<ExpenseItem>();

    const categories = ['Groceries', 'Utilities', 'Entertainment'];

    return (
        <form className="" onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-floating mb-3">
                <input { ...register('title', { required: 'Please enter' }) } type="text" id="title" className="form-control" />
                <label htmlFor="title">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input { ...register('amount', { required: true }) } type="text" id="amount" className="form-control" />
                <label htmlFor="amount">Amount</label>
            </div>
            <div className="form-floating mb-3">
                <select { ...register('category', { required: true }) } id="category" className="form-select" defaultValue={""}>
                    <option value="" disabled hidden />
                    <option value="empty" disabled label="Choose a Category" />
                    { categories.map( (category, index) => (
                        <option key={ index } value={ category }>
                            { category }
                        </option>
                    ))}
                </select>
                <label htmlFor="category">Category</label>
            </div>
            <div className="form-floating mb-3">
                <input { ...register('date', { required: true }) } type="date" id="date" className="form-control" />
                <label htmlFor="date">Choose a Date</label>
            </div>
            <button className="mb-3 btn btn-dark btn-lg w-100" type="submit" disabled={ !isValid }>Submit</button>
            { !isValid && 
                <div className="alert alert-primary" role='alert'>
                    Please complete the above fields.
                </div>
            }
        </form>
    );
}

export default ExpenseForm;