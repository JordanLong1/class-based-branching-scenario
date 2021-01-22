import React from 'react';
import QuestionLogic from './QuestionLogic';
import NavBar from './NavBar'

import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './LandingPage';

class Routes extends React.Component {
    render() {
        return (
         <div>
         <NavBar />
           <BrowserRouter>
             <Route exact path='/' component={LandingPage} />
              <Route exact path='/displayquestion' component={QuestionLogic}/>
         </BrowserRouter>
         </div>
        );
    };
};

export default Routes;
