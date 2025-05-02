# Managing the Blog

To make managing the blog easier, I have created a script that generates blog pages from Markdown files. You can very easily write blog pages in the MD files and update the website with these instructions.




## Formatting Rules

### Starting Each Blog File
Each blog file should start with the following header:

```
---
title: [Title of the Blog Post]
date: [Date of the Blog Post]
author: [Author's Name]
image: [Path to the Image]
category: [Category of the Blog Post]
---
```

### Content
- General paragraphs: no Markdown formatting needed.
- Headings: `#` for h1, `##` for h2, `###` for h3, etc.
  - Note: h1 headings are the largest, h2 are a little smaller, etc.
- Bold: double asterisks around the text, like `**bold text**`
- Quote: `> This is a quote`



## Adding a New Blog Post
To add a new blog post, follow these steps:
1. Create a new Markdown file in the `public/blog` directory.
2. Use the header format provided above.
3. Write the content of the blog post in Markdown format.
4. Add your image to the `public/blog-images` directory and reference it in the header.
4. In the terminal, run the command `node scripts/generateBlogIndex.js` to update the blog page
5. Add the new file with `git add --a`
6. Commit your changes with `git commit -m "your commit message"`
7. Push your changes with `git push`


> [!NOTE]
> The first time you push changes, you may have to run:
> 
> ```
> git push --set-upstream origin master
> ```
