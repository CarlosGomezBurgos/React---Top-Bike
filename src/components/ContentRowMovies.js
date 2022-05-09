import {React, useEffect, useState} from 'react';
import SmallCard from './SmallCard';


function ContentRowMovies(){
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/api/product')
        .then(response => response.json())
        .then(data => {
            setProduct(data.count)
        })
    },[])



    useEffect(() => {
        fetch('http://localhost:4000/api/user')
        .then(response => response.json())
        .then(data => {
            setUser(data.count)
        })
    },[])
    
    let usersTotal = {
        title: 'Total de usuarios',
        color: 'primary', 
        cuantity: user,
        icon: 'fa-clipboard-list'
    }
    
    let productsTotal = {
        title:' Total de productos', 
        color:'success', 
        cuantity: product,
        icon: 'fa-clipboard-list'
    }
    
    let cartProps = [usersTotal, productsTotal];

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;