import { AiTwotoneDelete } from 'react-icons/ai';

import { ExpenseItem } from "@common/types";

interface Properties {
    expenses: ExpenseItem[],
    onDelete: (index: number) => void,
}

const ExpenseTable = ( { expenses, onDelete }: Properties ) => {

    return (
        <div className="table-container table-responsive width-full">
            <table className="table table-striped table-bordered rounded-top-3 overflow-hidden">
                <thead className="table-dark">
                    <tr className="table-header">
                        <th className='desktop-only'>Date</th>
                        <th>Title</th>
                        <th className='desktop-only'>Category</th>
                        <th>Amount</th>
                        <th className='text-center'><AiTwotoneDelete size={25}/></th>
                    </tr>
                </thead>
                <tbody>
                { expenses.map((expense, index) => (
                    <tr key={ index }>
                        <td className='desktop-only align-middle'>{ expense.date }</td>
                        <td className='align-middle'>{ expense.title }</td>
                        <td className='desktop-only align-middle'>{ expense.category }</td>
                        <td className='align-middle'>{ expense.amount}</td>
                        <td>
                            <button className="btn btn-dark width-full" onClick={() => onDelete(index)}>Delete</button>
                        </td>
                    </tr>
                )) }
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;