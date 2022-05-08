import React from 'react';

function ChartRowUser(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td><img src= {props.picture} /></td>
        </tr>
    )
}       
export default ChartRowUser;