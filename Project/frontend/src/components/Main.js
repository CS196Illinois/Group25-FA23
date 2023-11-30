import React from "react";
import NavArea from "./NavBar.js";
import { Container } from "react-bootstrap";
import "../css/main.css";
import Home from "./Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ShowEvents from "./ShowEvents";
import CreateEvent from "./CreateEvent";


const Main = (props) => {
    return(
        <BrowserRouter>
            <Container variant={props.variant} className={'mainContainer'}>
                <NavArea variant={props.variant}/>
                <HelmetProvider>
                    <Routes>
                        <Route path="*" element={<Home {...props}/>} />
                        <Route path="/home" element={<Home {...props}/>} />
                        <Route path="/events/" element={<ShowEvents {...props}/>} />
                        <Route path="/create-event/" element={<CreateEvent {...props}/>} />
                    </Routes>
                </HelmetProvider>
            </Container>
        </BrowserRouter>
    )
}

export default Main;
