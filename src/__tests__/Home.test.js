import React from 'react';
import { shallow } from "../enzyme";
import Home from "../screens/Home";


describe('Home ', () => {
    let wrapper = shallow(<Home />);

it("should render without crashing",()=>{
   
    expect(wrapper).toBeTruthy();
})
it('should have a single jumbotron', ()=>{

    expect(wrapper.find('.home-jumbotron').length).toBe(1);

});

it('should have a single category list', ()=>{

    expect(wrapper.find('#category-list').length).toBe(1);

});

  
})
