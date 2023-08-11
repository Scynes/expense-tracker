const ExpenseForm = () => {

    const categories = ['Groceries', 'Utilities', 'Entertainment'];

    return (
        <div>
            <form className="width-full">
                <div className="form-floating mb-3">
                    <input type="text" id="description" className="form-control" />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" id="amount" className="form-control" />
                    <label htmlFor="amount">Amount</label>
                </div>
                <div className="form-floating mb-3">
                    <select id="category" className="form-select">
                        <option value="" selected disabled hidden></option>
                        { categories.map( (category, index) => (
                            <option key={index}>
                                { category }
                            </option>
                        ))}
                    </select>
                    <label htmlFor="category">Category</label>
                </div>
                <button className="btn btn-dark btn-lg w-100" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ExpenseForm;