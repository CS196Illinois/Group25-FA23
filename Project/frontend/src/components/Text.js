import React from "react";

const Text = (props) => {
    return (
        <div className={`text-${props.variant === "dark" ? "light": "dark"} fs-${props.size}`}>
            {props.text}
            {props.children}
        </div>
    )
}

export default Text;