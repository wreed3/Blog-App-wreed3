import {fireEvent, render, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from './App'


test('', async () => {
    //arrange
    render(<App />)

    //act
   const { getByText} = render(<Navbar Home='Home' />)
   expect(document.querySelector('a').getAttribute('href')).toBe('/')
    



    //assert
})

// const mockData = {

//     id: 1, 
//     title: 'Test title',
//     userName: 'a.bourne'
//   }

// global.fetch = jest.fn(() => {
//     const json = () => Promise.resolve(mockData);
//     const response = { json };
//     return Promise.resolve(response);
// });



