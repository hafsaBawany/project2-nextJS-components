import './style.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Welcome to My Site</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
