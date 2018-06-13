import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class CocktailDetails extends PureComponent {
  static propTypes = {
    details: PropTypes.object
  }
  formatDetails = (details) => {
    const keys = Object.keys(details).filter(key => {
      return details[key] !== "" && details[key] !== null
    })

    return (
      <div key={details['idDrink']}>
        { keys.slice(1, -1)
            .map(key => {
              if(key === "strDrinkThumb") {
                return (<img key={key} src={details[key]} alt="cocktail" />)
              } else{
                return <p key={key}>{key.substr(3)} - {details[key]} - </p>
              }
            })
        }
      </div>
    )
  }
  render() {
    const { details } = this.props
    return (
      <div>
      <Link to={"/"}>Back to Homepage</Link>
      { details === null && "Loading..." }
      { details !== null &&
        <div>
          {this.formatDetails(details)}
        </div>
      }
      </div>
    )
  }
}
