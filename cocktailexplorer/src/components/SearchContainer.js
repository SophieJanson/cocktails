import React, {PureComponent} from 'react'
import Search from './Search'
import request from 'superagent'

export default class SearchContainer extends PureComponent {
  state = {
    searchResults: null
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.makeRequest(this.state.searchInput)
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  makeRequest(searchQuery) {
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then(response => this.setResponseState(response.body.drinks))
  }

  setResponseState = (response) => {
    this.setState = {
      searchResults: (response || "unknown")
    }
  }
  render() {
    return (
      <Search onSubmit={this.handleSubmit} onChange={this.handleChange} />
    )
  }
}
