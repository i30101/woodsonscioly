/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 26 March 2025
 */


import React from "react";
import blogIndex from "../blogIndex.json";


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
        {blogIndex.map((blog: any) => (
            <BlogContainer
                key={blog.slug}
                title={blog.title}
                date={blog.date}
                image={`${process.env.PUBLIC_URL}${blog.image}`}
                category={blog.category}
                path={`/blog/${blog.slug}`}
            />
        ))}
    </div>
);



export default blog;
