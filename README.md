# Word Frames

### Overview
- Word Frames is a word puzzle game where players are given an empty 5x5 grid and one random letter at a time (weighted by how common the letters appear in the English language), and they are tasked with placing the letters in the grid to create as many 2-5 letter words horizontally and vertically as possible.
- Points are earned for each letter used in a word, so if a 2-letter word is made, you earn 2 points.
- Words can be found within words too, so the word "catty" also has the word "cat" in it, so you would earn points for both words (and any other sub-words within the larger word).

### Additional Information
- The wordlist was compiled using the American and UK Scrabble dictionaries.
- Word Frames began with me placing Scrabble/Bananagram tiles on my living room floor, then turned into a Godot game published on itch.io, before being built here.
- The custom domain for the site seems to get caught behind some ISP domain restrictions/firewalls, which is an issue I plan to resolve at some point with an improved routing system, a new domain name, and a new certificate for that domain. 

### Future Ideas
- Currently, I am reworking the whole of Word Frames to be a dynamic, multi-page site that has a daily game mode, leaderboards, logged-in user stat tracking, free-play mode, and a host of other features.
- At some point I would like to add multiplayer, where 2 (or more) players are given a random seed and compete to see who can score higher.
- The multi-page site is being designed with Next.js, Tailwind CSS, and a PostgreSQL server (likely through Supabase), with the server hosted on AWS EC2 and the frontend deployed through Vercel (or another similar service).

### Play Here:
https://wordframes.run.place/

### Contact
Email: Ajames04321@gmail.com
