import * as React from 'react';

interface SelectableCard {
	action: () => void;
	title: string;
	description: string;
	isDisabled: boolean;
}

export const SelectableCard : React.FunctionComponent<SelectableCard> = (props) => {
	const {isDisabled, title, description} = props;
	return (
		<React.Fragment>
			<button disabled={isDisabled} onClick={props.action} className="selectable-card">
				<div className="title">{title}</div>
				<p className="description">{description}</p>
			</button>
		</React.Fragment>
	);
};

