---
title: "Bareblog User Manual"
date: "2025-06-03"
excerpt: "A lightweight blogging platform powered by Next.js and Markdown. This manual covers the basics of using and customizing Bareblog."
---

## Introduction

Welcome to **Bareblog**, a minimalist blogging platform built with Next.js and Markdown. This manual is intended to help you understand how Bareblog works, how to write and manage content, and how to customize the platform to fit your needs.

Bareblog is intentionally simple. It avoids unnecessary dependencies and features, making it lightweight, fast, and easy to modify.

---

## Content Location and Format

All blog content must be written in **Markdown (.md) files** and placed in the following directory:

```
/src/content
```

Each Markdown file represents a blog post and must include **frontmatter** at the top. Example:

```md
---
title: "Your Post Title"
date: "2025-05-10"
excerpt: "A short summary of your post."
tags: ["tag1", "tag2"]
---

Your markdown content goes here.
```

---

## Features

* ✅ Lightweight and fast
* ✅ Built with [Next.js](https://nextjs.org)
* ✅ Content-driven using Markdown files
* ✅ Dynamic routing by slug
* ✅ Tag support
* ✅ No heavy dependencies

---

## Customization

Bareblog is designed to be modified. You can:

* Add new fields to frontmatter
* Change styling with Tailwind CSS
* Replace components like Header, Footer, and HeroSection
* Extend routing, layouts, or content types

This makes Bareblog ideal for developers who want a flexible starting point without unnecessary complexity.

---

## Writing New Posts

1. Create a new `.md` file in `/src/content`.
2. Include the required frontmatter.
3. Write your content in Markdown.
4. Save and run your development server.

The post will be auto-discovered and routed based on the filename.

---

## Next Steps

* Customize the layout or styling
* Add metadata or social sharing
* Integrate CMS or analytics if needed

This is a starting point—you are encouraged to tailor it to your use case.

---

For installation and setup, see the `README.md`.
