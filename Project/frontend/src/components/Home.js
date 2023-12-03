import React from "react";
// import 'logo192.png';
import { Container, Image } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Text from "./Text.js";

const Home = (props) => {
    const home_json = JSON.stringify('home.json')

    return(
        <Container variant={props.variant}>
            <Helmet><title>IlliniEvents</title></Helmet>
                {
                    <>
                        {/* <Image src={'logo192.png'} width={150} height={150} fluid roundedCircle /> */}
                        <Text variant={props.variant} text={home_json.title} size={5} />
                        <Text variant={props.variant} text={home_json.description} size={6} />
                    </>
                }
        </Container>
    )
}

export default Home;