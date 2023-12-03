import React, { useContext } from 'react'
import { DisplayModeContext } from '../App'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import '../css/util.css';
import Text from './Text.js';

const ToggleMode = (props) => {
    const {isLight, setIsLight} = useContext(DisplayModeContext);

    return(
        <>
            <button onClick={() => setIsLight(isLight === "light" ? "dark" : "light")} class="displaytoggle without_outline">
                {isLight === "light" ? 
                    <BsFillMoonFill size={15} color="black" /> : 
                    <BsSunFill size={15} color="white" />
                }
                <Text size={7} {...props}>{isLight === "light" ? "Dark" : "Light"}</Text>
            </button>
        </>
    )
}

export {ToggleMode};