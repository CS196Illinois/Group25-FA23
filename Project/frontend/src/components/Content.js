import React from "react";
import Main from "./Main.js";


const Content = (props) => {
    return <div className={`bg-${props.variant}`}>
        <Main variant={props.variant}/>
    </div>;
};

export default Content;