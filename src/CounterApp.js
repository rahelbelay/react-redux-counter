import {
    createStore
} from 'redux';

import {
    count
} from './reducers';
import React from 'react'
import Counter from './containers/Counter.Container'
import { Provider } from 'react-redux'


const store = createStore(count)