import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import ProjectList from './components/pages/ProjectList';
import ProjectDetail from './components/pages/ProjectDetail';



//https://teamtreehouse.com/community/how-do-i-resolve-history-is-marked-required-when-value-is-undefined
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/projects" component={ProjectList}/>
                        <Route exact path="/projects/:projectId" component={ProjectDetail}/>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;
