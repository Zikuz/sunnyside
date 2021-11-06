import Navbar from './Navbar' 

export default function Header() {
    return (
        <div className="header">
            <Navbar />
            <div className="header-container">
                <span>WE ARE CREATIVES</span>
                <a href="#main">
                    <img src="/images/icon-arrow-down.svg" alt="arrow" />
                </a>
            </div>
        </div>
    );
}
