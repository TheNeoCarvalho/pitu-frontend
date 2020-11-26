import React from 'react'

import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import RedirectPage from '../pages/RedirectPage'
import StatsPage from '../pages/StatsPage'
import NotFoundPage from '../pages/NotFoundPage'

function Routes(){
    return(
        <Browser>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/:code" component={RedirectPage}/>
                <Route exact path="/:code/stats" component={StatsPage}/>
                <Route exact path="/*" component={NotFoundPage}/>
            </Switch>
        </Browser>
    )
}

export default Routes