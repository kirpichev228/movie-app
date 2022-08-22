import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('HEADER TESTS', () => {
    test('header logo', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const headerContent = screen.getByText('MovieApp')
        expect(headerContent).toBeInTheDocument()
    });

    test('header links', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
        const headerLinks = screen.getByTestId('routingLinks')
        expect(headerLinks).toBeInTheDocument()
    })
})