import 'bootstrap/dist/css/bootstrap.css';
import '@assets/index.css';

import { useState } from 'react';
import { produce } from 'immer';
import { ExpenseItem } from '@common/types';

import ExpenseForm from '@components/ExpenseForm';
import ExpenseTable from '@components/ExpenseTable';

const App = () => {

    const [ expenseList, setExpenseList ] = useState<ExpenseItem[]>([]);

    /**
     * Adds a new ExpenseItem entry to the expenseList and updates the state.
     * 
     * @param data 
     */
    const onSubmit = (data: ExpenseItem) => {

        // Immer producer for modifying the existing state with an addition
        setExpenseList(previous => produce(previous, draft => {
            draft.push(data);
        }));
    }

    /**
     * Deletes an ExpenseItem from the ExpenseList based on index position.
     * 
     * @param index The index of the entry to remove.
     */
    const onDelete = (index: number) => {
        
        // Immer producer for modifying the existing state with a deletion
        setExpenseList(previous => produce(previous, draft => {
            draft.splice(index, 1);
        }));
    }

    return (
        <div className='app-container'>
            <ExpenseForm onSubmit={onSubmit}/>
            <ExpenseTable expenses={expenseList} onDelete={onDelete}/>
        </div>
    );
}

export default App;