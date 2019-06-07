import * as React from 'react';

interface SelectableCard {
	action: () => void;
	title: string;
	description: string;
	isDisabled: boolean;
}

export const SelectableCard : React.FunctionComponent<SelectableCard> = (props) => {
	return (
		<React.Fragment>
			<button disabled={props.isDisabled} onClick={props.action} className="selectable-card">
				<div className="title">{props.title}</div>
				<p className="description">{props.description}</p>
			</button>
		</React.Fragment>
	);
};

