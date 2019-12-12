import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_JOKE= gql`
  query getJoke($category: String!) {
    joke(category: $category) {
      value
      categories
    }
  }
`;

function JokeCard({category}) {

  const { loading, error, data, refetch } = useQuery(GET_JOKE, {
    variables: { category: category },
  });

  if (error) return <p> error :(</p>
  if (loading) return(
    <div className="clr-justify-content-center" style={{paddingTop:50}}>
        <center>
        <div className="spinner"></div>
        </center>
        
    </div>
  );
  return (
    <div className="clr-row" style={{paddingTop:50}}>
    <div className="clr-col-lg-4 clr-offset-lg-4 ">
        <div className="card">
            <div className="card-img" style={{width:500}}>
                <img src={require("../assets/chuck-on-air.gif")}  style={{margin:5}} alt="animated chuck norris"/>
            </div>
            <div className="card-block" >
                <h3>{data.joke.categories[0]}</h3>
            </div>
            <div className="card-block joke" >
                <p className="card-text"> 
                        {data.joke.value}                                                                                                                                                                       
                </p>
            </div>
        </div>
    
        <div className="clr-justify-content-center" style={{marginTop:10}}>
            <center>
            <button className="btn btn-primary " onClick={ ()=> refetch()}>look at another joke</button>
            </center>
       
        </div>
    </div>
</div>
  );
}




export default JokeCard;