/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 28 March 2025
 */


// external libraries
import React from "react";
import Body from "../page/Body";
import ActionButton from "../components/ActionButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


interface QuoteProps {
    author: string;
    position: string;
    children: React.ReactNode;
}


/**
 * Creates quote box
 * @param author person who said quote
 * @param position title or team position
 * @param children contents
 * @constructor to make quotes
 */
function Quote({author, position, children}: QuoteProps) {
    return <div className={"quote-box"} data-aos={"fade-up"}>
        <div className={"quote-text"}>{children}</div>
        <div className={"quote-info"}>
            <div className={"quote-icon-container"}>
                <img src={`${process.env.PUBLIC_URL}/icons/quote.svg`} alt={"quote-icon"} />
            </div>
            <div className={"quote-details"}>
                <div className={"quote-author"}>{author}</div>
                <div className={"quote-position"}>{position}</div>
            </div>
        </div>
    </div>
}



const home: React.FC = () => (
        <>
            <Navbar />

            <Body>
                <div id="intro">
                    <h1 data-aos="fade-up" id="title">
                        C. G. Woodson <span className="highlight">Science Olympiad</span>
                    </h1>
                    <h6 data-aos="fade-up" data-aos-delay="150" id="subtitle">Pioneers in science, engineering, and inter-disciplinary exploration
                    </h6>
                    <div data-aos={"fade-up"}>
                        <ActionButton text={"Learn More"} href={"/team"} />
                    </div>
                </div>
                <div className={"primary-section index-section"} id={"main"} data-aos={"fade-up"}>
                    <h1 className={"heading"}>What is Science Olympiad?</h1>
                    <div className={"subheading"}>Learn about the program</div>
                    <div className={"about"}>
                        <div className={"about"}>
                            {(() => {
                                const aboutContents = [
                                    {
                                        name: "Events",
                                        children: (
                                            <>Science Olympiad consists of <b>23 events</b> that cover various topics ranging from chemistry to earth science and electrical engineering to anatomy. As a former Woodson Science Olympiad president once said, it's like a <b>track meet</b> for nerds!</>
                                        )
                                    },
                                    {
                                        name: "Preparation",
                                        children: (
                                            <>There are different types of events. For <b>study events</b>, you make a binder or a cheat sheet. For <b>builds</b>, you construct a physical machine. For <b>labs</b> and <b>hybrids</b>, you study and prepare for a hands-on examination.</>
                                        )
                                    },
                                    {
                                        name: "Competition",
                                        children: (
                                            <>Schools and universities around the country hold tournaments. We've been to invitationals at the <b>National Cathedral</b>, <b>Princeton</b>, and <b>Yale</b>. The States tournament we attend every year is held at the <b>University of Virginia</b>.</>
                                        )
                                    }
                                ];

                                return (
                                    aboutContents.map((content, _) => (
                                        <div className={"about-row row"} data-aos={"fade-up"}>
                                            <div
                                                className={"about-icon-container col-xs-12 col-sm-12 col-md-2 col-lg-2"}>
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/icons/${content.name.toLowerCase()}.svg`} alt={content.name} className={"about-icon"}/>
                                            </div>
                                            <div className={"about-content col-xs-12 col-sm-12 col-md-10 col-lg-10"}>
                                                <div className={"about-name"}>{content.name}</div>
                                                <div className={"about-children"}>{content.children}</div>
                                            </div>
                                        </div>

                                    ))
                                );
                            })()}
                        </div>
                    </div>
                </div>

                <div className={"primary-section index-section"} data-aos={"fade-up"}>
                    <h1 className={"heading"}>Our Values</h1>
                    <div className={"subheading"}>
                        Our club's values are the foundation on which we collaborate, compete, and excel.
                    </div>
                    <div className={"row"}>
                        {(() => {
                            const valueContents = [
                                {name: "Collaboration", description: "We work as a team"},
                                {name: "Integrity", description: "Fair treatment and an equal chance to compete"},
                                {name: "Opportunity", description: "Every member can reach their fullest potential"},
                                {name: "Excellence", description: "Our competitors are among the best in the state"}
                            ];

                            return (
                                valueContents.map((content, _) => (
                                    <div className={"value-container value-col col-xs-12 col-sm-12 col-md-3 col-lg-3"}
                                         data-aos={"fade-up"}>
                                        <div className={"value-icon-container"}>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/icons/${content.name.toLowerCase()}.svg`} alt={content.name}/>
                                        </div>
                                        <div className={"value-name"}>{content.name}</div>
                                        <div className={"value-description"}>{content.description}</div>
                                    </div>
                                ))
                            );
                        })()}
                    </div>
                </div>

                <div className={"primary-section index-section"} data-aos={"fade-up"}>
                    <div className={"row"}>
                        <div className={"side-text col-xs-12 col-sm-12 col-md-4 col-log-4"}>
                            <h1 className={"heading"}>What our <span className={"highlight"}>members</span> say</h1>
                            <div className={"subheading"}>Hear from current Woodson science Olympiad members and alumni</div>
                            <ActionButton text={"Meet Our Officers"} href={"/leadership"} />
                        </div>

                        <div className={"col-xs-12 col-sm-12 col-md-4 col-log-4"}>
                            <Quote author={"Hannah Do"} position={"Class of '24"}>
                                Mrs. Babcock's room is super nice and cozy, and the back is always overflowing with
                                Scioly materials.
                            </Quote>
                            <Quote author={"Ada Qin"} position={"States member, Class of '26"}>
                                Working with a group is really big for me. When I'm surrounded by people who are just as
                                committed as I am, it pushes me to work harder. Not only do you make friends, but you
                                also learn so much.
                            </Quote>
                        </div>

                        <div className={"col-xs-12 col-sm-12 col-md-4 col-log-4"}>
                            <Quote author={"Andrew Kim"} position={"President, Class of '25"}>
                                Woodson Scioly is so much more than studying and taking tests. We ate, traveled, watched
                                the World Cup, and played basketball last season as well. I hope future members will
                                enjoy it as much as I did last season.
                            </Quote>
                            <Quote author={"Nick Tong"} position={"Secretary, Class of '25"}>
                                Science Olympiad is a gateway for many opportunities, and it itself is an amazing
                                opportunity.
                            </Quote>
                        </div>
                    </div>
                </div>
            </Body>

            <Footer />
        </>
);

export default home;
