import {React, useState, useEffect} from 'react';
import ChartRowUser from './ChartRowUser';

function UsersList (){
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/api/user')
        .then(response => response.json())
        .then(data => {
            setUsers(data.data)
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
                                <th>Email </th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            users.map( ( row , i) => {
                                return <ChartRowUser { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default UsersList;