import React from 'react';

function OneUser (props){
    

    return(

<div className="card shadow mb-4">
<div className="card-body">
    <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">

            <thead>
                <tr>
                    <p>Usuario: {props.id}</p>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                    <img src= {props.picture} />
                </tr>
            </thead>

        </table>
    </div>
</div>
</div>



    )


}

export default OneUser;

