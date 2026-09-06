# HomesteadOS

An entirely unnecessary web app for one family's day at
[Homestead Heritage](https://www.homesteadheritage.com/) in Elm Mott, Texas.

My family teased me for making web apps for everything. This is the response.

**Live:** https://noah-austin.github.io/homestead-day/

## What it does

- **The Day.** The itinerary, hours, the address, and a field-notes box for every stop.
- **Bingo.** Everyone gets their own 5×5 card of things that will definitely happen.
  Five in a row is ten points.
- **Scoreboard.** Points awarded by whoever is holding the phone, which is the only fair system.
- **Ratings.** Every shop on the five-loaf scale, with family averages.
- **Trip Report.** Stats, a bar chart, and a pie chart of pie.
- **Sync Phones.** No server; phones merge by texting each other a link.
- **Settings.** Players, plus toggles that do nothing, plus one that does (candlelight mode).

## How it is built

Plain HTML, CSS, and JavaScript. No build step, no framework, no backend. State lives in
`localStorage`. The parchment-and-ink look borrows the design tokens from
[Commonplace](https://noah-austin.github.io/Theology-Site/).

Open `index.html` in a browser, or serve the folder with anything:

```bash
python3 -m http.server 8000
```

## Deploying

Pushes to `main` publish to GitHub Pages through `.github/workflows/pages.yml`.
If the first run fails with a Pages error, open **Settings → Pages** in the repository and
set the source to **GitHub Actions**, then re-run the workflow.
