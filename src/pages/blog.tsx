/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 26 March 2025
 */


import React from "react";





interface BlogContainerProps {
    title: string;
    date: string
    image: any;
    category: string;
    path: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({title, date, image, category, path}) => {
    return <a href={path} className="blog-preview-container col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
        <img src={image} className="blog-preview-image" alt={image}/>
        <span className="blog-preview-category">{category}</span>
        <div className="blog-preview-title">{title}</div>
        <div className="blog-preview-date">{date}</div>
    </a>
}


const blog: React.FC = () => (
    <div className="primary-section row">
        {/*<BlogContainer title={"2025 Mary Washington Regional Results"} date={"March 2nd, 2025"} image={`${process.env.PUBLIC_URL}/blog/fh2025.jpg`} category={"Competitions"} path={"./blog/fairfax2025"} />*/}
        {/*<BlogContainer title={"2025 Princeton Invitational Results"} date={"February 3rd, 2025"} image={`${process.env.PUBLIC_URL}/blog/fh2025.jpg`} category={"Competitions"} path={"./blog/fairfax2025"} />*/}
        {/*<BlogContainer title={"2025 Fairfax Invitational Results"} date={"January 12th, 2025"} image={`${process.env.PUBLIC_URL}/blog/fh2025.jpg`} category={"Competitions"} path={"./blog/fairfax2025"} />*/}
        <BlogContainer title={"2025 Flint Hill Invitational Results"} date="December 17th, 2024" image={`${process.env.PUBLIC_URL}/blog/fh2025.jpg`} category="Competitions" path="/blog/fh-2025" />
        <BlogContainer title={"2025 Monta Vista Invitational Results"} date="November 25th, 2024" image={`${process.env.PUBLIC_URL}/blog/mvso2025.jpg`} category="Competitions" path="/blog/mvso-2025"/>
        <BlogContainer title={"2025 Georgia Scrimmage Results"} date="October 24th, 2024" image={`${process.env.PUBLIC_URL}/blog/georgia2025.jpg`} category="Competitions" path="/blog/georgia-2025"/>
        <BlogContainer title={"September 2024 Newsletter"} date="September 10, 2024" image={`${process.env.PUBLIC_URL}/blog/september2024.jpg`} category="Newsletter" path="/blog/september-2024"/>
        <BlogContainer title={"2023-2024: Season in Review"} date="June 12th, 2024" image={`${process.env.PUBLIC_URL}/blog/season2024.jpg`} category="Blog" path="/blog/season-2024"/>
    </div>
);



export default blog;
