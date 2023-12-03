import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Text from "./Text.js";

const Home = (props) => {

    return(
        <Container variant={props.variant}>
            <Helmet><title>IlliniEvents</title></Helmet>
                {
                    <>
                        <Text variant={props.variant} size={5}>Title</Text>
                        <Text variant={props.variant} size={6}>Description</Text>
                    </>
                }
        </Container>
    )
}

export default Home;