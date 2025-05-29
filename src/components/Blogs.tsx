// components
import BlogPage from './BlogPage';
import Rankings from './Rankings';



export function Season2024() {
    return <BlogPage
        title="2023-2024: Season in Review"
        date="12 June 2024"
        author="Andrew Kim"
        image={`${process.env.PUBLIC_URL}/blog/season2024.jpg`}
        category="Blog"
    >
        <p>Another school year has passed, indicating the end of another Science Olympiad season. </p>
        <h1>Performance Review</h1>
        <p>The 2023-2024 Science Olympiad season was WSO's best so far. Our team earned a total of 3 trophies and 72 medals, a considerable feat and a testament to the dedication and hard work of our members. Our competitions this year were:</p>
        <ul>
            <li>Georgia Scrimmage(4th): 5 medals</li>
            <li>Fairfax Invitational (2nd): 13 medals</li>
            <li>Princeton Invitational (8th): 7 medals</li>
            <li>Fairfax Regional (1st): 32 medals</li>
            <li>Virginia States Tournament (4th): 15 medals</li>
        </ul>
        <h1>Rising Above Struggles</h1>
        <p>The successes of WSO this season were achieved despite a number of significant setbacks. Fairfax County canceled extracurricular activities on January 6th, the day of the Fairfax Invitational, despite the following day having now snow. We canceled the Carnegie Mellon two days before we left due to the incoming snowstorm. And on February 2nd, the States and Regionals teams had to compete simultaneously at the Princeton Invitational and the rescheduled Fairfax Invitationals. However, due to the hard work of all teams, we ranked 8th at Princeton and won the 2nd place trophy at Fairfax.</p>
        <h1>Season in Review: President's Remarks</h1>
        <p>Now that the season has come to a close, I would like to thank everyone on the Science Olympiad team this year for their remarkable dedication and hard work. Our students, for working on their notes and builds despite two cancelled competitions. Our officers, for serving their club on top of their difficult events. And Mrs. Babcock, for her ever-present passion and wisdom.</p>
        <p>And of course, I would like to thank our caring and supportive parents. Your commitment as volunteers, chauffeurs, and chaperones is a face of WSO that always deserves more appreciation. I thank you all for providing your children with so many resources that allowed us to succeed, and understanding the cancellations that must have been a logistical nightmare to all households.</p>
        <p>As the departing Vice President and the incoming President, I have to say that I certainly learned a lot this season. I will share those lessons with my officers, States members, and everyone else on the team to make the 2024-2025 season even better than the least. I look forward to a season filled with trophies, medals, and cheers!</p>
    </BlogPage>
}

export function September2024() {
    return <BlogPage
        title="September 2024 Newsletter"
        date="10 September 2024"
        author="James Kim"
        image={`${process.env.PUBLIC_URL}/blog/september2024.jpg`}
        category="Newsletter"
    >
        <p>First, we want to thank you all for attending our interest meeting on Wednesday, September 4th. We hope you found it informative, and we hope you had some fun too! If you were unable to attend, not to worry! All of the information shared at the interest meeting will be included in this message.</p>
        <h1>Upcoming Dates</h1>
        <p>This week, we will be holding prep sessions to help students get ready for tryouts and to answer any questions, so feel free to join us in Mrs. Babcock's room, A140, after school on <b>September 11th and 12th</b>! Tryouts testing will be on <b>September 18th and 19th in Cavalier Hall</b>; students may choose what event tests they will be taking in each block and should come prepared with the materials they need for those tests. The tryouts sign up Google Form can be found <a href="https://forms.gle/o5fifLjPfiAJ3eCQ9">here</a>. Supplies such as pencils, field guides, and calculators will not be provided for students who fail to bring their own.</p>
        <h1>Tryouts Guide</h1>
        <p>Our officers have written up guidelines, clarifications, and test expectations in the <a href="https://docs.google.com/document/d/19y7ZXFXfjoNXjuedQgDqIaNd71Adz4r87anZi_SUbeI/edit?usp=sharing">2024-2025 Tryouts Guide</a>. Tryouts tests may not necessarily follow the official Science Olympiad guidelines for this season, so please refer to your specific event's guidelines to prepare. Students planning on trying out for build events should refer to the modified <a href="https://docs.google.com/document/d/1Yf9HwpVG-B8nPU1wzOUWPqes9EywRjVg8FlBEfkbyLI/edit?usp=sharing">Electric Vehicle guidelines</a>; this will be the tryouts process for all builders regardless of event.</p>
        <h1>Build Update</h1>
        <p>The following are clarifications for build tryouts this year. If you have any questions regarding build tryouts, please reach out to the officers.</p>
        <ul>
            <li>You may use capacitors</li>
            <li>You can only use the motors provided</li>
            <li>You may not use any ICs or PCBs (or any component containing these) for the purpose of power regulation (voltage </li>conversion, current regulation, etc)
            <li>The vehicle must be powered solely by the two AA batteries</li>
            <li>No two points on the vehicle may have a electric potential of more than 3V</li>
        </ul>
    </BlogPage>
}


export function Georgia2025() {
    return <BlogPage
        title="2025 Georgia Scrimmage Results"
        date="23 October 2024"
        author="Andrew Kim"
        image={`${process.env.PUBLIC_URL}/blog/georgia2025.jpg`}
        category="Competitions"
    >
        <p>Great job to all WSO competitors! Since the 2022-2023 season, Woodson Science Olympiad has competed in the annual Georgia Scrimmage, a virtual invitational run by Georgia Science Olympiad. Drawing teams from across the nation, the Georgia Scrimmage is one of the earliest competitions and provides experience for study events.</p>
        <p>For this year's Georgia Scrimmage, Woodson Science Olympiad competitors took tests across a three-day period, from Tuesday, November 15th to Thursday, November 17th. During these days, Mrs. Babcock was crowded with exam takers for hours after school, showing the dedication of our members.</p>
        <h1>Performance Review</h1>
        <p>Woodson Science Olympiad had a strong start to its 2024-2025 season at the Georgia Scrimmage. Pitted against 88 other Division C teams, team Godzilla prevailed, ranking 2nd. This meant Woodson beat 2 other schools that attended the 2023-2024 Nationals Tournament, Marquette University High School and the Fulton Science Academy. Teams Rodan and Mothra ranked 25th and 35th, respectively, a strong showing for the Regionals teams. Individual event medals were as follows: </p>
        <Rankings year={2025} compIndex={0} />
        <p>Build Captain Matthew Lee shared his positive thoughts on the tournament's results. Given how early it is in the season, Lee believed "the studies did really great" and the team had "really exceeded expectations." In regards to Lee's personal event rankings, this Georgia Scrimmage "was my best yet." Looking ahead, Lee said "Our strong team performance gives me an optimistic outlook for the rest of the season."</p>
        <q>Our strong team performance gives me an optimistic outlook for the rest of the season.</q>
        <p>The Georgia Scrimmage was one of six competitions planned for the 2024-2025 season. Our next and last virtual invitational, hosted by Monta Vista High School, will be in mid-November. Happy studying and building!</p>
    </BlogPage>
}

export function Mvso2025() {
    return <BlogPage
        title="2025 Monta Vista Invitational Results"
        date="25 November 2024"
        author="Andrew Kim"
        image={`${process.env.PUBLIC_URL}/blog/mvso2025.jpg`}
        category="Competition"
    >
        <p>This was Woodson Science Olympiad's first year competing at the Monta Vista Invitational. Despite being early in the season, we were determined to give our builds a chance to prepare before in-person competitions later in the season. </p>
        <h1>Performance Review</h1>
        <p>Once again, Woodson stood strong against other nationally-competitive teams, ranking 4th. Most notable was team Godzilla's first place medal in Helicopter, a strong start to an event category that was difficult in previous seasons. However, some difficulties with builds were evident, with Robot Tour placing below expectations (4th) and Electric Vehicle receiving a disqualification. Despite these mishaps, we will continue to prepare for strong performances at other invitationals.</p>
        <Rankings year={2025} compIndex={1} />
    </BlogPage>
}

export function FlintHill2025() {
    return <BlogPage
        title="2025 Flint Hill Invitational Results"
        date="17 November 2024"
        author="Andrew Kim"
        image={`${process.env.PUBLIC_URL}/blog/fh2025.jpg`}
        category="Competition">
        <p>This was the inaugural competition of the Flint Hill Invitational, and Woodson's first time competing in a fall in-person invitational for many years. </p>
        <h1>Performance Review</h1>
        <p>Woodson greatly exceeded expectations at the Flint Hill Invitational, ranking 1st above Langley and Lake Braddock's teams. Also notable was the number of medals earned; 29 in total, with 12 of them being 1st place medals. </p>
        <Rankings year={2025} compIndex={2} />
        <p>Once again, we would like to thank Mrs. Babcock, parents, event supervisors, and anyone involved in facilitating our amazing performance at Flint Hill. Our incredible placings would not have been possible without you all!</p>
    </BlogPage>
}

export function Fairfax2025() {
    return <BlogPage
        title={"2025 Fairfax Invitational Results"}
        date={"12 January 2025"}
        author={"Andrew Kim"}
        image={`${process.env.PUBLIC_URL}/blog/georgia2025.jpg`}
        category={"Competition"}>
        <p>Test</p>
    </BlogPage>
}