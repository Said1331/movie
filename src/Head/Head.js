import React from 'react';
import './Head.css';
import Logo from './logo.png';
import Imax from './imax.png';
import dolby from './dolbyAtmos.png'


const Head = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header-box">
                    <img src={Logo} alt="" className="logo"/>
                    <img src={Imax} alt="" className="imax"/>
                    <img src={dolby} alt="" className="atmosphere"/>
                    <ul className='content'>
                        <li className='text'>Комедия</li>
                        <li className='text'>Боевики</li>
                        <li className='text'>Драма</li>
                    </ul>
                    <button className='login'>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Head;