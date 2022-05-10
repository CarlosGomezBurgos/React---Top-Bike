import {React, useEffect, useState} from 'react';
import OneProduct from './OneProduct';


function LastProductInDb(){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/product')
        .then(response => response.json())
        .then(data => {
            setProduct(data.data)
        })
    },[])

    let oneProduct = product.pop();


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto registrado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/> */}
                    </div>

                        < OneProduct {...oneProduct} /> 


                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
