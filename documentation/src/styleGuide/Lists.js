import React from 'react';

const Lists = () => (
	<div className="grid-4">
		<div className="col">
			<h4>Unordered</h4>

			<ul className="bullet-default">
				<li>.bullet-default</li>
			</ul>

			<ul className="bullet-outline">
				<li>.bullet-outline</li>
			</ul>

			<ul className="bullet-diamond">
				<li>.bullet-diamond</li>
			</ul>

			<ul className="bullet-alt">
				<li>.bullet-alt</li>
			</ul>
		</div>

		<div className="col">
			<h4>Ordered</h4>

			<ol className="order-primary">
				<li>.order-primary</li>
			</ol>

			<ol className="order-secondary">
				<li>.order-secondaryy</li>
			</ol>

			<ol className="order-primary-circle">
				<li>.order-primary-circle</li>
			</ol>

			<ol className="order-secondary-circle">
				<li>.order-secondary-circle</li>
			</ol>
		</div>
	</div>
);

export default Lists;
