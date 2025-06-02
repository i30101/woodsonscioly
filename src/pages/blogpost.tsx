import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import BlogPage from "../components/BlogPage";

interface BlogMeta {
    title: string;
    date: string;
    author: string;
    image: string;
    category: string;
}

function parseFrontmatter(markdown: string): { meta: BlogMeta; content: string } {
    const match = /^---([\s\S]+?)---/.exec(markdown);
    let meta: BlogMeta = {
        title: "",
        date: "",
        author: "",
        image: "",
        category: "",
    };

    let content = markdown;
    if (match) {
        const frontmatter = match[1];
        content = markdown.slice(match[0].length);
        frontmatter.split("\n").forEach((line) => {
            const [key, ...rest] = line.split(":");
            if (key && rest.length) {
                const value = rest.join(":").trim();
                if (key in meta) (meta as any)[key] = value;
            }
        });
    }
    return { meta, content };
}

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [meta, setMeta] = useState<BlogMeta | null>(null);
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/blog/${slug}.md`)
            .then((res) => res.text())
            .then((md) => {
            const { meta, content } = parseFrontmatter(md);
            setMeta(meta);
            setContent(content);
        });
    }, [slug]);

    if (!meta) return <div>Loading...</div>;

    return (
        <BlogPage
            title={meta.title}
            date={meta.date}
            author={meta.author}
            image={meta.image}
            category={meta.category}
        >
            <div className="blog-main">
                <ReactMarkdown
                    components={{
                    p: ({node, ...props}) => <p {...props} />,
                    h1: ({node, ...props}) => <h1 {...props} />,
                    h2: ({node, ...props}) => <h2 {...props} />,
                    h3: ({node, ...props}) => <h3 {...props} />,
                    h4: ({node, ...props}) => <h4 {...props} />,
                    h5: ({node, ...props}) => <h5 {...props} />,
                    h6: ({node, ...props}) => <h6 {...props} />,
                    b: ({node, ...props}) => <b {...props} />,
                    q: ({node, ...props}) => <q {...props} />,
                    ul: ({node, ...props}) => <ul {...props} />,
                    ol: ({node, ...props}) => <ol {...props} />,
                    li: ({node, ...props}) => <li {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </BlogPage>
    );
};

export default BlogPost;

