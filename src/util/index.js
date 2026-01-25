import fallbackImage from "@/assets/images/not_found/image_not_found.png";
/**
 * showImage by path if path is not available then show static image
*/
export const showImage = (path) => {
  if (!path) return fallbackImage;
  return `https://yobas.innovationpixel.com/public/storage/${path}`
};
