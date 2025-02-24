# Translations

## Overview
The website displays content in Bulgarian and English, with Bulgarian being the primary language of the company. The i18n configuration is manually implemented in its entirety. This is because this website's use-case is relatively simple to the point that introducing a library for that is more likely to cause an overhead (from a configuration standpoint). All content is stored in ``.ts`` objects, providing type safety and ergonomics via IntelliSense.

When a file or object property provides an opportunity for the content to be displayed in multiple languages, the content is grouped into object properties named after language codes. For the purposes of this project, those codes are:
- ``bg`` (Bulgarian)
- ``en`` (English; this website aims for British English where possible. In addition, this website strives to use the Oxford comma in order to introduce less ambiguity)

In most cases, the translations are provided as strings. However, in some cases, the content may be presented as an array of strings (with each element being referred to as a "chunk" for the purposes of this project). This is done in cases where parts of the content will receive some markup (for example, certain portions of the text may be a hyperlink). This is done in place of escaping HTML in the translations mostly so that the markup and translation content are separated, making content maintenance slightly easier.

In rare cases, content may also be represented as a function, in which case it has to be called in the template with the appropriate arguments (if such are required).

## Including translations in pages
Most pages will export a ``getStaticPaths`` function that will pass a ``[lang]`` route parameter to the page component:

```ts
export async function getStaticPaths() {
  return [
    {
      params: { lang: "bg" as locale },
    },
    {
      params: { lang: "en" as locale },
    },
  ];
}

const { lang } = Astro.params;
```