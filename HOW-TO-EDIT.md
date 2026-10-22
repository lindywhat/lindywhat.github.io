# How to edit the website

This guide is for everyone who wants to change something on the Lindy What? website.
You don't need to install anything: everything can be done in your web browser on GitHub.

## The basics

1. Go to the website's repository on GitHub and log in.
2. Click on the file you want to change (see "Where is what?" below).
3. Click the **pencil icon** (✏️ "Edit this file") at the top right of the file.
4. Make your change.
5. Click the green **Commit changes...** button, write a short note about what you changed
   (e.g. "Added NimmaHop of November"), and click **Commit changes** again.
6. Wait 1–2 minutes. The website updates itself automatically.

Made a mistake? Every change is saved in the history, so nothing is ever lost.
Ask one of the website volunteers to undo it.

## Where is what?

| I want to change...                          | Edit this file                       |
|----------------------------------------------|--------------------------------------|
| An event in the agenda                       | `_data/events.yml`                   |
| The homepage (photos, welcome text, blocks)  | `index.md`                           |
| The Dutch homepage                           | `pages/nl/home.md`                   |
| The lessons page (prices, dates, sign-up)    | `pages/lessons.md`                   |
| The team members on "About us"               | `pages/about-us.md`                  |
| Any other page                               | the file with that name in `pages/`  |
| The menu at the top / links in the footer    | `_data/navigation.yml`               |
| E-mail address, Facebook link, copyright     | `_config.yml`                        |
| Write a news post                            | add a file in `_posts/` (see below)  |

## Adding an event to the agenda

Open `_data/events.yml` and add a block like this at the bottom:

```yaml
- title: "NimmaHop! Sunday Tea Dance"
  date: 2026-11-08
  time: "15:00 - 19:00"
  location: "Salsa Tipica, Nijmegen"
  description: "Our monthly Sunday afternoon social dance!"
  link: https://www.facebook.com/events/123456789
```

- The **date** must be written as year-month-day: `2026-11-08`.
- Only `title` and `date` are required; leave out lines you don't need.
- For events lasting several days (like What's Hop!) add `end_date: 2027-02-14`.
- The **spaces at the start of the lines matter**: keep them exactly like the example.
- Events disappear from the website automatically after their date. No need to remove them.

The event then shows up on the Agenda page, on the homepage, and as "Next event" in the footer.

## Writing text: a little Markdown

Pages are written in *Markdown*, which is plain text with a few symbols for formatting:

| You type                                          | You get                       |
|---------------------------------------------------|-------------------------------|
| `**bold text**`                                   | **bold text**                 |
| `*italic text*`                                   | *italic text*                 |
| `## A heading`                                    | a big heading                 |
| `### A smaller heading`                           | a smaller heading             |
| `* an item` (at the start of a line)              | a bullet list                 |
| `[click here](https://www.example.com)`           | a link                        |
| `[About us](/about-us/)`                          | a link to a page on this site |
| `[Register!](https://forms.gle/...){: .button}`   | a big brown button            |
| `---` on its own line                             | a horizontal line             |

Leave an **empty line** between paragraphs.

### Adding a picture

1. Go to the `assets/images` folder, click **Add file → Upload files** and upload your photo.
   Use a simple file name without spaces, e.g. `nimmahop-november.jpg`.
2. In the page, write: `![Short description of the photo](/assets/images/nimmahop-november.jpg)`

Tip: make photos smaller than about 1 MB (for example 1600 pixels wide) so the site stays fast.

### Adding a YouTube video

Copy the address of the video from YouTube and write:

```
{% include youtube.html url="https://www.youtube.com/watch?v=qkthxBsIeGQ" %}
```

## The top of each file (front matter)

Every page starts with a block between two `---` lines, for example:

```yaml
---
title: Lessons
permalink: /lindy-hop-lessons/
---
```

- `title` is the big title shown on the page and in the browser tab. You can change it.
- `permalink` is the web address of the page. **Don't change it**, or links to the page will break.

## Writing a news post

1. Go to the `_posts` folder and click **Add file → Create new file**.
2. Name the file `YEAR-MONTH-DAY-short-title.md`, e.g. `2026-11-01-new-balboa-classes.md`.
   The date in the name is the date of the post.
3. Start the file like this, and write your text below it:

```markdown
---
title: "New Balboa classes!"
image: /assets/images/news/balboa-flyer.jpg
---

We are very happy to announce...
```

The `image` line is optional. The post appears automatically on the News page.

## Adding a new page

1. Go to the `pages` folder and click **Add file → Create new file**, e.g. `workshops.md`.
2. Start it with:

```yaml
---
title: Workshops
permalink: /workshops/
---
```

3. Write the text below it.
4. To put it in the menu, add it to `_data/navigation.yml`, e.g. under a `submenu:`:

```yaml
        - title: Workshops
          url: /workshops/
```

## Changing the menu

Open `_data/navigation.yml`. The English menu is under `en:`, the Dutch one under `nl:`.
Items under `left:` appear left of the logo, items under `right:` to the right.
Again: keep the spaces at the start of each line the same as the lines around it.

## Something went wrong?

If the website doesn't update after a few minutes, there is probably a typo (often in the
spaces of a `.yml` file). On GitHub, click the **Actions** tab: a red ❌ shows which change
failed and why. Fix the file, or ask a website volunteer for help.
