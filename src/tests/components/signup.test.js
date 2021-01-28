import React from 'react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

import Signup from '../../components/pages/users/signup';

describe('Sign up components', () => {
    let store;
    let component;

    beforeEach( () => {
        store = mockStore({
            notification: false,
            user_counter: [],
            user_loading: true,
            userLocation: {lat: 9.0820,lng: 8.6753},
        });
    });

    component = renderer.create(
        <Provider store={store}>
            <Signup />
        </Provider>
    )

    test('render the sign up component', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})
