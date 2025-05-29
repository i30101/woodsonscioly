/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 20 May 2025
 */


import React from "react";

interface ActionButtonProps {
    text: string;
    href: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, href }) => {
    return (
        <a href={href} className={"action-button"}>{text}</a>
    );
}

export default ActionButton;
