import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../components/Footer'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('FOOTER TESTS', () => {
    test('footer year', () => {
        render(
            <Provider store={store}>
                <Footer/>
            </Provider>
        );
        const footerYear = screen.getByText(/2022/i)
        expect(footerYear).toBeInTheDocument()
        expect(footerYear).toMatchSnapshot()
    })

    test('footer GHlink', () => {
        render(
            <Provider store={store}>
                <Footer/>
            </Provider>
        );
        const footerLinkText = screen.getByText('GitHub')
        expect(footerLinkText).toBeInTheDocument()
        expect(footerLinkText).toMatchSnapshot()
    })
    
})



