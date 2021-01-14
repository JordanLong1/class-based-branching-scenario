import React from 'react';
import QuestionLogic from './QuestionLogic';
import NavBar from './NavBar'

import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import { EndOfBranchDisplay } from './EndOfBranchDisplay';

class Routes extends React.Component {
    render() {
        return (
         <div>
         <NavBar />
           <BrowserRouter>
             <Route exact path='/' component={LandingPage} />
              <Route exact path='/displayquestion' component={QuestionLogic}/>
              <Route exact path='/endbranch' component={EndOfBranchDisplay}/>
         </BrowserRouter>
         </div>
        );
    };
};

export default Routes;
