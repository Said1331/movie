import React from 'react';
import './Section.css'
import Cart from "../Cart/Cart";

const Section = ({movie}) => {
    return (
        <div className='section'>
             <div className="container">
                 <div className="sec-row">
                     {movie.map((el,idx)=>{
                         return <Cart key={idx} el={el}/>
                     })}
                 </div>
             </div>
        </div>
    );
};

export default Section;