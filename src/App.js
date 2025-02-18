import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import SignUp from './components/pages/sign-up';
import TempWel from './components/pages/TempWelcomePage'

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/services'
        component = { Services }
        /> <
        Route path = '/products'
        component = { Products }
        /> <
        Route path = '/sign-up'
        component = { SignUp }
        /> <
        Route path = '/Login'
        component = { Login }
        /> 
        <
        Route path = '/TempWel'
        component = { TempWel }
        />< /
        Switch > <
        /Router> < /
        >
    );
}

export default App;