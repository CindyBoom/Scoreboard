import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App.js', () => {
    test('App renders correctly', () =>{
        const component = render (<App />);
        console.log(component);
    });
});

