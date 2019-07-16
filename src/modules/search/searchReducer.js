import {handleActions} from '@letapp/redux-actions';
import * as actions from './searchActions';

const INITIAL_STATE = {
    value: ''
};


export default handleActions({
    [actions.searchAction]: (state, actions) => ({
        value: actions.payload
    })
}, INITIAL_STATE);
