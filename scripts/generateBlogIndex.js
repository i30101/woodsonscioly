const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../public/blog');
const OUTPUT = path.join(__dirname, '../src/blogIndex.json');

function parseFrontmatter(markdown) {
    const match = /^---([\s\S]+?)---/.exec(markdown);
    let meta = {
        title: '',
        date: '',
        author: '',
        image: '',
        category: '',
    };
    let content = markdown;
    if (match) {
        const frontmatter = match[1];
        content = markdown.slice(match[0].length);
        frontmatter.split('\n').forEach((line) => {
            const [key, ...rest] = line.split(':');
            if (key && rest.length) {
                const value = rest.join(':').trim();
                if (key in meta) meta[key] = value;
            }
        });
    }
    return { meta, content };
}

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const markdown = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
    const { meta } = parseFrontmatter(markdown);
    return { ...meta, slug };
});

fs.writeFileSync(OUTPUT, JSON.stringify(posts, null, 2));
console.log(`Indexed ${posts.length} blog posts.`);

