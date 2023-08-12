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
            date: '01/02/2023',
            amount: 234234,
            title: 'woah',
            category: 'Groceries'
        },
        {
            date: '01/02/2023',
            amount: 234234,
            title: 'woah',
            category: 'Groceries'
        }
    ]);

    /**
     * Deletes an ExpenseItem from the ExpenseList based on index position.
     * 
     * @param index The index of the entry to remove.
     */
    const onDelete = (index: number) => {
        
        // Immer producer the modifying the existing state
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