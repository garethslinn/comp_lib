import React from 'react';
import { allColours } from '../data/colours';
import { keygen } from '../components/utils/utils';

class Colours extends React.Component {
	items = allColours.map((item) => (
		<div
			className={`uit-colour-block ` + item.name}
			style={{ background: `#${item.hex}`, color: `#${item.color}` }}
			key={keygen()}
		>
			{item.name}
		</div>
	));

	generatedStyles = allColours.map((item) => `$` + item.name + `:` + '#' + item.hex + ';');

	render() {
		return (
			<React.Fragment>
				<div className="grid">
					<div className="col-1" />
					<div className="col-11">
						<div className="grid-4-columns">{this.items}</div>
						<p className="hide">{this.generatedStyles}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Colours;
