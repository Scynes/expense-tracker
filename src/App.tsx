import 'bootstrap/dist/css/bootstrap.css';
import '@assets/index.css';

import { useState } from 'react';

import ExpenseForm from '@components/ExpenseForm';
import ExpenseTable from '@components/ExpenseTable';

const App = () => {

    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([
        {
            date: 'test',
            description: 'dasd',
            category: 'something',
            amount: 2342
        }
    ]);

    console.log(expenseList)

    return (
        <>
        <ExpenseForm />
        <ExpenseTable expenseList={expenseList} />
        </>
    );
}

export default App;