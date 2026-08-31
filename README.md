# ritajit-majumdar.github.io

Personal academic/portfolio website for Ritajit Majumdar, built as a static site (HTML/CSS/JS, no build step) and deployed via GitHub Pages.

## Structure

```
index.html              Page markup, all sections
assets/css/style.css    Styles
assets/js/main.js       Scroll-reveal, nav highlighting, publication/talk filters
assets/img/             Put profile.jpg here (see below)
```

## Sections (placeholders to fill in)

- **Hero** — name, title, affiliation(s), short bio, profile photo, contact links
- **About** — education history
- **Publications** — journal/conference tabs
- **Talks** — invited talks & presentations
- **Teaching** — courses/roles
- **Awards** — honors & recognition
- **Press** — media coverage
- **Footer** — contact links

All placeholder text is wrapped in `[brackets]` in `index.html` — search for `[` to find everything that needs replacing.

## Adding your photo

Drop a square-ish image at `assets/img/profile.jpg`. It's shown in a circular frame in the hero. Until the file exists, the hero shows an "Add your photo here" placeholder instead.

## Local preview

Just open `index.html` in a browser, or serve it locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deployment

This repo is named `<username>.github.io`, so GitHub Pages serves it automatically at `https://<username>.github.io/` once Pages is enabled for the repo (Settings → Pages → Source: `main` branch, `/` root).
