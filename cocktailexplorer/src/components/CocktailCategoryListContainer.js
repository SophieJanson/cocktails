import React, {PureComponent} from 'react'
import CocktailCategoryList from './CocktailCategoryList'
import request from 'superagent'

export default class CocktailCategoryListContainer extends PureComponent {
  state = {
    categories: null
  }
  componentDidMount() {
    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => JSON.parse(response.text).drinks, console.error)
      .then(drinksArray => drinksArray.map(category => category['strCategory']))
      .then(finalList => this.updateCategories(finalList))
  }

  updateCategories = (categories) => {
    this.setState({
      categories
    })
  }
  render() {
    console.log(this.state)
    return (<CocktailCategoryList categories={this.state.categories} />)
  }
}
