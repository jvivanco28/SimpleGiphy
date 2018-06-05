import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PAGE_SEARCH, PAGE_RANDOM, PAGE_TRENDING } from '../common/Constants';
import Search from './Search';
import Trending from './Trending';
import Random from './Random';
import Home from './Home';

const routes = () => {
    return (
        <Switch>
            <Route path={`${PAGE_SEARCH}`} exact component={Search}/>
            <Route path={`${PAGE_RANDOM}`} exact component={Random}/>
            <Route path={`${PAGE_TRENDING}`} exact component={Trending}/>
            <Route path="/" exact component={Home} />
            <Redirect to="/"/>
        </Switch>
    );
};

export default routes;

