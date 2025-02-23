# Utility functions

## `determine404Language`

```ts
function determine404Language(): locale;

determine404Language();
```

Returns a language code that represents the user's preferred language, which is to be used to render the correct language in the 404 page.

The algorithm consists of several steps, with it stopping as soon as a preferred language is yielded:

1. The function checks the path name. If the path name starts with a language code (like `/bg` or `/en`), it will consider that language to be the preferred one
2. The function checks the user's preferred languages via `navigator.languages`. If `en` or `bg` are present, then those are returned (if both are present, the one that comes first in the order is picked).
3. In cases where `navigator.languages` isn't supported by the browser, the function instead retrieves a preferred language via `navigator.language` and returns it if it matches any of the supported language codes.
4. If the above step fails, the function simply returns `bg` as a default code.

## `imageSizes`

```ts
function imageSizes(widths: number[]): string;

imageSizes([300, 400, 500]);
```

Returns a string to be used for an `img`'s `sizes` property. The widths are defined in an ascending order (in terms of viewports). If there are four passed as arguments, then the last one corresponds to the `sm` viewport. However, if there are less, then the smallest viewport shifts up by the missing amount; for example, if you pass three widths, the last width applies to `md` and less. Passing two values will make the last one apply to `lg` and less.

## `imageUrl`

```ts
function imagesUrl(imageName: string): string;

imagesUrl("/myPicture.jpg");
```

Constructs a string representing an absolute path to the image. The "host" is retrieved from an environment variable. Note that `imageName` must start with a slash if your environment variable does not append one.

# `openDialog`

```ts
function openDialog(dialog: HTMLDialogElement): void;

const dialog = document.querySelector("dialog")!;

openDialog(dialog);
```

This function is meant to be used for dialogs created with the [`Dialog`](/src/common/README.md#Dialog) component. In addition to opening the passed dialog, the function also performs the following operations:

- blocks scrolling on the page
- pushes a new state into the user's history. The new state has a `dialogOpen` property, which equals `true`. This behavior is used to implement a "close by going back" feature for the modals. The aforementioned property is used by the `Dialog`s to go back in history if the user closes the modal by any means other than going back.

## `srcset`

```ts
function srcset(srcset: Array<Srcset>): string;

srcset([
  ["/image-small.jpg", 400],
  ["/image-medium.jpg", 500],
]);
```

Constructs a string to be used in an `img`'s `srcset` attribute. The strings provided in the array arguments should be the file names only (in other words, do not put the host), as the function internally uses `imageUrl`.
