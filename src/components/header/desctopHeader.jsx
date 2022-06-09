import React from 'react';
import img from "../../img/Frame 1691.svg";
import search from "../../img/Ellipse.svg";
import avatar from '../../img/Avatar.svg'

const DesctopHeader = () => {
    return (
        <div className={'header'}>
            <div className="header__left">
                <div className={'header__logo'}>
                    <img src={img} alt=""/>
                </div>
                <div className={'search'}>
                    <div>
                        <img className={'search__ico'} src={search} alt=""/>
                    </div>
                    <input type="text" placeholder={'Найти...'}/>
                </div>
            </div>
            <div className="header__right">
                <div className={'user'}>
                    <div className={'user__name'}>
                        Константин
                    </div>
                    <div className={'user__avatar'}>
                        <img src={avatar} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesctopHeader;