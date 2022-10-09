import './Header.css';
import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

export const Header =()=>{
    return(
        <section className='main-header'>
            <div className='header-top'>
                <div className='choose-language'>
                    <p className='language-ru'>RU</p>
                    <p className='language-uzb'>UZB</p>
                </div>
            </div>
            <div className='header-bottom'>
                <h1>MILANDI</h1>
                <ul>
                    <li>Главное</li>
                    <li>O нас</li>
                    <li>Категории</li>
                    <li>Сотрудничество</li>
                </ul>
                <div className='log-buttons'>
                    <button className='log-in-button'>Войти</button>
                    <button className='log-up-button'>Зарегистрироваться</button>
                </div>
                <FiShoppingCart className='icon-header-bottom'/>
            </div>
        </section>
    )
}

export default Header;