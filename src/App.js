import React from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


export default function App() {
    // for testing 
    const user = true;
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/register">
                    {/* if there is a user don't go to register page but go to home page */}
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">
                    {user ? <Home /> : <Login/>}
                </Route>
                <Route path="/write">
                    {/* if there is a user go to Write page otherwise go to Register */}
                    {user ? <Write /> : <Register />}
                </Route>
                <Route path="/settings">
                    {/* if there is a user go to Settings page otherwise go to Login */}
                    {user ? <Settings /> : <Register />}
                </Route>
                <Route path="/post/:postId">
                    <Single />
                </Route>
            </Switch>    
        </Router>
    )
}
