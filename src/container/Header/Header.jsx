import React from 'react';
import img from '../../img/image.png';

import './Header.css';

const  Header = () => {
    return (
        <div className='hero__header section__padding'>
            <div className="hero__header-content">
                <h1>A special credit card made for Developers.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                <div className="hero__header-content_email">
                    <input type="email" placeholder='Enter email address'/>
                    <button type='button'>Get Free Card</button>
                </div>
                <div className="hero__header-content_info">
                    <div className="hero__header-content_info-card">
                        <h1>2943</h1>
                        <p>Cards Delivered</p>
                    </div>
                    <div className="hero__header-content_info-transaction">
                        <h1>1M+</h1>
                        <p>transaction completed</p>
                    </div>
                </div>
            </div>
            <div className="hero__header-image">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;