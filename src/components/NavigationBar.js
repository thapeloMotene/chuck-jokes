import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class NavigationBar extends Component {
  render() {
    return (
        <header className="header-6" >
        <div className="branding">
            <Link to="/">
                 <span className="title" id="title">Chuck Norris Jokes</span>
            </Link>
        </div>   
      </header>
    )
  }
}
