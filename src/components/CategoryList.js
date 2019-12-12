import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CategoryTile from './CategoryTile';
import {Link} from 'react-router-dom';

const JOKE_CATEGORIES = gql`
  {
   categories{
       name
   }
  }
`;

function CategoryList() {
  const { loading, error, data } = useQuery(JOKE_CATEGORIES);

  if (loading) return  <span class="spinner center" style={{marginTop:50}}>Loading...</span>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({ name }) => (

       <div key={name} class="clr-col-3">
           <Link to={`/joke/${name}`}>
                <CategoryTile title={name}/>
           </Link>
     
    </div>
   
  ));
}



export default CategoryList;