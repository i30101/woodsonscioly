# Managing the Blog

I have created a script that 


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




## Adding a New Blog Post
To add a new blog post, follow these steps:
1. Create a new Markdown file in the `public/blog` directory.
2. Use the header format provided above.
3. Write the content of the blog post in Markdown format.
4. In the terminal, run the command `node scripts/generateBlogIndex.js` to update the blog page
5. Add the new file with `git add --a`
6. Commit your changes with `git commit -m "your commit message"`
7. Push your changes with `git push`

> [!NOTE]
> The first time you push changes, you may have to run:

```
git push --set-upstream origin master
> ```
