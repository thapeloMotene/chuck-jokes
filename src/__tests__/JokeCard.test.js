import React from 'react';
import { shallow } from "../enzyme";
import gql from 'graphql-tag';
import JokeCard from "../components/JokeCard";

import { MockedProvider } from '@apollo/react-testing';

const GET_JOKE= gql`
  query getJoke($category: String!) {
    joke(category: $category) {
      value
      categories
    }
  }
`;

const mocks =[{
    request: {
      query: GET_JOKE,
      variables: {
        category: 'dev',
      },
    },
    result: {
      data: {
        joke: { value:'A very fun joke ', categories: ['dev'] },
      },
    },
  },
];


describe('Joke Card ', () => {

    let wrapper = shallow(   
    <MockedProvider mocks={mocks} addTypename={false}>
        <JokeCard category="dev"/>
      </MockedProvider>);

    
it("should render without crashing",()=>{
   
    expect(wrapper).toBeTruthy();
  
})


});
