import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import PlayContainer from '../containers/play-container';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/play" component={PlayContainer} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>          
        </div>
    )
}

export default App;