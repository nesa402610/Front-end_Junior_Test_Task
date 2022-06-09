import React from 'react';
import img from "../../img/Frame 1691.svg";
import profile from "../../img/Frame 10.svg";
import search from "../../img/Ellipse.svg";

const MobileHeader = () => {
    return (
        <div className={'header__mobile'}>
            <div className={'header__quick'}>
                <div className={'header__logo'}>
                    <img src={img} alt=""/>
                </div>
                <div className={'header__profile'}>
                    <img src={profile} alt=""/>
                </div>
            </div>
            <div className={'search__mobile'}>
                <div>
                    <img className={'search__ico'} src={search} alt=""/>
                </div>
                <input type="text" placeholder={'Найти...'}/>
            </div>
        </div>
    );
};

export default MobileHeader;