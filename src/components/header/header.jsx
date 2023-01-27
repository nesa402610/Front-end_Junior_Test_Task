import React from 'react';
import MobileHeader from "./mobileHeader";
import DesctopHeader from "./desctopHeader";

const Header = () => {
  return (
    <header>
      <div className={'content'}>
        <MobileHeader/>
        <DesctopHeader/>
      </div>
    </header>
  );
};

export default Header;
