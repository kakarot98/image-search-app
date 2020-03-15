import React from "react";
import './SearchBar.css'


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchWord: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    
  }
  handleInputChange(event) {
    this.setState({ searchWord: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.searchWord);
}

  render() {
    return (
      <div>
        <form className="mainForm">
          <label>Image Search</label>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.searchWord}
            className="inputStyle"
          />
          <br />
          
          <button onClick={this.onFormSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
