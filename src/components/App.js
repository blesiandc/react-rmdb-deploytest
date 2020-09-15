import React from 'react';

import { Router } from '@reach/router';

import Home from './Home';
import Header from './elements/Header';

import { GlobalStyle } from './styles/GlobalStyle';
import Movie from './Movie';
import NotFound from './NotFound';



const App = () => 
    <div>
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
       <GlobalStyle />
       
       
    </div>
    ;

export default App;
