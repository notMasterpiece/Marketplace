import {connect} from 'react-redux';
import {compose, lifecycle, withHandlers, withState} from 'recompose';
import { withRouter } from 'react-router-dom';
import HeaderSearchView from './HeaderSearchView';

import {searchAction} from '../../../modules/search/searchActions';

const enhancer = compose(
    withRouter,
    connect((state, props) => ({
    }), {searchAction}),
    withState('search', 'setSearch', ''),
    withHandlers({
        doSearch: props => () => {
            props.searchAction(props.search)
        },
        removeSearch: props => () => {
            props.setSearch('');
            props.searchAction('');
        }
    }),
    lifecycle({
        componentDidMount() {}
    })
);


export default enhancer(HeaderSearchView);