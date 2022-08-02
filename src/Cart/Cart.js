import React from 'react';
import './Cart.css'

const Cart = ({el}) => {
    return (
        <div className='cart'>
            <img className='poster' src={el.Poster} alt=""/>
             <div className="films">
                 <h3 className='type'>{el.Type} :</h3>
                 <h3 className='title'>{el.Title.split(' ').slice(0,2).join()}...</h3>
             </div>
            <h3 className='year'>{el.Year}</h3>
            <button className='sec-btn'>Смотреть</button>
        </div>
    );
};

export default Cart;