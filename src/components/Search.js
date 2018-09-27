import React from 'react';

class Search extends React.Component {

  constructor() {
    super();
    this.state={textValue:''};
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }



handleChange(event){
this.setState({textValue: event.target.value});
}

//Passes in results from state - to app.
handleSubmit(event){
  event.preventDefault();
  this.props.receiveSearch(this.state.textValue);
}


  render(){
    return (
      <div className="controls">
        <form onSubmit={this.handleSubmit} className="search" id="search">
          <label className="search__label" htmlFor="search-tf">City</label>
          <input onChange={this.handleChange} className="search__input" id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
