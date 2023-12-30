---
title: 'Portfolio'
description: "A personal portfolio built with Astro."
visit_link_label: "Visit portfolio (this site)"
visit_link: "https://www.patriciosobrado.com"
updatedDate: "2023-03-30"
badge: "Astro"
heroImage: "/images/me.png"
tags: ['astro']
---


# Portfolio app
This is a pure frontend app build with astro as a Javascript framework.

# Why
Needed a place where to gather ideas and showcase small projects to showcase my collected knowledge. Following @midudev, I discovered this static and very fast alternative to React.

# How it was built
I started from a template made by [https://github.com/manuelernestog/astrofy](https://github.com/manuelernestog/astrofy) which I recommend as a good starter. I had to tweak it though to make it comply with my idea of what I wished to present.

## Decisions made
### Fronted
- Make links visible using DaisyUI button components
- Add a preact component to switch greeting language at index.js
- Expanded badge and tags usage

### Deploy
- Hosted on [https://www.netlify.com/](https://www.netlify.com/) with a direct link to Github repository.


## Packages used
- astro
- daisyui
- preact

## Lessons learned
Static and dynamic routing are an excellent choice to allow for markdown content to be embedded within an astro template.

## What to improve or make different next time
- Apply filtering by tags of badges for blog posts and projects.

## Tech stack
- [Astro](https://astro.build/)
- [DaisyUI](https://daisyui.com/)
- [Material UI](https://mui.com/)
- [https://www.netlify.com/](https://www.netlify.com/)