/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 28 May 2025
 */


// external libraries
import React from "react";
import {useState, ReactNode} from "react";


// local
import PlacingList from "../components/PlacingList";



const teamNames = {
    "2025": ["Team Godzilla", "Team Rodan", "Team Mothra"],
    "2024": ["Team Europa", "Team Callisto", "Team Io"],
    "2023": ["Team Aang", "Team Katara", "Team Zuko"],
    "2022": ["Team Coelacanth", "Team Oarfish", "Team Sunfish"]
};



// all teams
const allTeams = {
    "2025": [
        ["Ian Gonzalez", "Elaina Wi", "Ivy Zhao", "James Kim", "Nick Tong", "Mia Monroe", "Jamie Kim", "Vibu Vishnu Ram", "Catherine Han", "Matthew Lee", "Timothy Lin-Lee", "Andrew Kim", "Morgan Altier", "Katie Yen", "Ada Qin"],
        ["Nora Islam", "Ryan Chong", "Yeeun Kwak", "Richard He", "Enoch Tan", "Maddie Cho", "Brian Soltani", "Shaheer Khan", "Maggie Wang", "Dylan Nguyen", "Krish Stauber", "Maria Wang", "Laurent Pham", "Daniel Barnabas", "Josefien Declerk"],
        ["Madison Williams", "Ben Kralovec", "Amanda Martin", "Maya Smith", "Khoa Nguyen", "Harun Khan", "Emily Pan", "Hanru Xu", "Brian Vu", "Chenfei Zhou", "Nathan Nguyen", "WynSon Phan", "Esther Li", "Clive Song", "Sophia Li"]
    ],
    "2024": [
        ["Zahra Ramakdawala", "Ian Gonzalez", "James Kim", "Lavanya Mahajan", "Benjamin Hall", "Mia Monroe", "Boram Min", "Cassie Liu", "Matthew Lee", "Andrew Kim", "Sophia Huh", "Morgan Altier", "Ada Qin", "Enzo Hiu", "Katie Yen"],
        ["Madison Williams", "Brian Soltani", "Sariya Juntima", "Audrey Kan", "Enoch Tan", "Richard He", "Harun Khan", "Anh Phan", "Lucas Shen", "Heman Bekele", "Kyle Fernandez", "Nathan Nguyen", "Brian Vu", "Meklit Demile", "Lien Nguyen"],
        ["Elaina Wi", "Breanna Ngo", "Ivy Zhao", "Jamie Kim", "Nick Tong", "Esther Hwang", "Hannah Do", "Kevin Benoy", "Jacob Lee", "Shaheer Khan", "Austin Cui", "Dylan Nguyen", "WynSon Phan", "Catherine Han", "Sailee Varde"]
    ],
    "2023": [
        ["Hailey Pan", "Sophia Huh", "Zahra Ramakdawala", "Kevin Benoy", "Temm Phan", "Leo Lee", "Viet Huynh", "Matthew Lee", "Aaron Li", "Cyrus Collins", "Ben Hall", "Andrew Kim", "Lavanya Mahajan", "Austin Cui", "Ada Qin"],
        ["Christopher Hwang", "James Kim", "Rushil Punukollu", "Enzo Hiu", "Joseph Tso ", "Stephen Labys", "Emily Cui", "Boram Min", "Breanna Ngo", "Nick Tong ", "Ivy Zhao", "Catherine Han", "Andrew Zheng", "Brian Vu", "Andre Mao"],
        ["Christine Nguyen", "Alice Lee", "Srivi Komireddy", "Nick Siew", "Indra Ranjan", "Cassie Liu", "Morgan Altier", "Jason Yoder", "Sonan Sahgal", "Susan Wang Andera", "Ryanne Juntima", "Hannah Do", "Enoch Tan", "Shaheer Khan", "Yool Lim"]
    ],

    "2022": [
        ["Nicole Choe", "Hailey Pan", "Emily Nguyen", "Daniel Sitrin", "Pierre Tran", "Ja Zhua Cheng", "Sammy Kee", "Junting Huo", "Temm Phan", "Leo Lee", "Matthew Lee", "Aaron Li", "Austin Cui", "Austin Song", "Zahra Ramakdawala"],
        ["Thomas Guo", "Boram Min", "Jason Valdez", "Markus Lin", "Joseph Tso ", "Rushil Punukollu", "Lavanya Mahajan", "Quan Huynh", "Cyrus Collins", "Enzo Hiu", "Nour Mohamed", "Sophia Huh", "Bomi Shin", "Sariya Juntima", "Emily Cui"],
        ["May Paek", "Sebastian Freemeyer", "Andrew Kim", "Viet Huynh", "Stephen Labys", "Kevin Benoy", "Gio Park", "Pranaav Yelchuru", "Isabella Anderson", "William Brenningmeyer", "Christine Nguyen", "Breanna Ngo", "Catherine Han", "Benjamin Hall", ""]
    ],
};


interface TableProps {
    names: string[]
    members: string[][];
}

const MemberTable: React.FC<TableProps> = ({names, members}) => {
    return <table className="table">
        <thead>
        <tr>
            {Array.from({length: 3}, (_, i) => (
                <th className="team-head">{names[i]}</th>
            ))}
        </tr>
        </thead>
        <tbody>
        {Array.from({length: 15}, (_, i) => (
            <tr className="team-row">
                {members.map((team, _) => (
                    <td className="team-data">{team[i]}</td>
                ))}
            </tr>
        ))}
        </tbody>
    </table>
}



interface AccordionItemProps {
    year: number;
    names: string[];
    members: string[][];
    parent: string;
    collapsed: boolean;
    children?: ReactNode;
}


/**
 * Creates individual accordion section
 * @param year the last year of the season
 * @param names the team names
 * @param members list of members per team
 * @param parent id of parent accordion container
 * @param collapsed whether the content is collapsed or not
 * @param content additional html to be included
 * @returns
 */

const SeasonAccordion: React.FC<AccordionItemProps> = ({year, names, members, parent, collapsed, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    const headingID = "heading" + year;
    const contentID = "div" + year;

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    // create accordion item container
    return (
        <div className="accordion-item" id={"accordion" + year}>
            <h2 className="accordion-header" id={headingID}>
                <button
                    className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-target={"#" + contentID}
                    aria-expanded={collapsed}
                    aria-controls={contentID}
                    onClick={handleToggle}
                >
                    {year - 1 + "-" + year + " Season"}
                </button>
            </h2>

            <div
                id={contentID}
                className={`accordion-collapse collapse ${!isCollapsed ? 'show' : ''}`}
                aria-labelledby={headingID}
                data-bs-parent={parent}
            >
                <MemberTable names={names} members={members} />
                {children}
            </div>
        </div>
    );
}


const parentID = "teamAccordion";


const team: React.FC = () => (
    <>
        <div className="primary-section" data-aos="fade-up">
            <div className="heading-1" data-aos="fade-up">2024-2025 Season Team</div>
            <MemberTable names={teamNames[2025]} members={allTeams[2025]}/>
            <PlacingList
                year={2025}
                titles={["Season Summary", "Georgia Scrimmage", "Monta Vista Invitational", "Flint Hill Invitational", "Fairfax Invitational", "Princeton Invitational", "UMW Regional", "States"]}
                first={
                    <div>
                        <div className="season-text">133 medals</div>
                        <div className="season-text">Alternates: Christian Yoo, Humphrey, Lien Nguyen, Sophia Nguyen, Esther Hwang</div>
                    </div>
                } />
        </div>

        <div className="primary-section" data-aos="fade-up">
            <div className="heading-1" data-aos="fade-up">Previous Seasons</div>
            <div data-aos="fade-up" className="accordion" id={parentID}>
                <SeasonAccordion year={2024} names={teamNames[2024]} members={allTeams[2024]} parent={parentID} collapsed={true}>
                    <PlacingList
                        year={2024}
                        titles={["Season Summary", "Georgia Scrimmage", "Fairfax Invitational", "Princeton Invitational", "Fairfax Regional", "States" ]}
                        first={
                            <div>
                                <div className="season-text">72 medals</div>
                                <div className="season-text">3 trophies</div>
                                <div className="season-text">Alternates: Christopher Hwang, Sonan Sahgal, Samuel Indyk</div>
                            </div>
                        }
                    />
                </SeasonAccordion>
                <SeasonAccordion year={2023} names={teamNames[2023]} members={allTeams[2023]} parent={parentID} collapsed={true}>
                    <PlacingList
                        year={2023}
                        titles={["Season Summary", "Georgia Scrimmage", "Fairfax Invitational",  "Princeton Invitational", "Thomas Jefferson Regional", "States" ]}
                        first={
                            <div>
                                <div className="season-text">54 medals</div>
                                <div className="season-text">3 trophies</div>
                            </div>
                        }
                    />
                </SeasonAccordion>
                <SeasonAccordion
                    year={2022}
                    names={teamNames[2022]}
                    members={allTeams[2022]}
                    parent={parentID}
                    collapsed={true}
                />
            </div>
        </div>
    </>
);


export default team;
