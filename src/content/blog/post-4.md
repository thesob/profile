---
title: 'Callbacks in Javascript'
description: 'Avoiding the callback hell'
pubDate: 2023-03-22
updatedDate: 2023-12-29
heroImage: "/images/learn-js.webp"
badge: "JS"
tags: ['javascript', 'freeeducation']
---

Callbacks represent an inversion of control when dealing with asynchronous code: you let the called async function call your callbacks when ready or failed. Inverting the callback pattern is actually an inversion of inversion, or an uninversion of control, which restores control back to the calling code. Doing so, you don't need to pass the callbacks to the called function, and thus avoid the insane "callback hell", when multiple callbacks are nested within each other, making the code difficult to read and maintain.

In JavaScript, promises were introduced as a native way to handle asynchronous code in a clean and organized way, thus creating more maintainable code when dealing with asynchronous operations. They provide a way to manage the result of an asynchronous operation once it's completed, and allow for chaining operations, handling errors centrally, and running multiple operations in parallel.
Recommend this source (You don't know JS), should you like to deep-dive into Promises. [You don't konw JS on Github](https://lnkd.in/e8UDyzaV)
