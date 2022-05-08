import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

let usersTotal = {
    title: 'Total de usuarios',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

let productsTotal = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [usersTotal, productsTotal, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;