/****************************************************************
 ** Main Application class.
 ****************************************************************/
import React, { Component } from "react";
import ListItem from "./ListItem";
import ListDesc from "./ListItemDesc";
import "./App.css";
const itemListData = require("../data/items_list.json");
const itemListDesc = require("../data/items_description.json");
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selecetd: ""
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}
	onClickHandler(evt) {
		console.log(evt.currentTarget.innerText);
		this.setState({ selecetd: evt.currentTarget.innerText });
	}
	render() {
		let listItemView = [];
		let listDescView = [];
		const listItemsData = itemListData.payload;
		for (let i = 0; i < listItemsData.length; i++) {
			// create item list
			listItemView.push(
				<ListItem
					itemListName={listItemsData[i]}
					key={i}
					onListClick={this.onClickHandler}
					selecetd={this.state.selecetd}
				/>
			);
		}
		const listItemsDesc = itemListDesc.payload;
		let indexSelected = -1;
		for (let i = 0; i < listItemsDesc.length; i++) {
			if (listItemsDesc[i].key === this.state.selecetd) {
				indexSelected = i;
			}
		}
		//Create description list and make the seelected item at the top of the list.
		if (indexSelected !== -1) {
			const topArry = listItemsDesc.slice(indexSelected, listItemsDesc.length);
			const botArry = listItemsDesc.slice(0, indexSelected);
			for (let i = 0; i < topArry.length; i++) {
				if (i === 0) {
					listDescView.push(
						<ListDesc itemDesc={topArry[i]} key={i} selected />
					);
				} else {
					listDescView.push(<ListDesc itemDesc={topArry[i]} key={i} />);
				}
			}
			for (let j = 0; j < botArry.length; j++) {
				listDescView.push(
					<ListDesc itemDesc={botArry[j]} key={listDescView.length + j} />
				);
			}
		} else {
			// if no item is seleceted.
			for (let i = 0; i < listItemsDesc.length; i++) {
				listDescView.push(<ListDesc itemDesc={listItemsDesc[i]} key={i} />);
			}
		}
		return (
			<div className="App">
				<div className="App-headLabel">This is a demo Application</div>
				<div className="App-subheadLabel">
					If you screen is smaller scroll bar will appear
				</div>
				<div className="App-itemListContainer">{listItemView}</div>
				<div className="App-itemDescContainer">{listDescView}</div>
			</div>
		);
	}
}

export default App;
