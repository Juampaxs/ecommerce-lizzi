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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Desayuno</a>
                            <a className="nav-link" href="#">Almuerzo</a>
                            <a className="nav-link" href="#">Bebidas</a>
                        </div>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </div>
    );
}

export default Navbar;