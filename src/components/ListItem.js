/****************************************************************
 ** This Component will create Item list.
 *****************************************************************/

import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

export default class ListItem extends React.Component {
	render() {
		const itemView = (
			<div className="stylelist" onClick={this.props.onListClick}>
				{this.props.itemListName}
			</div>
		);

		return (
			<div
				className={
					this.props.selecetd === this.props.itemListName
						? "itemContentSelecetd"
						: "itemContent"
				}
			>
				{itemView}{" "}
			</div>
		);
	}
}

ListItem.propTypes = {
	itemListName: PropTypes.string, // item name
	selecetd: PropTypes.string, // Will contain selecetd item name
	onListClick: PropTypes.func // A parent function which will be execute on item click
};
