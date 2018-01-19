import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <form className = "input-group" >
        <input 
          placeholder = "Input city name for 5 day forecast"
        />
        <span className = "input-group-btn">
          <button type = "submit" className = "btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}