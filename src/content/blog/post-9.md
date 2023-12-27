---
title: 'Ever wondered about the power behind Support Vector Machines (SVMs)?'
author: 'Patricio Sobrado'
description: 'A recommendation of an MIT lecture where support vector machines are explained in clarity'
pubDate: 2023-12-19
heroImage: "/images/SVM.png"
image:
  url: 'https://docs.astro.build/assets/full-logo-dark.png'
  alt: 'The full Astro logo.'
tags: ['ai', 'learning', 'CognitiveEvolution', 'Insights']
---

The late Professor Patrick Winston offers an enlightening perspective on Vladimir Vapnik's SVM, diving into its mathematical core while weaving in a touch of historical context. This model is more than just a boundary-finder between different data classes. With a trained SVM, decoding new data accurately becomes a reality. Although the tool was originally designed for binary classification, this is not a limitation for a multi-class problem since the latter can be broken down into smaller, manageable binary puzzles, to which SVM can be applied.

SVMs wear many hats—spotting handwritten digits, detecting faces in photos, sorting emails into spam or not spam, and more. What's truly remarkable is how they leverage mathematical properties. The optimal boundary? It depends on the dot product of sample data pairs. Picture this: all sample pairs are projected into each other in the dimensional space of the samples, making SVMs a choice for discovering nonlinear boundaries using kernels.

Kernels act as a makeover for the dot product, reimagining it in a higher dimension. Unable to linearly separate samples in their native dimension? By transforming them into a higher space where they are linearly separable, SVMs craft that optimal boundary.
Comparing SVMs to neural networks, another intriguing facet emerges. SVMs find a global minimum in the optimization problem, unlike neural networks navigating local minima during convergence. It's a remarkable tool that stands out in the realm of classification algorithms.

View the lecture at [https://youtube.com/watch?v=_PwhiWxHK8o&si=s3qSHw0oj-84uYQv](https://youtube.com/watch?v=_PwhiWxHK8o&si=s3qSHw0oj-84uYQv)