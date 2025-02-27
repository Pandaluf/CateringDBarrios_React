import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Evitar scroll en el body cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    return (
        <header>
            <div className="header">
                <div className={`headerbar ${isOpen ? "open" : ""}`}>
                    <div className="header__account">
                        <img src="/../src/assets/img/logo.png" alt="logo" height={250} />
                    </div>
                    <div className="header__nav">
                        <ul>
                            <a href="/">
                                <li>Productos</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="header__logo">
                    <img src="/../src/assets/img/logo.png" alt="logo" />
                </div>
                <div className="header__bar" onClick={toggleMenu}>
                    {!isOpen ? (
                        <i className="fa-solid fa-bars"></i>
                    ) : (
                        <i className="fa-solid fa-xmark" id="hdcross"></i>
                    )}
                </div>
                <div className="header__nav">
                    <ul>
                        <a href="/">
                            <li>Productos</li>
                        </a>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
