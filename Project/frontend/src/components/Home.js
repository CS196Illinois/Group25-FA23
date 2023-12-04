import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Text from "./Text.js";

const Home = (props) => {

    return(
        <div class="landingPage">
            <Helmet></Helmet>
                {
                    <>
                        <h1 class="boldText"><b>Events Calendar</b></h1>
                        <br />
                        <div style={{height: "500px", width: "100%"}}>
                            <iframe title = "calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YTJjM2Q5OGQzNjZlNjUxY2QwZjBhYjNmMDE2MmU0ZmI2M2IzYmQ2ZTk2YWM2NGUyODEzMzJhNzI5ZmZjMWE3OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" 
                                width="100%" height="100%" frameborder="0" position="relative">
                            </iframe>
                        </div>
                    </>
                }
        </div>
    )
}

export default Home;