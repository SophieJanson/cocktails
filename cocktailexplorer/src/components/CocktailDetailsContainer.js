import React, {PureComponent} from 'react'
import CocktailDetails from './CocktailDetails'
import request from 'superagent'

export default class CocktailDetailsContainer extends PureComponent {
  state = {
    details: null
  }

  componentDidMount() {
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
      .then(response => this.updateDetails(response.body.drinks[0]), console.error)
    }

  updateDetails = (details) => {
    this.setState({
      details
    })
  }
  render() {
    console.log(this.state)
    return (<CocktailDetails details={this.state.details}/>)
  }
}
