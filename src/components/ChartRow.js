import React from 'react';

function ChartRow(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.discount}</td>
            <td>{props.description}</td>
            <td><img src= {props.image} /></td>
        </tr>
    )
}       
export default ChartRow;