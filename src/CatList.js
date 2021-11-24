import React from "react";

const CatList = (props) => {
	const { catPics } = props;
	console.log(catPics);
	return (
		<div>
			{catPics.map((cat) => (
				<img key={cat.id} src={cat.url} alt={cat.id}></img>
			))}
		</div>
	);
};

export default CatList;

// import React, { Component } from "react";

// export default class CatList extends Component {
// 	render() {
// 		console.log(this.props);
// 		return <div></div>;
// 	}
// }
