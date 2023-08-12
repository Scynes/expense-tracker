import { AiTwotoneDelete } from 'react-icons/ai';

import { ExpenseItem } from "@common/types";

interface Properties {
    expenses: ExpenseItem[],
    onDelete: (index: number) => void,
}

const ExpenseTable = ( { expenses, onDelete }: Properties ) => {

    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th><AiTwotoneDelete size={25}/></th>
                </tr>
            </thead>
            <tbody>
            { expenses.map((expense, index) => (
                <tr key={ index }>
                    <td>{ expense.date }</td>
                    <td>{ expense.description }</td>
                    <td>{ expense.category }</td>
                    <td>{ expense.amount}</td>
                    <td>
                        <button className="btn btn-dark" onClick={() => onDelete(index)}>Delete</button>
                    </td>
                </tr>
            )) }
            </tbody>
        </table>
    );
}

export default ExpenseTable;