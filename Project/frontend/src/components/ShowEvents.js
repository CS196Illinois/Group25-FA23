import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import AuthContext from '../context/AuthContext';


const ShowEvents = () => {

    const [events, setEvents] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    const getEvents = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        if (response.status === 200) {
            setEvents(response.data)
        } else if (response.statusText === "Unauthorized") {
            logoutUser()
        }
        
    }

    useEffect(() => {
        getEvents();
    }, [])



    return (
        <div>
            <h1>
                Events: 
            </h1>
            <ul>
                {events.map((event) => (
                    <div key={event.id}>
                        <p>Event: {event.event_name}</p>
                        <p>Description: {event.description}</p>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ShowEvents;