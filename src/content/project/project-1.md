---
title: 'Timer'
description: "Simple half stack React tool to measure elapsed time on a project."
visit_link_label: "Visit Timer app"
visit_link: "https://timer-8lb.pages.dev/"
updatedDate: "2023-03-21"
badge: "React"
heroImage: "/images/react_logo192.webp"
tags: ['react', 'mantine', 'elapsedtime', 'javascript']
---

# Timer
Simple tool to measure elapsed time on a project or task. It stores the elapased time in local sessionStorage, thus any refresh or browser restart will maintain elapsed time. You can change the project name of the project, and open a separate tab for each project you want to track. You can set the start time too, and  nearly no limitation on elapsed time. The counter is second based.

# Why
When working through the MOOC course at Helsinki University for Fullstack JS, upon submitting the exercises, I had to mention the time spent on the course and programming for each part. I soon realized it would be hard for me to keep track manually, so I felt an app to keep track of elapsed time would be beneficial. There are plenty of solutions out there but most of them have a lot of ads and cookeies that I wished not to have. 

# How it was built
Built with React, thus this is a half-stack app, i.e. only frontend. 
![Timer | Elapsed time counter](/images/timer_screenshot_260_500.webp)
Deployed on [Cloudfare](https://dash.cloudflare.com/) server pages a [Timer](https://timer-8lb.pages.dev/).
Code repositoy on [Github](https://github.com/thesob/timer)

## Decisions made
- Made the UI very simple for usability. To simplify the design work I used the Mantine components, for fast start.
- Used session storage to store the counter and project name.
- The minutes and seconds are limited to 60. The hours have no limits.

## Packages used
- mantine core, for components: Stack, Button, TextInput, Title, Flex, Accordion, Text, Footer.
- mantine hooks: useInterval, to handle brower settimer function correctly with React, and useForm to handle form validations.

## Lessons learned
The use state of the inner elements of the mantine component is not correctly rendered. For example, the lable of the InputText component does not get updated on next render when changing it's value. The value change does not propagate down to the useState value of the hidden property. I suspect it is a bug on the mantine component.

## What to improve or make different next time
Change the rotating graphic (React logo) when counter is running, to a 24 hours clock face component with handlers for hours, minutes and seconds. Make that graphic a React component. The handlers should be aligned with the digital clock display.

## Tech stack
- [React](https://react.com)
- [Mantine](https://mantine.dev)