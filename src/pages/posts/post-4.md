---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Fourth Blog Post
author: Alok
description: "This post will show up on its own!"
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word astro against an illustration of planets and stars."
pubDate: 2025-25-03
tags: ["astro", "successes"]
---

This post should show up with my other blog [posts](http://localhost:4321/posts/post-1/), because `import.meta.glob()` is returning a list of all my posts in order to create my list.
