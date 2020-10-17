import React, { Component } from "react";

export default class Searcbar extends Component {
  state = {
    qvery: "",
  };

  hendleChenge = (e) => {
    this.setState({
      qvery: e.target.value,
    });
  };

  hendleSubmit = (e) => {
    e.preventDefault();

    const {qvery} = this.state;

    if(qvery === '') return;

    this.props.onSubmit(this.state.qvery);

    this.setState({
      qvery: "",
    });
  };

  render() {
    const { qvery } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.hendleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={qvery}
            onChange={this.hendleChenge}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
