import { ExpenseItem } from "@common/types";

interface Properties {
    expenses: ExpenseItem[],
    onDelete: (index: number) => void,
}

const ExpenseTable = ( { expenses }: Properties ) => {

    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            { expenses.map((expense, index) => (
                <tr key={ index }>
                    <td>{ expense.date }</td>
                    <td>{ expense.description }</td>
                    <td>{ expense.category }</td>
                    <td>{ expense.amount}</td>
                </tr>
            )) }
            </tbody>
        </table>
    );
}

export default ExpenseTable;