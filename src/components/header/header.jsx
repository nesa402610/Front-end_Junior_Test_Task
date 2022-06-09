import React from 'react';
import MobileHeader from "./mobileHeader";
import DesctopHeader from "./desctopHeader";

const Header = () => {
    return (
        <header>
            <MobileHeader/>
            <DesctopHeader/>
        </header>
    );
};

export default Header;