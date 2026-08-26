---
title: "Replace this with the article title"
excerpt: "A short summary used on the blog index and in search previews."
publishedAt: 2026-08-25
author: justin-kauszler
category: build
tags:
  - Example
  - Markdown
draft: true
---

Markdown is our preferred way to draft content, so this post is a **living
reference**: every block below is something you can write in a `.md` file, shown
exactly as it renders in the coffitivity theme. Drop a new post in
`src/content/blog/` and these styles come along for free.

Body copy renders in a comfortable, readable measure with generous line height.
Every paragraph is styled the same — there's no special treatment for the
opening paragraph, so a post can start with a heading or a paragraph and read
consistently either way.

## Headings

Headings use **Sora** and establish the document outline. `h1` is reserved for
the post title in the hero, so body content should start at `h2` and nest down
from there.

## Heading level two

### Heading level three

#### Heading level four

##### Heading level five

###### Heading level six

## Text formatting

You can make text **bold**, _italic_, **_bold and italic_**, or
~~strikethrough~~. Inline `code spans` use a tinted, brand-purple background so
they stand out without shouting. Links like
[the coffitivity app](https://coffitivity.com) carry the purple action color and
a subtle underline offset.

For richer typographic needs, raw HTML works inside Markdown too:

- Abbreviations: <abbr title="Cascading Style Sheets">CSS</abbr> and
  <abbr title="Graphics Interchange Format">GIF</abbr>
- Subscript and superscript: H<sub>2</sub>O and E = mc<sup>2</sup>
- Highlighting with <mark>a marked phrase</mark>
- Keyboard keys: press <kbd>⌘</kbd> + <kbd>K</kbd> to open search

## Blockquotes

> Deep work is the ability to focus without distraction on a cognitively
> demanding task. **Note** that you can use _Markdown syntax_ within a
> blockquote.

A blockquote with attribution:

> The ability to perform deep work is becoming increasingly rare at exactly the
> same time it is becoming increasingly valuable.
> <cite>Cal Newport, _Deep Work_</cite>

## Lists

### Unordered

- A custom brand bullet marks each top-level item
- Nesting switches to a hollow marker:
  - Ambient café noise
  - Gentle rainfall
  - Low instrumental hum
- Back to the top level

### Ordered

1. Pick a soundscape
2. Set a focus timer
3. Start your session
4. Review what you finished

### Task list

- [x] Define the type scale
- [x] Wire up the brand palette
- [ ] Add a dark-mode toggle
- [ ] Ship the RSS redesign

### Definition list

<dl>
 <dt>Soundscape</dt>
 <dd>A continuous, loopable ambient audio bed designed for focus.</dd>
 <dt>Blend</dt>
 <dd>Two or more soundscapes mixed together at custom volumes.</dd>
</dl>

## Code

Inline references like `appStore.session` read clearly mid-sentence. For longer
snippets, fenced blocks are syntax-highlighted and wrap on small screens:

```ts
type Soundscape = {
 id: string;
 title: string;
 volume: number; // 0–1
};

const playFocusBlend = (tracks: Soundscape[]) =>
 tracks.filter((t) => t.volume > 0).map((t) => t.id);
```

```bash
cd apps/blog
pnpm dev   # http://localhost:4321
```

```json
{
 "title": "The coffitivity Content Style Guide",
 "tags": ["design", "reference", "markdown"]
}
```

## Tables

Tables get a header treatment, zebra striping, and horizontal scrolling when
they get too wide for the reading card.

| Element     | Markdown                  | Renders as          |
| ----------- | ------------------------- | ------------------- |
| _Italics_   | `_italics_`               | emphasized text     |
| **Bold**    | `**bold**`                | strong text         |
| `Code`      | `` `code` ``              | an inline code span |
| [Link](#)   | `[Link](url)`             | an anchor           |

## Images & figures

A plain Markdown image stretches to the content width with a soft shadow:

![A calm workspace](/assets/img/bg/breadcrumb-bg1-8.jpg)

Use an HTML `<figure>` when you want a caption. Raw-HTML images aren't run
through Astro's optimizer, so keep these in `public/` and reference them with an
absolute path:

<figure>
 <img src="/assets/img/bg/breadcrumb-bg1-8.jpg" alt="A second placeholder scene" />
 <figcaption>Figures support captions for credits or context.</figcaption>
</figure>

## Collapsible details

<details>
 <summary>Why do we draft in Markdown?</summary>

 It keeps content portable and tool-agnostic — the same file reads cleanly in
 an editor, in Obsidian, and on the published page. The theme does the visual
 heavy lifting so writers can focus on words.

</details>

## Horizontal rule

Use a rule to separate major sections of a long piece.

---

That's the full kit. If a Markdown element renders well here, it'll render well
in any coffitivity post.[^1]

[^1]: Footnotes are supported via GitHub-Flavored Markdown and collect at the
bottom of the article with a link back to their reference.
