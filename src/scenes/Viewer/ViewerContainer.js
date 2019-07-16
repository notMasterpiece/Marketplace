import {connect} from 'react-redux';
import {compose, withHandlers, withStateHandlers} from 'recompose';
import ViewerView from './ViewerView';

import {changeUserInfo} from '../../modules/viewer/viewerOperations'


const enhancer = compose(
    connect(state => ({
        viewer: state.viewer.profile,
    }), {changeUserInfo}),
    withStateHandlers(
        {fullName: '', avatar: '', phone: '', location: ''},
        {}
    ),

    withHandlers({
        changeUserInfo: (props) => values => {
            const chageUser = {
                fullName: values.fullName,
                avatar: values.avatar,
                phone: values.phone,
                location: values.location,
            };

            props.changeUserInfo(chageUser);
        }
    })
);


export default enhancer(ViewerView);