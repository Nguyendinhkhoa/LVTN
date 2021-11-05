import React from 'react';
// import PropTypes from 'prop-types';
// import TodoList from './components/TodoList';
import queryString from 'query-string';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
// import NotFound from '../../components/NotFound';
// TodoFeature.propTypes = {
    
// };

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoid`} component={DetailPage} exact></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;