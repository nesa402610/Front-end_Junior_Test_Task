import React from 'react';
import logo1 from '../img/partnersLogo/MXM.svg';
import logo2 from '../img/partnersLogo/Frame 3.svg';
import logo3 from '../img/partnersLogo/Ellipse 65.svg';
import logo4 from '../img/partnersLogo/Digital Currency Logo (2).svg';
import logo5 from '../img/partnersLogo/Digital Currency Logo.svg';
import logo6 from '../img/partnersLogo/Digital Currency Logo (1).svg';
import logo7 from '../img/partnersLogo/FTT.svg';

const Main = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
    return (
        <main>
            <div className={'content'}>
                <div className={'title'}>
                    <h1>Наши партнеры</h1>
                </div>
                <div className={'partners'}>
                    {logos.map(logo =>
                        <div key={logo} className={'partners__item'}>
                            <img src={logo} alt=""/>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;