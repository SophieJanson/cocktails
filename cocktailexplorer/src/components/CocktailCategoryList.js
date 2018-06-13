import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './CocktailCategoryList.css'
import { Link } from 'react-router-dom'

export default class CocktailCategoryList extends PureComponent {
  static propTypes = {
    categories: PropTypes.array
  }
  renderCategory = (category) => {
    const formattedCategory = encodeURIComponent(category.split(" ").join("_").toLowerCase())
    return <Link key={formattedCategory} to={`/categories/${formattedCategory}`}><li key={category}>{category}</li></Link>
  }
  render() {
    const { categories } = this.props
    return (
      <div className="cocktail-category-list">
      { categories === null && "Loading..." }
      { categories !== null &&
        <ul className="cocktail-categories">
          {this.props.categories.map(this.renderCategory)}
        </ul>
      }
      </div>
    )
  }
}
