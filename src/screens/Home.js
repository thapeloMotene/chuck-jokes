import React, { Component } from 'react'
import CategoryList from '../components/CategoryList';

export default class Home extends Component {
  render() {
    return (
    <div className="App">
       
        <div className="home-jumbotron"></div>
  
  <div className="main-container">
    <h3 className="text-center">View Chuck jokes by category</h3>
    <p className="p2 text-center" >Click a category tile to view a radom chuck norris joke in that category</p>
  
  <div className="clr-row clr-justify-content-center">
    
      <div className="clr-col-10">
      <div className="clr-row clr-justify-content-center">
      <CategoryList id="category-list"/>
      </div>
  
         
      </div>
  </div>
  
  </div>
  
      </div>
    )
  }
}
