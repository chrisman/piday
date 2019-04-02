# Pi Day Challenge

<https://www.jpl.nasa.gov/edu/nasapidaychallenge/>

## About

Problem descriptions can be found at `docs/instructions.md`. They were generated with OCR from the digital poster (`docs/piday2019_infographic.png`) and then lightly formatted with markdown.

I've already ranted elsewhere about how wildly inappropriate it is to distribute text in PNG format, so I'll just allow myself a single ***What in the seven hells were they thinking?*** and then spare you any further outbusts of moral indignation.

## Solutions

Find the solutions in the following files:

1. src/deadly-dust.js
2. src/cloud-computing.js
3. src/storm-spotter.js
4. src/icy-intel.js

## Thoughts and learnings

Here's some stuff I thought about while doing these exercises.

### Premature Optimization

I really overestimated the amount of code reuse there would be. I started by making modules for each shape, thinking I'd get good reuse from them. In reality, I got a tiny bit of reuse out of them, but this was a clear example of <abbr title="Premature Optimization Is The Root Of All Evil">POITROAE.</abbr>

### OOPs

I seriously thought, for *several* seconds, about taking a classic OOP approach, with inheritance and everything. Because when I first started thinking about my data, it seemed as though I saw some kind of a hierarchical relationship.

As in, I'd make some kind of a base, primitive Shape class and extend it to apply to other more specific shapes. Hell, maybe I'd even use ES `class` syntax! In for a penny, in for a pound!

But then, as I continued thinking about it, I remembered why I hate inheritance hierarchies. Why would you even waste any time at all wondering whether a Sphere **is a** Circle with volume? Or whether a cylinder somehow **has** two circles? These are the kinds of useless time wasters that bad OOP creates. And inheritance is bad OOP.

Okay, so no brittle, forced inheritance chains. I won't go that far. Maybe I'll still do something like create a Sphere class and let Mars and Earth instantiate Sphere.

But, again, no. There's no reason for anything in JavaScript to ever *instantiate* anything else. The class/instance model is an echo of *classical* OOP, and JS doesn't *have* classes.

It uses prototypes.

So I did what I always do and used object factories.

