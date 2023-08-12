import 'bootstrap/dist/css/bootstrap.css';
import '@assets/index.css';

import { useState } from 'react';

import { ExpenseItem } from '@common/types';

import ExpenseForm from '@components/ExpenseForm';
import ExpenseTable from '@components/ExpenseTable';
import { produce } from 'immer';

const App = () => {

    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([
        {
            date: 'test 1',
            amount: 234234,
            description: 'woah',
            category: 'Groceries'
        },
        {
            date: 'test 2',
            amount: 234234,
            description: 'woah',
            category: 'Groceries'
        }
    ]);

    const onDelete = (index: number) => {
        
        setExpenseList(previous => produce(previous, draft => {
            draft.splice(index, 1);
        }));
    }

    return (
        <>
        <ExpenseForm />
        <ExpenseTable expenses={expenseList} onDelete={onDelete}/>
        </>
    );
}

export default App;