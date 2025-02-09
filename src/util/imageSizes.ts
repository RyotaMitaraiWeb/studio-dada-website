import { viewports } from "../common/viewports";

export function imageSizes(widths: number[]) {
  const length = widths.length;
  const viewportWidths = Object.values(viewports).slice(1);

  return widths.map((width, i) => {
    const viewportWidth = viewportWidths[i];

    if (i + 1 === length) {
      return `${width}px`;
    }

    return `(max-width: ${viewportWidth}px) ${width}px`
  })
    .join(', ');
}