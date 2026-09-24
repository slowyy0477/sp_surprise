# How to make this yours

Everything personal lives in **one place**: the `CONFIG` object at the top of
`script.js`. You do not need to understand the rest of the file, and you should
never have to touch anything below the line that says
`EVERYTHING BELOW IS MACHINERY`.

---

## 1. The files

```
bashair-lifeline/
├── index.html          ← the skeleton (structure, chapter names, chapter numbers)
├── style.css           ← colours, type, layout, animation
├── script.js           ← YOUR WORDS live at the top of this file, in CONFIG
├── CUSTOMIZE.md        ← this guide
├── preview-phone.bat   ← double-click to view it on your own phone over Wi-Fi
└── assets/
    ├── images/
    │   ├── memories/   ← memory-1.svg … memory-6.svg   (swap these for real photos)
    │   ├── gallery/    ← gallery-1.svg … gallery-8.svg (swap these for real photos)
    │   └── teddy-note.svg
    ├── icons/          ← favicon
    └── music/          ← put your song here, then point CONFIG.music.src at it
```

To see your changes: save the file, go back to the browser, press **F5**
(Ctrl+R / Cmd+R). There is no build step.

---

## 2. Writing your own paragraphs

Every long piece of writing is a **list of paragraphs** — a JavaScript array of
text strings. You edit the words between the quote marks. You keep the quotes,
the commas and the square brackets exactly as they are.

### The apology letter (chapter 05)

```js
apology: {
  greeting: 'Bashair,',                    // first line of the letter
  paragraphs: [
    'First paragraph of the apology.',
    'Second paragraph.',
    'Third paragraph.',
    'Fourth paragraph.',
    'Fifth paragraph.'
  ],
  sign: '— me'                             // the sign-off at the bottom
}
```

Rules that actually matter:

1. **One paragraph between each pair of quotes.** The animation writes them out
   one after another, in order, so the order in this list *is* the order she reads.
2. **A comma after every paragraph except the last one.** If you put a comma after
   the last one, the page goes blank — delete that one comma and reload.
3. **A new paragraph = one more line in the list.** Add as many as you want, all
   with a comma at the end except the final one:

```js
  paragraphs: [
    'One.',
    'Two.',
    'Three.',      ← comma because another paragraph follows
    'Four.'        ← no comma, because this is the last one
  ],
```

4. **Apostrophes.** If you write `I'm` or `don't` inside a string that starts with
   a single quote `'`, put a backslash before the apostrophe: `'I\'m sorry.'`
   Easier habit: use the curly apostrophe `’` instead — `'I’m sorry.'` — which
   needs no backslash. Or use double quotes around the string: `"I'm sorry."`
5. **Never paste from Word with smart quotes** (`“smart”`). It looks fine but
   breaks the string. If in doubt, retype the quote marks.
6. **Line breaks inside one paragraph** are not possible; each visual paragraph is
   its own list item. Keep them short — long paragraphs read badly when they are
   written out slowly on a phone.

### The long love letter (chapter 06)

Same idea, under `loveLetter.paragraphs`. There is also:

```js
dateOverride: ''      // leave empty → today's date is used automatically
                      // e.g. 'Written on a Tuesday in September'
```

### The final message (chapter 07)

```js
finalMessage: [
  'First block of the ending.',
  'Second block.',
  'Third block.'
],
```

### Small pieces of wording, one line each

| What it says | Where |
|---|---|
| `Hey Bashair...` / `I made a little world for you.` | `intro.line1`, `intro.line2` |
| the `Enter` button label | `intro.button` |
| the paragraph under each chapter title | `chapters.start.lede`, `chapters.memories.lede`, … |
| the two lines before the apology letter is opened | `chapters.sorry.pre1`, `pre2` |
| the quiet line in the final scene | `final.line2` |
| `Made for you ❤️` | `final.made` |
| what the teddy says when tapped | `teddy.head`, `teddy.heart`, `teddy.hand` |
| the hidden message behind the gift box | `teddy.giftMessage` |
| what the teddy says after a hug | `final.hugEcho` |
| the footer line | `footer.line` |
| the name shown big at the top | `masthead.title` |

### The timeline (chapter 01)

```js
timeline: [
  {
    date: 'the beginning',
    title: 'The first message that went nowhere and everywhere',
    text: 'Two or three sentences about it.',
    tag: 'where it started'        // small label, optional — delete the line to hide it
  },
  { … },                           // ← comma between entries
  { … }                            // ← no comma after the last entry
],
```

### Memory lights (chapter 02)

```js
memories: [
  {
    date: 'day one',
    title: 'The message',
    image: 'assets/images/memories/memory-1.jpg',   // your photo
    tint: 'rgba(229,118,143,.45)',                  // the colour of that glow
    story: 'What happened, in your words.'
  },
  …
],
```

`tint` values you can copy: rose `rgba(229,118,143,.45)`, gold
`rgba(232,196,137,.40)`, lilac `rgba(196,160,222,.35)`, blue-grey
`rgba(129,148,205,.38)`.

### Reasons, little things, secrets

```js
reasons: [ { object: 'heart', text: 'Something you notice about her.' }, … ]
// object can be: heart flower star note moon feather key spark

littleThings: [ { icon: 'teddy', label: 'the teddy', message: 'What it means.' }, … ]
// icon can be: teddy heart flower letter star gift

secrets: [ { mark: '·', x: 14, y: 30, text: 'Something you never said out loud.' }, … ]
// x / y are percentages inside the dark sky; keep them between 10 and 88
```

### Photos

1. Put your photos in `assets/images/memories/` and `assets/images/gallery/`.
2. Point the `image:` line at the file name. `.jpg`, `.png`, `.webp`, `.svg` all work.
3. Paths are written from the project folder, with forward slashes:
   `assets/images/gallery/beach.jpg`.
4. Portrait photos look best. Resize anything huge down to about 1200 × 1500 and
   save as `.jpg` (~200–400 KB each) — she is probably opening this on a phone.
5. Names with spaces or capital letters work, but keep them simple:
   `our-walk.jpg`.

### The song

1. Drop the file in `assets/music/`.
2. Point the player at it:

```js
music: {
  src: 'assets/music/our-song.mp3',
  title: 'the song we kept replaying',
  missingHint: 'add a song to assets/music/ and point CONFIG.music.src at it'
}
```

It never autoplays; she presses play. If the file is missing, the player just
says so — it will not break anything.

---

## 3. What lives in `index.html` instead

A few things are structure rather than content, so they are in `index.html`:

| What | Where | How to change it safely |
|---|---|---|
| the seven chapter names (`How It Started`, `Our Memories`, …) | `<h2 class="chapter__title">` inside each `<section class="chapter">` | edit only the text between `>` and `</h2>` |
| the chapter numbers `01`…`07` | `<span class="chapter__num">` | same — text only |
| the names in the side/bottom chapter rail | `<span class="rail__label">` | same |
| the browser tab title | `<title>` | text only |
| the fallback opening line | `<h1 class="gate__name">` | the script overwrites it from `CONFIG.intro.line1`, so edit `CONFIG` instead |
| the teddy illustration | inside `script.js` (`teddySVG`) | do not edit — it is built from shapes |

**Rule of thumb:** if a piece of text has a `data-config="something"` attribute
on it, the script replaces it from `CONFIG`. Edit it in `CONFIG`, not in the HTML,
or your change will be overwritten on load.

---

## 4. Changing the look

At the top of `style.css` there is a block called `01 · TOKENS`. Everything visual
is driven by those variables:

```css
--rose:  #e5768f;   /* the warm accent */
--gold:  #e8c489;   /* the candlelight accent */
--rose-deep: #b8455f;
--font-display: 'Cormorant Garamond', …;   /* headings, letters */
--font-ui: 'Manrope', …;                   /* everything else */
```

Change `--rose` to another colour and the whole site follows it. Type is loaded
from Google Fonts in `index.html` — swap the family there and in the tokens, or
delete the `<link>` line entirely to fall back to Georgia and the system font.

---

## 5. Getting it onto her phone

Double-clicking `index.html` works on your laptop. On a phone it is awkward — the
browser cannot open a folder of files, and a `.zip` sent over WhatsApp opens badly.
Two ways that do work:

**A · Same Wi-Fi, right now (for showing her in person)**

1. Double-click **`preview-phone.bat`** in this folder.
2. A black window prints two links, e.g. `http://192.168.100.3:8000/index.html`.
3. Type the phone one into her phone's browser — both devices must be on the same Wi-Fi.
4. Close the black window when you are finished.

**B · A real link she can open anywhere (for sending it)**

Drag the **whole `bashair-lifeline` folder** onto <https://app.netlify.com/drop>.
It uploads, and in about ten seconds you get a URL like
`https://something-random.netlify.app` that works on any phone, forever, for free.

- Upload `index.html`, `style.css`, `script.js` **and** `assets/`. Uploading only
  `index.html` gives her a naked, unstyled page.
- Do not rename anything — the file names are linked to each other.
- **That link is public to anyone who has it.** Only put photos of her there if you
  are comfortable with that, or keep the illustrated placeholders and send the photos
  separately. If you want it private, use a host with a password, or share the link
  only with her and treat it as unlisted rather than secret.
- GitHub Pages works the same way: make a repo, upload the files at the root,
  Settings → Pages → deploy from the main branch.

Before you send anything: open it once on your own phone, scroll the whole way down,
and press play on the music.

## 6. Before you send it

- [ ] Every `REPLACE` string is gone. Search both `script.js` and `index.html`
      for the word `REPLACE` — if you find one, that part is still placeholder text.
- [ ] Every photo actually loads (no broken image icons).
- [ ] The song plays when you press play.
- [ ] Open it on a phone, not just the laptop: scroll the whole way down once.
- [ ] Read the apology letter out loud once. It is the part that matters.
- [ ] Copy the whole folder somewhere safe before you start editing.

## 7. If something breaks

Nothing is permanent. Undo it (`Ctrl+Z`) or restore the folder from the copy you
made in the step 6 checklist, then reload. Two failures cover almost every case:

| Symptom | Cause |
|---|---|
| the page goes blank / half the site is missing | a missing comma, a stray comma, or a missing quote in `CONFIG` |
| a paragraph shows code instead of text | a smart quote `“ ” ”` pasted in from a document, or an unescaped `'` inside a `'…'` string |

Open the browser's console (F12 → Console) and it will tell you the line number in
`script.js` where it gave up.
