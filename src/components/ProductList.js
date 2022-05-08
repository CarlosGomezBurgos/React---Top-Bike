import {React, useState, useEffect} from 'react';
import ChartRow from './ChartRow';

function ProductsList (){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/api/product')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)
        })
    },[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio "$" </th>
                                <th>Descuento "%"</th>
                                <th>Descripcion</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default ProductsList;