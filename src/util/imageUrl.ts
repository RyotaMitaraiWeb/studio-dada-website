export function imagesUrl(imageName: string) {
  let url = import.meta.env.VITE_PUBLIC_IMAGES;
  
  return url + imageName;
}