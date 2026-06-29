# Stopwatch

A fully functional stopwatch built from scratch using vanilla JavaScript — no tutorial, no reference code.

## Live Demo
🔗 [View Live](https://kulshreshth-singh.github.io/stopwatch/)

## Features
- Play / Pause / Reset functionality
- Displays minutes : seconds : centiseconds (MM:SS:CS)
- Icon toggles between play and pause states
- Accurate timing using `setInterval` and `clearInterval`

## What I learned
- Managing `setInterval` state across multiple event listeners
- Variable scope — keeping shared state accessible across functions
- Debugging real logic bugs (timer auto-starting, icon desync) through step-by-step tracing
- Time rollover logic (centiseconds → seconds → minutes)

## Tech Used
- HTML5
- CSS3
- Vanilla JavaScript
