import React from 'react';

const Item = (props) => {
    return (
        <div className="wrapper">
        <ul />
        {this.state.items.map((item) => {
            return (
                <li key={item.id}>
                    <h3>{item.item}</h3>
                    <p>To be brought by: {item.user}</p>
                    <button onClick={() => this.removeItem(item.id)}>Remove Item!</button>
                </li>
            );
        })}
    </div>
    )
}

export default Item;