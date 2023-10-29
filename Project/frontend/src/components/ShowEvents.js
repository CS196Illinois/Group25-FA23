import React, {useState, useEffect} from 'react';
import axios from "axios";


const ShowEvents = () => {

    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await axios.get('http://localhost:8000/')
        setEvents(response.data)
    }

    useEffect(() => {
        getEvents();
    }, [])



    return (
        <div>
            <h1>
                Events: 
            </h1>
            {
                events.map((event,index) => (
                    <div>
                        <p>Event: {event.event_name}</p>
                        <p>Description: {event.description}</p>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                    </div>
                )
                )
            }
        </div>
    );
};

export default ShowEvents;