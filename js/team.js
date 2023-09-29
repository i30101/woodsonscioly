    // team names
let teamNames = {
    "2024": ["Team Europa", "Team Callisto", "Team Io"],
    "2023": ["States", "Regionals 1", "Regionals 2"],
    "2022": ["States", "Regionals 1", "Regionals 2"]
};



// all teams
let allTeams = {
    "2024": [
        ["Zahra Ramakdawala", "Ian Gonzalez", "James Kim", "Lavanya Mahajan", "Benjamin Hall", "Mia Monroe", "Boram Min", "Cassie Liu", "Matthew Lee", "Andrew Kim", "Sophia Huh", "Morgan Altier", "Ada Qin", "Enzo Hiu", "Katie Yen"],
        ["Madison Williams", "Brian Soltani", "Sariya Juntima", "Audrey Kan", "Enoch Tan", "Richard He", "Sonan Sahgal", "Anh Phan", "Lucas Shen", "Heman Bekele", "Kyle Fernandez", "Nathan Nguyen", "Brian Vu", "Meklit Demile", "Stephen Labys"],
        ["Elaina Wi", "Breanna Ngo", "Ivy Zhao", "Jamie Kim", "Nick Tong", "Esther Hwang", "Hannah Do", "Kevin Benoy", "Samuel Indyk", "Shaheer Khan", "Austin Cui", "Dylan Nguyen", "WynSon Phan", "Catherine Han", "Sailee Varde"]
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


function getTeam(teamParam) {
    let teamElement = document.getElementById(`table${teamParam}`);
    let output = "<br><table class='table'>";

    output += "<thead><tr>";
    teamNames[teamParam].forEach(team => output += `<th scope='col'>${team}</th>`);
    output += "</tr></thead>";

    output += "<tbody>";
    for(let i = 0; i < 15; i++) {
        let row = "<tr>";
        for(let team of allTeams[teamParam]) {
            row += `<td>${team[i]}</td>`;
        }
        output += row;
    }
    output += "</tbody>"

    output += "</table>"
    teamElement.innerHTML = output;
}

getTeam('2024');