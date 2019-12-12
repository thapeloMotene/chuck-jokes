import React from 'react';
import { shallow } from "../enzyme";
import JokeDetail from "../screens/JokeDetail";


describe('Joke Detail ', () => {

    let wrapper = shallow(
            <JokeDetail />
    );

it("should render without crashing",()=>{
    
    expect(wrapper).toBeTruthy();
})
});
