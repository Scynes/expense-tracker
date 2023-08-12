import 'bootstrap/dist/css/bootstrap.css';
import '@assets/index.css';
import ExpenseForm from '@components/ExpenseForm';
import ExpenseTable from '@components/ExpenseTable';

const App = () => {
    return (
        <>
        <ExpenseForm />
        <ExpenseTable />
        </>
    );
}

export default App;