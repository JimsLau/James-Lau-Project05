import React, {Component} from 'react';
import Item from './Item.js';

class Results extends Component {
	transformData() {
		const {items} = this.props;
		const newData = items.reduce((acc, curr) => {
			const exists = acc.filter(item => item.user === curr.user);
			if (exists.length) {
				const oldItem = exists[0].item;
				exists[0].item = [...oldItem, curr.item];
				return acc;
			} 
			return acc.concat({
				id: curr.id,
				user: curr.user,
				item: [curr.item]
			})
		}, []);
		return newData;
	}

	render() {
		return (
			<section className="display-item">
				<ul>
					{this.transformData().map((item) => {
						return <Item id={item.id} key={item.id} removeItem={this.props.removeItem} name={item.item} user={item.user} />;
					})}
				</ul>
			</section>
		);
	}
};

export default Results;
