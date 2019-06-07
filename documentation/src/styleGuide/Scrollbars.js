import React from 'react';
import { JARGONTEXT3 } from './constants';

const Scrollbars = () => (
	<React.Fragment>
		<div className="grid">
			<div className="col">
				<div className="uit-scrollbox">{JARGONTEXT3}</div>
			</div>
			<div className="col">
				<div className="uit-scrollbox scrollbar-large">{JARGONTEXT3}</div>
			</div>
		</div>
		<div className="grid">
			<div className="col-2">
				<h3>Example</h3>
				<p className="txt-large">
					Note: Unless specified, the scrollbar will default to the thinner of the two variants.<br /> Be
					aware this is not supported by all browsers which would then revert back to its default appearence.
				</p>
			</div>
			<div className="col-4 uit-ex">
				&lt;div class="scrollbar-large" &gt;Loren ipsum...&lt;/div&gt; <br />
			</div>
		</div>
	</React.Fragment>
);

export default Scrollbars;
