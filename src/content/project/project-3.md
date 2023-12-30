---
title: 'Blog list'
description: "A user authenticated fullstack blog list app to maintain and like blogs."
visit_link_label: "Visit Bloglist app"
visit_link: "https://bloglist-redux.fly.dev/"
updatedDate: "2023-03-21"
badge: "React"
heroImage: "/images/blog_logo.webp"
tags: ['react', 'freecoursesonline', 'helsinkiuniversity']
---
# Credentials
Use the following credentials to view the app
    user: guest
    password: thankyou

# Blog list app
This is a fullstack app developed in React, node.js, and mongodb to keep and maintain a list of favorite blogs. Anyone can vote on a blog, to let it show upper on the list, but only created users can add blogs. For now, no users can be added in the UX, users are created through an api call to the backend. Entitled users, for gated access use credentials above, can view the blogs the users have created, and vote for the blogs.

# Why
Early 2023 I took the fullstack javascript course (MOOC) held by Helsinky University. This course is highly recommeded for anyone who wants to get up to date with modern web application development by the way. One of the projects to complete during the course was creating a blog site. I spent lot of time using the UI components of MaterialUI from Google, so I figured out, that this project should be of interest to anyone interested in seeing a straight forward implementation of MaterialUI library.

# How it was built
A fullstack project built with React, Node.js, Express, and MongoDB. Single repository with frontend code contained as production build javascript code in a static folder, and where the backend code runs express middleware. Uses local storage on browser to store a 24 hour valid jwt token for private content access. For frontend it uses MaterialUI components, Redux for the more complex state logic, Route for navigation, use-hooks for initial effects and user login.

## Decisions made
### Fronted
- Login is implemented with a JWT token
- Redux is used to maintain state for blogs, notifications, and users
### Backend
- Middleware used: request logger, unknown endpoint, error handler, user extractor from request, blog router, user router, login router and comments router
- Mongoose was selected as a bridge to Atlas MongoDB repository
- api is accessed through baseUrl /api/<entity>
### Deploy
- Hosted on [fly.io](https://fly.io) with locally run scripts for deployment
- Secrets are stored on fly application settings

## Packages used
### Frontend
- "@emotion/react": "^11.11.1",
- "@emotion/styled": "^11.11.0",
- "@fontsource/roboto": "^5.0.3",
- "@mui/icons-material": "^5.11.16",
- "@mui/material": "^5.13.5",
- "@reduxjs/toolkit": "^1.9.5",
- "axios": "^1.4.0",
- "prop-types": "^15.8.1",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-redux": "^8.0.7",
- "react-router-dom": "^6.13.0",
- "react-scripts": "5.0.1",
- "redux": "^4.2.1"
### Backend
- bcrypt
- cors
- cross-env
- dotenv
- express
- express-async-errors
- jsonwebtoken
- lodash
- mongoose
- mongoose-unique-validator

## Lessons learned
For React and Redux, although the logic should be contained as much as possible inside the applied component, the integration logic still needs to happen very high up in the component hierarchy. E.g., when a deep down component flags for a change and need for UX update, the orchestrator for the event that bubbles up still needs to be implemented on the Apps.js React file.

## What to improve or make different next time
- Add user maintenance pages

## Tech stack
- [React](https://react.com)
- [Node.js](https://nodejs.org/en)
- [Material UI](https://mui.com/)