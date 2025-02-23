# Common components

## Overview

These components represent common UI elements and are used in multiple parts of the website. They can also come equipped with behavior and styling that is mandatory for the element, thus removing the need to implement those yourself constantly.

All elements provide a prop `className`, which you can use to give them additional styles, as well as override default ones. In some cases, elements may also expose a `tag` prop, which allows you to configure the selector.

## List of components

### Box

```astro
---
interface Props {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
}
---

<Box>I'm a box</Box>
<Box tag="section" className="font-bold text-2xl">I'm a styled section box</Box>
```

- `tag` - configures the selector that will be used as the parent tag for the box. Defaults to `div`

The `Box` component provides you with a white area that emits a medium shadow and has gray borders. You will typically need to style it further with the `className` prop for the box to suit your styling needs.

### Dialog

```astro
---
interface Props {
  className?: string;
  id?: string;
}
---

<Dialog id="nav-menu" className="backdrop:bg-black" />
```

- `id` - fills the `id` attribute for the native `dialog` tag. This is useful if you want to target a specific dialog when querying the DOM.

The `Dialog` component commodifies and encapsulates some behavior in accordance to the website's specific needs. These behaviors are:

- enabling scrolling when the dialog is closed
- interacting with the History API when the dialog is closed
- closing the dialog when the user clicks outside the "main body"

The dialog comes with no preconfigured styling whatsoever, as all dialogs in use currently have vastly different designs (even the backdrops don't have the same opacity!)

To open a dialog created with this component, use the utility function `openDialog`, which handles some other parts of the "equation" (like disabling scrolling).

### Link

```astro
---
interface Props extends HTMLAttributes<"a"> {
  href: string;
  className?: string;
  underline?: "default" | "onhover";
}
---
<Link href="#" target="_blank">I'm a normal, underlined link</Link>
<Link href="#" underline="onhover">I'm a link that is underlined when hovered</Link>
<Link href="#" className="text-blue-700">I'm a link with a custom text color</Link>
```

- `underline` - when the link should be underlined. By default, the link is underlined until it is hovered and then underlined again when in an active state. Passing `onhover` to the prop reverses these states.
- this component accepts as props all attributes native to the `a` tag, though the `href` is made mandatory here.

The `Link` tag renders a hyperlink meant to be used in text bodies. For button-like components, take a look at `LinkButton`.

### LinkButton

```astro
---
interface Props extends HTMLAttributes<"a"> {
  href: string;
  className?: string;
}
---
<LinkButton href="#" target="_blank">I'm a link button</LinkButton>
```

- this component accepts as props all attributes native to the `a` tag, though the `href` is made mandatory here.

`LinkButton` renders a hyperlink styled as a button. The button also has some special effects when hovered. Use this for more "action-like" navigations. If you want a hyperlink that looks more like a text, check `<Link>`.

### Section

```astro
---
interface Props {
  title: string;
  className?: string;
}
---

<Section title="Heading level 2">Default section</Section>
```
- ``title`` - the text to be displayed as the section's heading, rendered as an ``<h2>``

Renders a ``section`` with some styling to make it stand out from the rest of the page. The section itself is a white area covering the full viewport width.

```astro
---
interface Props {
  className?: string;
  tag?: keyof HTMLElementTagNameMap;
}
---

<Typography>Text</Typography>
<Typography tag="span">Text rendered in a span tag</Typography>
```
- `tag` - configures the selector that will be used as the parent tag for the box. Defaults to `p`

The ``Typography`` component represents "main body text". On smaller screens, the component uses a 16px font size, while on larger screens it uses 20px. The component also sets the default text color, which is ``--color-black``.