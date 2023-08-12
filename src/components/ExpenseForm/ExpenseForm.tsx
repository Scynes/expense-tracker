import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ExpenseItem } from '@common/types';

import { BsExclamationTriangleFill, BsFillInfoCircleFill } from 'react-icons/bs';

interface Properties {
    onSubmit: ([]: ExpenseItem) => void,
}

const ExpenseForm = ({ onSubmit }: Properties) => {

    const [ submitted, setSubmitted ] = useState(false);

    const { register, reset, handleSubmit, formState: { isValid } } = useForm<ExpenseItem>();

    const categories = ['Groceries', 'Utilities', 'Entertainment'];

    const handleFormSubmit = (data: ExpenseItem) => {
        // Submit the new ExpenseItem to the parent component
        onSubmit(data);
        // Set the submission state to true to flag the alert rendering
        setSubmitted(true);
        // Set a timeout for removal of the submission alert with state change
        setTimeout(() => setSubmitted(false), 5000);
        // Reset the form input
        reset();
    }

    return (
        <form className="" onSubmit={ handleSubmit(handleFormSubmit) }>
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
            
            { submitted &&
                <div className="alert alert-success d-flex align-items-center gap-3" role='alert'>
                    <BsFillInfoCircleFill />
                    <div>
                        Your expense item has been added to the tracker!
                    </div>
                </div>
            }
            { !isValid && 
                <div className="alert alert-primary d-flex align-items-center gap-3" role='alert'>
                    <BsExclamationTriangleFill />
                    <div>
                        Please complete the above fields.
                    </div>
                </div>
            }
        </form>
    );
}

export default ExpenseForm;