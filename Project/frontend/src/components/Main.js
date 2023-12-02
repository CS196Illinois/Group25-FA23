import React from "react";
import NavArea from "./NavBar.js";
import { Container } from "react-bootstrap";
import "../css/main.css";
import Home from "./Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ShowEvents from "./ShowEvents";
import CreateEvent from "./CreateEvent";

import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoutes from '../utils/PrivateRoute'
import {AuthProvider} from '../context/AuthContext'



const Main = (props) => {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Container variant={props.variant} className={'mainContainer'}>
                    <NavArea variant={props.variant}/>
                    <HelmetProvider>
                        <Routes>
                                <Route path="*" element={<Home {...props}/>} />
                                <Route path="/home" element={<Home {...props}/>} />
                                <Route path="/events/" element={<ShowEvents {...props}/>} />
                                <Route path="/create-event/" element={<CreateEvent {...props}/>} />
                                <Route path="/login/" element={<LoginPage {...props}/>} />
                                <Route path="/register/" element={<RegisterPage {...props}/>} />
                            </Routes>
                    </HelmetProvider>
                </Container>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Main;
