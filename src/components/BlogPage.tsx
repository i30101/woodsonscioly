import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "../page/Body";

interface BlogProps {
    children: React.ReactNode;
    title: string;
    date: string;
    author: string;
    image: any;
    category: string;
}

const BlogPage: React.FC<BlogProps> = ({children, title, date, author, image, category}) => {
    useEffect(() => {
        document.title = title + " | Woodson Science Olympiad";
    }, [title]);

    return <>
        <Navbar />
        <Body>
            <div className="intro-container">
                <div className="blog-title" data-aos="fade-up">{title}</div>
                <div className="blog-subtitle" data-aos="fade-up" data-aos-delay="150">
                    <span className="blog-preview-category">{category}</span>
                    <span className="blog-date">{date}</span>
                </div>
                <img src={image} className="blog-image" data-aos="fade-up" data-aos-delay="200" alt={image}/>
            </div>

            <div className="blog-body row" data-aos="fade-up">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <div className="detail-label">Date</div>
                    <div className="detail">{date}</div>
                    <div className="detail-label">Author</div>
                    <div className="detail">{author}</div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 blog-main">
                    {children}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
            </div>
        </Body>
        <Footer />
    </>
}

export default BlogPage;

