import React from 'react';
import { JARGONTEXT, JARGONTEXT2 } from './constants';

const Typography = () => (
	<div>
		<div className="grid">
			<div className="col-12">
				<h2 className="light">Futura PT Book</h2>
				<h2 className="heavy">Futura PT Medium</h2>
				<h2 className="bold">Futura PT Book</h2>
			</div>
		</div>
		<div className="grid">
			<div className="col-3">
				<p className="txt-large">H1 Hero</p>
			</div>
			<div className="col-3">
				<h1 className="hero light">{JARGONTEXT}</h1>
			</div>
			<div className="col-3">
				<h1 className="hero heavy">{JARGONTEXT}</h1>
			</div>
			<div className="col-3">
				<h1 className="hero bold">{JARGONTEXT}</h1>
			</div>

			<div className="col-3">
				<p className="txt-large">H1</p>
			</div>
			<div className="col-3">
				<h1 className="light">{JARGONTEXT}</h1>
			</div>
			<div className="col-3">
				<h1 className="heavy">{JARGONTEXT}</h1>
			</div>
			<div className="col-3">
				<h1 className="bold">{JARGONTEXT}</h1>
			</div>

			<div className="col-3">
				<p className="txt-large">H2</p>
			</div>
			<div className="col-3">
				<h2 className="light">{JARGONTEXT}</h2>
			</div>
			<div className="col-3">
				<h2 className="heavy">{JARGONTEXT}</h2>
			</div>
			<div className="col-3">
				<h2 className="bold">{JARGONTEXT}</h2>
			</div>

			<div className="col-3">
				<p className="txt-large">H3</p>
			</div>
			<div className="col-3">
				<h3 className="light">{JARGONTEXT}</h3>
			</div>
			<div className="col-3">
				<h3 className="heavy">{JARGONTEXT}</h3>
			</div>
			<div className="col-3">
				<h3 className="bold">{JARGONTEXT}</h3>
			</div>

			<div className="col-3">
				<p className="txt-large">H4</p>
			</div>
			<div className="col-3">
				<h4 className="light">{JARGONTEXT}</h4>
			</div>
			<div className="col-3">
				<h4 className="heavy">{JARGONTEXT}</h4>
			</div>
			<div className="col-3">
				<h4 className="bold">{JARGONTEXT}</h4>
			</div>

			<div className="col-3">
				<p className="txt-large">H5</p>
			</div>
			<div className="col-3">
				<h5 className="light">{JARGONTEXT}</h5>
			</div>
			<div className="col-3">
				<h5 className="heavy">{JARGONTEXT}</h5>
			</div>
			<div className="col-3">
				<h5 className="bold">{JARGONTEXT}</h5>
			</div>

			<div className="col-3">
				<p className="txt-large">H6</p>
			</div>
			<div className="col-3">
				<h6 className="light">{JARGONTEXT}</h6>
			</div>
			<div className="col-3">
				<h6 className="heavy">{JARGONTEXT}</h6>
			</div>
			<div className="col-3">
				<h6 className="bold">{JARGONTEXT}</h6>
			</div>

			<div className="col-3">
				<p className="txt-large">
					.txt-xlarge,
					<br />
					20/29
				</p>
			</div>
			<div className="col-3">
				<p className="light txt-xlarge">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="heavy txt-xlarge">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="regular txt-xlarge">{JARGONTEXT2}</p>
			</div>

			<div className="col-3">
				<p className="txt-large">
					.txt-large,
					<br />
					17/24
				</p>
			</div>
			<div className="col-3">
				<p className="light txt-large">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="heavy txt-large">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="regular txt-large">{JARGONTEXT2}</p>
			</div>

			<div className="col-3">
				<p className="txt-large">
					.txt-medium,
					<br />
					14/20
				</p>
			</div>
			<div className="col-3">
				<p className="light txt-medium">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="heavy txt-medium">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="regular txt-medium">{JARGONTEXT2}</p>
			</div>

			<div className="col-3">
				<p className="txt-large">
					.txt-small,
					<br />
					12/17
				</p>
			</div>
			<div className="col-3">
				<p className="light txt-small">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="heavy txt-small">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="regular txt-small">{JARGONTEXT2}</p>
			</div>

			<div className="col-3">
				<p className="txt-large">
					.txt-xsmall,
					<br />
					10/14
				</p>
			</div>
			<div className="col-3">
				<p className="light txt-xsmall">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="heavy txt-xsmall">{JARGONTEXT2}</p>
			</div>
			<div className="col-3">
				<p className="regular txt-xsmall">{JARGONTEXT2}</p>
			</div>
		</div>

		<hr />

		<div className="grid">
			<div className="col-3">
				<span className="label-large"> 17/30</span>
			</div>
		</div>
	</div>


);

export default Typography;
