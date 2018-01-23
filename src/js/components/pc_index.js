import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainter from './pc_newscontainer';

export default class PCIndex extends React.Component {
	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<PCNewsContainter/>
                <PCFooter></PCFooter>
			</div>
		);
	};
}
