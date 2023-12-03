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
                        <Text variant={props.variant} text={home_json.title} size={5} />
                        <Text variant={props.variant} text={home_json.description} size={6} />
                        
                        <div style={{height: "500px", width: "100%"}}>
                            <iframe title = "calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YTJjM2Q5OGQzNjZlNjUxY2QwZjBhYjNmMDE2MmU0ZmI2M2IzYmQ2ZTk2YWM2NGUyODEzMzJhNzI5ZmZjMWE3OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" 
                                style={{border: 0}} width="100%" height="100%" frameborder="0" scrolling="no">
                            </iframe>
                        </div>
                    </>
                }
        </Container>
    )
}

export default Home;