import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Layout from './Layout';
import Home from '../Home/Home';


function Routes(props) {
    return (

        <Layout>
            <Switch>
                <Route {...props} path="/" exact component={Home}/>
            </Switch>
        </Layout>

    )
}

export default Routes
