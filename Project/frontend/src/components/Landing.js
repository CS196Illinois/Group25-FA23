import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Text from "./Text.js";

const Landing = (props) => {

    return(
        <Container variant={props.variant}>
        <Helmet><title>IlliniEvents</title></Helmet>
            <Helmet></Helmet>
                {
                    <>
                        <Text variant={props.variant} size={2}>Home</Text>
                    </>
                }
        </Container>
    )
}

export default Landing;