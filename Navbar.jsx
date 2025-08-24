import 'bootstrap/dist/css/bootstrap.min.css';
import { CircleUserRound } from 'lucide-react';
const Navbar = () => {
    const navitem = [
        { name: "Home", href: "#" },
        { name: "Makeup", href: "#" },
        { name: "Hair", href: "#" },
        { name: "Appliances", href: "#" },
        { name: "Bath & Body", href: "#" },
        { name: "Natural", href: "#" }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navitem.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                        <span className="navbar-text" >
                            <a href="#" className="btn btn-outline-success" style={{ marginRight: '10px' }}>Login</a>
                            <a href="#" className="btn btn-outline-success" style={{ marginRight: '10px' }}>Sign Up</a>
                            <a href="#" className="btn btn-outline-success" style={{ marginRight: '10px', border: 'none' }}><CircleUserRound /></a>

                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
