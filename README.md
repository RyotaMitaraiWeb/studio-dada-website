# Studio Dada corporate website

## Running the project locally
```bash
npm run dev
npm run build
npm run preview
```

## Used technologies
- TailwindCSS
- Firebase (for hosting)
- Cloudify (for image hosting - [Read more](/README.md#Image-hosting))
- note that this project does not use any front-end framework (like React or Vue); everything is pure Astro.

## Project architecture (``src``)
- ``assets/images`` - holds images for local development
- ``common`` - holds data that is reused across the website
- ``components`` - holds Astro components. Components are grouped in the following way:
- - ``common`` - low-level components that are used in multiple parts of the website, such as links, buttons, dialogs, and more. [Read more](/src/components/common/README.md)
- - ``features`` - specific UI elements (like portfolio cards) that have been extracted here for better code organization and to make the pages' code cleaner
- - ``icons`` - graphical elements that are composed of SVG code. Some of them allow you to control their sizes via props
- - ``layout`` - high-level components used in the ``Layout`` tag, like footers and navigation menus
- ``layouts`` - contains layout elements (do not confuse this with ``layout`` components. Files here use said components)
- ``scripts`` - contains JavaScript files that can be loaded with ``<script>`` tags.
- ``styles`` - contains CSS rules that can be used in multiple areas of the website
- ``translations`` - contains the content for the page, grouped by languages. Currently supported languages are Bulgarian and English. [Read more](/src/translations/README.md)
- ``util`` - contains utility functions that are meant to solve some rather technical issues. [Read more](./src/util/README.md)

## Useful CSS classes
### ``.focus-item``
When the element has a ``focus-visible`` state, applies a specific outline to indicate that the element is focused.

### ``.screenreader-only``
Makes certain content "visible" only to users using assistive technologies. What this class _technically_ does is move the content offscreen and shrink it as much as possible without actually hiding it (as hiding it will render it invisible to screenreaders as well).

The implementation follows [WCAG recommendations about hiding content from sighted users](https://webaim.org/techniques/css/invisiblecontent/#techniques)

**Note:** avoid hiding interactive content with this class, as this may cause confusion to people tabbing through the page with their keyboard. If needed, handle such cases manually so that the content is visible when focused.

## TailwindCSS variables
The following variables are specific to this project (either new or overriding existing ones):

### Colors
- ``--color-black`` - a black color matching the one found in the company's logo
- ``--color-brand-white`` - a non-pure white color, typically meant to be used as the text color of elements with a ``--color-black`` background.
- ``--color-gray`` - a gray color used in some element borders and outlines
- ``--color-link-blue`` - a blue color meant to make some links distinctive

### Viewports
The following breakpoints are used for the purposes of this project

- ``--breakpoint-sm`` - 320px
- ``--breakpoint-md``- 744px
- ``--breakpoint-lg`` - 1024px
- ``--breakpoint-xl`` - 1440px

Due to this, the ``xs`` breakpoint is rendered useless.

## Environment secrets
```bash
VITE_PUBLIC_IMAGES=http://localhost:4321/src/assets/images/
```

- ``VITE_PUBLIC_IMAGES`` - points to the URL of the remote image service. When running this locally, you want an absolute path to the images folder in the ``assets`` directory; this is to ensure that whatever you see in development environment will also be seen in production environment.

To apply environment variables to production, deploy an ``.env.production`` file with the environment variables listed above, filled with your actual data. The file must be located at the same level as ``.env.development``

### Image hosting
To circumvent Firebase's network transfer limit, all images in production are hosted on a Cloudify bucket. The host is provided via envrionment secrets, described in the section above.