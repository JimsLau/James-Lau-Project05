import React from 'react';

const Item = (props) => {
    return (
        <li key={props.id}>
            <h3>{props.name}</h3>
            <p>To be brought by: {props.user}</p>
            <button onClick={() => props.removeItem(props.id)}>Remove Item!</button>
        </li>
    );
}

export default Item;