import { imagesUrl } from "./imageUrl";

export type Srcset = [string, number];

export function srcset(srcset: Array<Srcset>) {
  return srcset
    .map(src => {
      const [url, width] = src;
      const image = imagesUrl(url);

      return `${image} ${width}w`
    })
    .join(', ');
}
