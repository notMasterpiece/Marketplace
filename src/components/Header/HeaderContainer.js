import {connect} from 'react-redux';
import {compose, withState, withHandlers} from 'recompose';
import HeaderView from './HeaderView';

import { logout } from '../../modules/auth/authOperations';
import {filterSaved} from "../../modules/products/productSelectors";

const enhancer = compose(
    connect(state => ({
        viewer: state.viewer.profile,
        saved: filterSaved(state),
    }), {logout}),
    withState('showHeaderPopup', 'setHeaderPopup', false),
    withHandlers({
        logoutHandle: (props) => () => {
            props.logout();
        }
    })

);


export default enhancer(HeaderView);