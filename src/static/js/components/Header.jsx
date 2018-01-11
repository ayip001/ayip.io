// ./src/static/js/components/Header.jsx
import {Link} from "react-router-dom";
import React from "react";

const BurgerMenu = ({showMenu, toggleMenu}) => {
    let className = null;

    if (showMenu) {
        className = "burger-menu hamburger hamburger--collapse is-active";
    } else {
        className = "burger-menu hamburger hamburger--collapse";
    }

    return (
        <div
            className={className}
            onClick={() => toggleMenu(!showMenu)}
        >
            <span className="hamburger-box">
                <span className="hamburger-inner" />
            </span>
        </div>
    );
};

const FontButton = ({readingFont, toggleFont}) => {
    let buttonTxt = null,
        className = null;

    if (readingFont) {
        buttonTxt = "Aesthetic font for croissant";
        className = "paper-btn paper-btn-2 font-btn";
    } else {
        buttonTxt = "Reading font if you want";
        className = "paper-btn paper-btn-4 font-btn";
    }

    return (
        <div className="row flex-center">
            <div
                className={className}
                onClick={() => toggleFont(!readingFont)}
            >
                {buttonTxt}
            </div>
        </div>
    );
};

const Menu = () => (
    <div className="row flex-center child-borders margin">
        <Link
            className="paper-btn paper-btn-plain margin"
            to="/"
        >
            Home
        </Link>
        <Link
            className="paper-btn paper-btn-plain margin"
            to="/blog"
        >
            Blog
        </Link>
    </div>
);

const ModalMenu = ({showMenu, toggleMenu, readingFont, toggleFont}) => {
    if (showMenu) {
        return (
            <div
                className="modal"
                onClick={() => toggleMenu(!showMenu)}
            >
                <div className="menu-item">
                    <Menu />
                    <FontButton
                        readingFont={readingFont}
                        toggleFont={toggleFont}
                    />
                </div>
            </div>
        );
    }
    return <div />;
};

const Header = ({showMenu, toggleMenu, readingFont, toggleFont}) => (
    <div>
        <BurgerMenu
            showMenu={showMenu}
            toggleMenu={toggleMenu}
        />
        <ModalMenu
            readingFont={readingFont}
            showMenu={showMenu}
            toggleFont={toggleFont}
            toggleMenu={toggleMenu}
        />
        {window.location.pathname !== "/" && <Menu />}
    </div>
);

export default Header;
