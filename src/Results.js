import React from 'react';
import Item from './Item.js';

const Results = (props) => {
	return (
		<section className="display-item">
			<ul>
				{props.items.map((item) => {
					return <Item id={item.id} removeItem={props.removeItem} name={item.item} user={item.user} />;
				})}
			</ul>
		</section>
	);
};

export default Results;
