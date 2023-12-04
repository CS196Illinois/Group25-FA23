import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Text from "./Text.js";

const Landing = (props) => {

    return(
        <Container variant={props.variant}>
        <div class ="landingPage">
        <Helmet><title>IlliniEvents</title></Helmet>
            <Helmet></Helmet>
                {
                    <>
                        <center>
                            <h2 font-family><b>Hello! Welcome to IlliniEvents, your one stop shop to all events happening on the UIUC campus!</b></h2>
                            <br></br>
                            <img class = "centerImg" src = "https://www.admissions.illinois.edu/Content/images/visit-virtual-visits.jpg"></img>
                        </center>
                        
                        <Text variant={props.variant} size={2}></Text>
                    </>
                }
            </div>
        </Container>
    )
}

export default Landing;