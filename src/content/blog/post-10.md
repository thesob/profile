---
title: "From Typist to Conductor: How I 10x'd My Code Output with an AI Agentic Workflow"
description: "Chatting with AI is making you slower. Here is a summary of the 4-phase 'Files as Contracts' protocol I built to stop LLM hallucinations and 10x my engineering output."
pubDate: "2026-04-05"
updatedDate: "2026-04-05"
heroImage: "/images/protocol-based feature workflow.webp"
badge: "ai"
tags: ['Software Engineering', 'AI', 'Agentic Workflows', 'Leadership', 'GitHub Copilot']
slug: "10x-ai-agentic-workflow-files-as-contracts"
author: "Patricio Sobrado"
---

In Chile, there is a popular proverb: *"El que sabe, sabe. El que no, es gerente."* (He who knows, he knows. He who doesn't is a manager). 

As a former Amazon TPM and IT Director, I recently felt the sting of that proverb. I realized I was losing touch with the actual handcraft of software engineering in the AI era. To manage the inevitable future of mixed human-AI teams, I couldn't just read about it. I needed to go back to the trenches.

I spent the last 8 months tracking my GitHub data, trying to figure out how to actually integrate AI agents into a local enterprise workflow using tools most of us already have: VS Code, GitHub Copilot, and Google AI Studio.

What I found shocked me: **Treating AI like an open-ended "chat" is actually making us slower.**

### The Problem: The "Lazy" LLM
LLMs are trapped in the "attention economy." They are inherently lazy and will take dangerous shortcuts—even butchering production code just to make a unit test pass—because they lack the "World Models" that AI pioneers like Yann LeCun warn us about. They cannot predict the real-world consequences of their actions.

When you leave a chat open too long, the AI suffers from *Context Pollution*. Your brilliant "Senior Architect" persona quickly degrades into a lazy Junior Developer mimicking your messy conversation history.

I realized I couldn't just hand over the keys. I needed a system to constrain the AI. 

### The Solution: Files as Contracts
Instead of relying on chat history, I built a strict, 4-phase Protocol-Based Agentic Workflow. I stopped "chatting" and started orchestrating. 

By strictly isolating context into separate Agent Personas and forcing handovers via Markdown and test files, I created an impenetrable boundary for the AI. I call this **Files as Contracts**.

The workflow looks like this:
1. **The Architect (Google AI Studio):** Decomposing the macro-architecture into a steady flow of isolated, highly structured Markdown feature specs.
2. **The QA Lead (VS Code):** Writing failing test suites based *only* on the spec. This failing test becomes the immutable Contract.
3. **The Autonomous Dev (VS Code):** Looping against the failing test until it turns green, without ever modifying the test itself. 
4. **The Code Reviewer (VS Code):** An AI persona acting as strict police, checking for DRY, SOLID, and security principles before I personally give the final PR approval.

### The Result: A 10x Output Bump
By inserting myself as the Human Orchestrator exactly at the critical points of failure (the handovers), I got the speed of an agentic pipeline without losing my grip on the steering wheel.

I wrote a script to track my net code changes across 17 local repositories. In just the first 20 days of March 2026, my net code output jumped from an average of ~4,000 lines a month to **over 18,000**. 

More importantly, it completely changed how I view engineering leadership. We aren't being replaced by autonomous coders. We are transitioning from typists to conductors. 

### Get the Full Blueprint
I have documented this entire system—including the exact system prompts I use for the Architect, QA, Dev, and Reviewer, the detailed data breakdown, and the psychological shift required to manage these tools.

I published the full, comprehensive deep-dive on Medium. If you are tired of debugging AI hallucinations and want to build a real agentic pipeline without buying expensive new enterprise software, this is for you.

👉 **[Read the full breakdown and get the prompts on Medium here](https://medium.com/@patricio.sobrado/escaping-the-ai-attention-economy-how-a-protocol-based-workflow-10xd-my-code-output-6805c170983a)**

Let me know your thoughts over on Medium or connect with me on [LinkedIn](https://www.linkedin.com/in/patricio-sobrado/). Are we ready for the era of the Orchestrator?