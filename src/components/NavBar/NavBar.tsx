import { GrReactjs } from 'react-icons/gr';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a href="" className="navbar-brand flex">
                    <div className='spin-icon me-4'>
                        <GrReactjs size={40} />
                    </div>
                    <h1 className='mb-0'>React Track</h1>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;