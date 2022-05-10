import React from 'react';

function OneProduct (props){
    

    return(

        <div className="card shadow mb-4">
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">

                    <thead>
                        <tr>
                            <p>Producto: {props.id}</p>
                            <h2>{props.name}</h2>
                            <p>{props.description}</p>
                            <img src= {props.image} />
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
        </div>

    )


}

export default OneProduct;
