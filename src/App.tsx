import 'bootstrap/dist/css/bootstrap.css';
import '@assets/index.css';

import { useState } from 'react';

import { ExpenseItem } from '@common/types';

import ExpenseForm from '@components/ExpenseForm';
import ExpenseTable from '@components/ExpenseTable';

const App = () => {

    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([]);

    const onDelete = (index: number) => console.log('Attempted to delete index:', index)

    return (
        <>
        <ExpenseForm />
        <ExpenseTable expenses={expenseList} onDelete={onDelete}/>
        </>
    );
}

export default App;