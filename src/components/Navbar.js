import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import logo from './images/Logo.png'; 

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className="navbar-logo" src={logo} />
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            <Link to="/category/desayuno" className="nav-link">Desayuno</Link>
                            <Link to="/category/almuerzo" className="nav-link">Almuerzo</Link>
                            <Link to="/category/bebidas" className="nav-link">Bebidas</Link>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;