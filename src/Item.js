import React from 'react';

const Item = (props) => {
    return (
        <li key={props.id}>
        <div>
            {props.name.map((item, i) => <h3 key={i}>{item}</h3>)}
        </div>
        <p>To be brought by: {props.user}</p>
        <button onClick={() => props.removeItem(props.id)}>Remove Item!</button>
        </li>
    );
}

export default Item;