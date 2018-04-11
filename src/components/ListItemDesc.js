/****************************************************************
 ** This Component will create Item description list.
 *****************************************************************/

import React from "react";
import PropTypes from "prop-types";
import "./ListItemDesc.css";

export default class ListItemDesc extends React.Component {
	render() {
		const descContent = (
			<div className={this.props.selected ? "styleDescSelecetd" : "styleDesc"}>
				<div className="headingstyle">
					Description of {this.props.itemDesc.key}
				</div>
				<div>
					<label className="formLabel">Date : </label>
					{this.props.itemDesc.timelabel}
					<label className="formLabel">Status : </label>
					{this.props.itemDesc.status}
					<label className="formLabel">Start Time : </label>
					{this.props.itemDesc.startTime}
					<label className="formLabel">End Time : </label>
					{this.props.itemDesc.endTime}
					<label className="formLabel">Destiantion : </label>
					{this.props.itemDesc.destination}
					<label className="formLabel">Run Instance Label : </label>
					{this.props.itemDesc.runInstanceLabel}
					<label className="formLabel">dataSize : </label>
					{this.props.itemDesc.dataStats.dataSize}
				</div>
				<div>
					<label className="formLabel">Num Rows : </label>
					{this.props.itemDesc.dataStats.numRows}
				</div>
			</div>
		);
		let itemView = <div className="styleDesc">{descContent}</div>;
		return <div className="itemDescContent">{itemView}</div>;
	}
}

ListItemDesc.propTypes = {
	itemDesc: PropTypes.object
};
ListItemDesc.propTypes = {
	itemDesc: PropTypes.object, // Contain item description
	selected: PropTypes.bool // contain true for selected item else false
};
