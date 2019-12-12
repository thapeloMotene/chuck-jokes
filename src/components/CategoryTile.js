import React, { Component } from 'react'

export default class CategoryTile extends Component {
  render() {
    return (
     <div className="tile" style={{margin:10, width:300, height:100, marginLeft:10}}>
         <div className="cover" style={{paddingTop:10}}>
         <p className="title text-center" style={{color:'white'}}>{this.props.title}</p>
         </div>
       
     </div>
    )
  }
}
