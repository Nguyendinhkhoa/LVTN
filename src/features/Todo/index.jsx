import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';


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