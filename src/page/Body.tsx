/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 15 March 2025
 */


import React from "react";


const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div id={"body"} data-={"fade-up"}>
            {children}
        </div>
    );
}

export default Body;