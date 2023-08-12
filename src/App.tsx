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
        <div className='app-container'>
            <ExpenseForm />
            <ExpenseTable expenses={expenseList} onDelete={onDelete}/>
        </div>
    );
}

export default App;