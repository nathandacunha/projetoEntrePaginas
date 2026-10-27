import '../styles/App.css';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h1>Entre Páginas</h1>
            <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;