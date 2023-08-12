import 'bootstrap/dist/css/bootstrap.css';
import '@assets/index.css';

import { useState } from 'react';

import ExpenseForm from '@components/ExpenseForm';
import ExpenseTable from '@components/ExpenseTable';

interface ExpenseItem {
    date: string,
    description: string,
    category: string,
    amount: number
}

const App = () => {

    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([]);

    return (
        <>
        <ExpenseForm />
        <ExpenseTable />
        </>
    );
}

export default App;