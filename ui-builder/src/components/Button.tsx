import * as React from 'react';

interface Button {
	action: () => void;
	buttonType: string;
	isButtonSmall: boolean;
	isBlock: boolean;
	isButtonWithIcon: boolean;
	isButtonDisabled: boolean;
}

export const Button: React.FunctionComponent<Button> = (props) => {
	const { buttonType, isButtonSmall, isButtonWithIcon, isButtonDisabled, isBlock, action } = props;
	const buttonSize = isButtonSmall ? '-sm' : '';
	const block = isBlock ? 'block' : '';
	const buttonIcon = isButtonWithIcon ? 'button-icon' : '';
	return (
		<button
			disabled={isButtonDisabled}
			onClick={action}
			className={'button button-' + buttonType + buttonSize + ' ' + buttonIcon + ' ' +  block}
		>
			{props.children}
		</button>
	);
};



