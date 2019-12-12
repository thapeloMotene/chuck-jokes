import React, { Component } from 'react'
import JokeCard from '../components/JokeCard';
import {withRouter} from 'react-router-dom';

class JokeDetail extends Component {

    componentDidMount(){
        console.log("this", this)

        console.log('match', this.props.match);
    }
  render() {
    return (
      <div>
        <JokeCard category={this.props.match.params.category}/>
      </div>
    )
  }
}


export default withRouter(JokeDetail);