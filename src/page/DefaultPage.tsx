/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 14 March 2025
 *
 * Page with Navbar
 */


// local
import Page from "./Page";
import Navbar from "../components/Navbar";
import Body from "./Body";
import Footer from "../components/Footer";
import Title from "../components/Title";
import React, { useEffect } from "react";


/**
 * Page with Navbar at top
 */
class DefaultPage extends Page {
    constructor(props: any) {
        console.log("DefaultPage constructor called");

        const PageWithNav: React.FC = () => {
            useEffect(() => {
                document.title = props.title;
            }, []);

            console.log("Page with nav rendered");

            return (
                <>
                    <Navbar />
                    <Body>
                        <Title start={props.start} highlight={props.highlight} after={props.after} subtitle={props.subtitle} />
                        <props.components />
                    </Body>
                    <Footer />
                </>
            )
        }

        super({ ...props, components: PageWithNav});
    }
}


export default DefaultPage;
