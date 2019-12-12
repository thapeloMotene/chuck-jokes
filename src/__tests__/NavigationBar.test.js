import React from 'react';
import { shallow } from "../enzyme";
import NavigationBar from "../components/NavigationBar";



describe('Navigation bar', () => {
    let wrapper = shallow(<NavigationBar />);


it("should render without crashing",()=>{
   
    expect(wrapper).toBeTruthy();
})
it('should have a Navigation brand', ()=>{

    expect(wrapper.find('.branding').length).toBe(1);

});

it('should have correct brand text', ()=>{

    expect(wrapper.find('#title').text()).toBe("Chuck Norris Jokes");

});

  
})
