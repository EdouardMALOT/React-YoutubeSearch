import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  onInputChange(event) {
    const { value } = event.target;

    this.setState({term : value});
    this.props.onTextChange(value);
  }

  render(){
    return(
        <div className="search-bar">
          <input
            value = {this.state.term}
            onChange={this.onInputChange.bind(this)}
            placeholder="React search on Youtube" />
        </div>
    );
  }

}

export default SearchBar;
