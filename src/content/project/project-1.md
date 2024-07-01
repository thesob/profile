---
title: 'Stopwatch'
description: "Simple half stack React tool to measure elapsed time on a project."
visit_link_label: "Visit Time counter app"
visit_link: "https://timer-8lb.pages.dev/"
updatedDate: "2023-03-21"
badge: "React"
heroImage: "/images/24_hour_clock.webp"
tags: ['react', 'mantine', 'stopwatch', 'javascript']
---

# Stopwatch
Simple tool to measure elapsed time on a project or task. It stores the elapased time in local sessionStorage, thus any refresh or browser restart will maintain elapsed time. You can change the project name of the project, and open a separate tab for each project you want to track. You can set the start time too, and  nearly no limitation on elapsed time. The counter is second based.

# Why
When working through the MOOC course at Helsinki University for Fullstack JS, upon submitting the exercises, I had to mention the time spent on the course and programming for each part. I soon realized it would be hard for me to keep track manually, so I felt an app to keep track of elapsed time would be beneficial. There are plenty of solutions out there but most of them have a lot of ads and cookeies that I wished to avoid. This app has been very helpfull when calculating the amount I've spent on different task for my own consultancy assignments. This has allowed me to keep track of the actual time spent in total and on specific items, versus the offered turn-key proposals, when I need to see the deviation from the plan. 

# How it was built
Built with React, thus it's a half-stack app, i.e. only frontend. 
![Time counter | Elapsed time counter](/images/stopwatch-screenshot.webp)
Deployed on [Cloudfare](https://dash.cloudflare.com/) server pages a [Time counter](https://timer-8lb.pages.dev/).
Code repositoy on [Github](https://github.com/thesob/timer)

## Decisions made
- Made the UI very simple for usability. To simplify the design work I used the Mantine components, for fast start.
- Used session storage to store the counter and project name.
- The minutes and seconds are limited to 60. The hours have no limits.
- Added hourly sound notification about the time elapsed for a project.
- Added support for creating up to 5 task sub-task to a project.
- Added support for creating up to 5 projects in paralell.
- Added an editable coloring and transparent veal to the clock flace.
- Added a color transformation to the clock face.

## Packages used
- mantine core, for components such as: Stack, Button, TextInput, Title, Flex, Accordion, Text, Footer.
- mantine hooks: useInterval, to handle brower settimer function correctly with React, and useForm to handle form validations, and useForm to handle form input validation and initial value.

## Lessons learned
The use state of the inner elements of the mantine component is not correctly rendered. For example, the lable of the InputText component does not get updated on next render when changing it's value. The value change does not propagate down to the useState value of the hidden property. I suspect it is a bug on the mantine component. I found later on how to make the value change, since the text input is a controlled form, where the textInput is named "duration", the useForm hook should have it initialValues set to the value you desire for the duration.

## What to improve or make different next time
Make it more responsive

## Tech stack
- [React](https://react.com)
- [Mantine](https://mantine.dev)