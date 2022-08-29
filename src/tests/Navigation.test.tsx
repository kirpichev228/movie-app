import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom'
import NavigationBar from '../components/NavigationBar'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('NAVIGATION TESTS', () => {
    test('nav search text', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavigationBar/>
                </Provider>
            </BrowserRouter>
        )
        const lengthText = screen.getByText(/Search:/i)
        expect(lengthText).toBeInTheDocument() 
    })

    test('nav filter text', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavigationBar/>
                </Provider>
            </BrowserRouter>
        )
        const lengthText = screen.getByText(/filter:/i)
        expect(lengthText).toBeInTheDocument() 
    })

    test('nav sort text', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavigationBar/>
                </Provider>
            </BrowserRouter>
        )
        const lengthText = screen.getByText(/sort:/i)
        expect(lengthText).toBeInTheDocument() 
    })

    test('nav length text', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavigationBar/>
                </Provider>
            </BrowserRouter>
        )
        const lengthText = screen.getByText(/movies found/i)
        expect(lengthText).toBeInTheDocument() 
    })

    test('nav modal add open', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <NavigationBar/>
                </Provider>
            </BrowserRouter>
        )
        const modalOpenButton = screen.getByTestId('modalOpenButton')
        expect(screen.queryByTestId('modalWindow')).toBeNull()
        fireEvent.click(modalOpenButton)
        expect(screen.getByTestId('modalWindow')).toBeInTheDocument()
        const modalCloseButton = screen.getByTestId('modalClose')
        fireEvent.click(modalCloseButton)
        expect(screen.queryByTestId('modalWindow')).toBeNull()
    })
})