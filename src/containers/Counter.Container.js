import {
    connect
} from 'react-redux';

import Counter from '../components/Counter'

import { actionReset, actionDecrement, actionIncrement } from '../actions';


function mapStateToProps(state) {
    return {
        count: state

    }
}

function mapDispatchToProps(dispatch) {
    return {
        hundelIncrement: () => {
            dispatch(actionIncrement())
        },
        hundelDecrement: () => {
            dispatch(actionDecrement())
        },
        hundelReset: () => {
            dispatch(actionReset())
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Counter);