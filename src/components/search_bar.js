import React, {Component} from 'react';
//It's like const Component = React.Component
//For ES6
class SearchBar extends Component{
	constructor(props) {
		super(props);

		this.state = {term: ''};
		//Must bind 'this' with functions
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		//<input onChange={event => this.setState({term: event.target.value})}/>
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}/>
			</div>

		);
	}


}



export default SearchBar;