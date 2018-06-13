import React, {PureComponent} from 'react'
import './Search.css'

export default class Search extends PureComponent {
  render() {
    return (
      <div className="search-form" onSubmit={this.props.onSubmit}>
        <form>
          <input name="searchbar" type="text" placeholder="Search for a cocktail" onChange={this.props.onChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
