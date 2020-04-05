import React, {Suspense} from 'react'
import './App.scss';
import {SomeForm} from "./customers/SomeForm";
import {Route, Switch} from 'react-router-dom'
import Home from "./home/Home";
import {Nav, Navbar} from "react-bootstrap";

const App = () => {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Sample app</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="accounts">Accounts</Nav.Link>
                        <Nav.Link href="customers">Customer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/accounts">
                        <SomeForm/>
                    </Route>
                    <Route path="/customers">
                        <SomeForm/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
