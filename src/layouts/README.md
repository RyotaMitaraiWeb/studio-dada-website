# Layouts

## ``<Layout>``

```ts
interface Props {
  language: locale;
  title: string;
  metaDescription: string;
}
```

- ``language`` - the language in which the content should be displayed
- ``title`` - the document title
- ``metaDescription`` - the document's meta description

### Summary
This component provides the layout for most pages. The only page that does not use this is the custom 404 page, which instead uses its own layout that is a slightly tweaked variant of this one.