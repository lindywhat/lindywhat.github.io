# Lindy What?! Lindy Hop Nijmegen – website

The website of [Lindy What?! Lindy Hop Nijmegen](https://www.lindynijmegen.org/), built with
[Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages.

**Want to change some text, add an event or write a news post?
See [HOW-TO-EDIT.md](HOW-TO-EDIT.md).** No technical knowledge needed.

## How the site is organised

```
_config.yml           Site-wide settings: e-mail, Facebook, newsletter, copyright
_data/
  events.yml          The agenda: all events (past ones are hidden automatically)
  navigation.yml      Top menu and footer links (English and Dutch)
index.md              The homepage (slider photos, welcome text, three blocks)
pages/                All other pages, one Markdown file per page
  nl/                 Dutch pages
_posts/               News posts, one file per post (YYYY-MM-DD-title.md)
assets/
  images/             Photos and pictures used in pages
  images/news/        Pictures used in news posts
  css/lindy.css       The look of the site (colours are defined at the top)
  js/main.js          Slider, mobile menu, hiding past events
  theme/, fonts/      Graphics and font from the original WordPress theme
_layouts/, _includes/ HTML templates (normally no need to touch these)
```

## Publishing on GitHub Pages

1. Create a repository on GitHub and push this folder to it.
2. In the repository go to **Settings → Pages**, choose **Deploy from a branch**, select
   the `main` branch and the `/ (root)` folder, and save.
3. After a minute the site is live at `https://<account>.github.io/<repository>/`.

The site uses links that start with `/` (e.g. `/about-us/`), so it should be served from the
root of a domain. While testing on `github.io`, either name the repository
`<account>.github.io`, or set up the custom domain right away:

4. **Custom domain**: in **Settings → Pages → Custom domain** enter `www.lindynijmegen.org`.
   Then, at the domain registrar, point the domain to GitHub
   ([instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
   Only do this when you are ready to switch over from WordPress.

The old WordPress addresses keep working: pages use the same URLs as before, and a few
old ones (`/current-courses/`, `/etiq/`, `/nl/home-nl/`, ...) redirect to their new place.

## Previewing locally (optional)

Requires Ruby. Then:

```sh
bundle install
bundle exec jekyll serve
```

and open <http://localhost:4000>.

## What changed compared to the WordPress site

- **Agenda**: events are no longer imported from Facebook; they are listed in
  `_data/events.yml`.
- **Contact form**: replaced by an e-mail link (a static site cannot send e-mail itself).
  If a form is wanted, a free service like Formspree or a Google Form can be linked.
- **Slider**: a simple photo slideshow instead of the Revolution Slider animations.
- **Lesson timetable**: a simple table instead of the timetable plugin.
- **Newsletter**: still the same Mailchimp sign-up form.

## Credits

Design based on the "Retro" WordPress theme that the old site used; the theme graphics and
the Bazar font in `assets/theme` and `assets/fonts` come from that theme.
Photography by Koen van Langen.
