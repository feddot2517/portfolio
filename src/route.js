import React from 'react';
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Mask from "./containers/Mask";
import Menu from "./components/Menu";

const BaseRouter = (props) => (
    <div>
        <Route exact path='/'>
            <Redirect to="/mask" />
        </Route>
        <Route exact path='/mask' component={Mask}/>
    </div>
);

export default BaseRouter;